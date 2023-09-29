import { createSlice } from "@reduxjs/toolkit";

type ChatState = {
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
    // addTodo(state, action) {
    //   state.todos.push({
    //     id: new Date().toISOString(),
    //     text: action.payload.text,
    //     completed: false,
    //   });
    // },
    // removeTodo(state, action) {
    //   console.log("calling removeTodo");
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    // },
    // toggleTodoComplete(state, action) {
    //   const toggledTodo = state.todos.find(
    //     (todo) => todo.id === action.payload.id,
    //   );
    //   toggledTodo.completed = !toggledTodo.completed;
    // },
  },
});

export const { setChat } = chatSlice.actions;

export default chatSlice.reducer;
