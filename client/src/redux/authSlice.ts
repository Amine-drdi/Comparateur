import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { verifyCode } from '../api/authApi';

// ✅ Interface User complète selon ta base de données
export interface User {
  _id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  isVerified: boolean;
  createdAt: string;
}

interface LoginResponse {
  token: string;
  user: User;
}

interface LoginPayload {
  email: string;
  code: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

// 🔐 Login via code
export const loginUser = createAsyncThunk<LoginResponse, LoginPayload, { rejectValue: string }>(
  'auth/loginUser',
  async ({ email, code }, thunkAPI) => {
    try {
      const res = await verifyCode(email, code); // ✅ res = { token, user }
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue('Erreur lors de la vérification');
    }
  }
);

// 🔐 Profil utilisateur depuis token
export const fetchUserProfileFromToken = createAsyncThunk<User, void, { rejectValue: string }>(
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

// 🔒 Chargement initial depuis localStorage
let parsedUser: User | null = null;
try {
  const storedUser = localStorage.getItem('user');
  if (storedUser && storedUser !== 'undefined') {
    parsedUser = JSON.parse(storedUser);
  }
} catch {
  parsedUser = null;
}

// ✅ État initial
const initialState: AuthState = {
  user: parsedUser,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    setUser: (state, action: PayloadAction<User>) => {
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
      state.token = action.payload.token; // 🟢 cette ligne est manquante
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Erreur inconnue";
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
        state.user = null;
        state.error = action.payload ?? 'Erreur inconnue';
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;

