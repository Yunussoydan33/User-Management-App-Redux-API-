import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
});

export const addUser = createAsyncThunk('users/addUser', async (newUser) => {
  const res = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
  return res.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    deleteUser: (state, action) => {
      const userId = action.payload;
      state.data = state.data.filter((user) => user.id !== userId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});

export const { deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
