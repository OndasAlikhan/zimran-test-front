import { configureStore } from "@reduxjs/toolkit";

import { chatApi } from "./chatApi";
import chatSlice from "./chatSlice";

export const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
    chatSlice: chatSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatApi.middleware),
});
