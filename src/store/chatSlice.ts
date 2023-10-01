import { createSlice } from "@reduxjs/toolkit";

export type ChatState = {
  currentChat: number | null;
};

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    currentChat: null,
  } as ChatState,
  reducers: {
    setChat(state, action) {
      state.currentChat = action.payload.id;
    },
  },
});

export const { setChat } = chatSlice.actions;

export default chatSlice.reducer;
