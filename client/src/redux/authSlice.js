import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { verifyCode } from '../api/authApi';

// 🔐 Login via code reçu par email
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, code }, thunkAPI) => {
    try {
      const res = await verifyCode(email, code);
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 🔐 Récupération du profil utilisateur depuis token
export const fetchUserProfileFromToken = createAsyncThunk(
  'auth/fetchUserProfileFromToken',
  async (_, thunkAPI) => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Échec chargement user via token');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  },
  reducers: {
    // ✅ logout
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    // ✅ Ajout de setUser pour usage manuel avec dispatch(setUser(...))
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserProfileFromToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfileFromToken.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserProfileFromToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      });
  },
});

// ✅ Ajoute setUser à l'export
export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
