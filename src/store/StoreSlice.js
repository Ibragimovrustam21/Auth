import { createSlice } from '@reduxjs/toolkit';

const StoreSlice = createSlice({
  name: 'user-auth',
  initialState: {
    token: null,
    email: null,
    auth: false
  },
  reducers: {
    // Log In User
    addUser(state, action) {
      state.token = action.payload.token
      state.email = action.payload.email
      state.auth = true
      localStorage.setItem('user', JSON.stringify(state))
    },
    // Log out User
    removeUser(state) {
      state.token = null
      state.email = null
      state.auth = false
      localStorage.removeItem('user')
    }
  }
})

export const { addUser, removeUser } = StoreSlice.actions

export default StoreSlice.reducer


