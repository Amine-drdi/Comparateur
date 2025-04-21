import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getUserProfile } from '../api/authApi';

// Typage de l'utilisateur (à adapter selon les données retournées)
interface User {
  id: string;
  name: string;
  email: string;
  // ajoute d'autres champs si besoin
}

// Typage de l'état
interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Typage du thunk : on passe un `userId` (string) et on retourne un `User`
export const fetchUserProfile = createAsyncThunk<User, string, { rejectValue: string }>(
  'user/fetchUserProfile',
  async (userId, thunkAPI) => {
    try {
      const data = await getUserProfile(userId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Erreur lors du chargement du profil');
    }
  }
);

// État initial
const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error.message ?? 'Erreur inconnue';
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;

