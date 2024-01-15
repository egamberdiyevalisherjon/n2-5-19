import { createSlice } from "@reduxjs/toolkit";

const initialState = { users: [] };

const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.users = payload;
    },
    resetUser(state) {
      state.users = [];
    },
    addUser(state, { payload }) {
      state.users.push(payload);
    },
    removeUser(state, { payload }) {
      state.users = state.users.filter((user) => user.id !== payload);
    },
  },
});

const userReducer = userSlice.reducer;

export default userReducer;

export const { setUser, addUser, removeUser, resetUser } = userSlice.actions;
