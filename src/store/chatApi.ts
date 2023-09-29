import { Dialogue, Message } from "@/modules/chat/types";
import { socketDestroy, socketInit } from "@/socket";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
  reducerPath: "chats",
  tagTypes: ["Chats", "Messages"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (build) => ({
    getChats: build.query({
      query: () => `chats`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: string }) => ({
                type: "Chats" as const,
                id,
              })),
              { type: "Chats", id: "LIST" },
            ]
          : [{ type: "Chats", id: "LIST" }],
    }),
    getChat: build.query({
      query: (chatId) => `chats/${chatId}`,
      providesTags: (result, error, id) => [{ type: "Chats", id }],
    }),
    addChat: build.mutation({
      query: (body) => ({
        url: "chats",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Chats", id: "LIST" }],
    }),
    deleteChat: build.mutation({
      query: (body) => ({
        url: "chats",
        method: "DELETE",
        body,
      }),
      invalidatesTags: [{ type: "Chats", id: "LIST" }],
    }),
    unreadMessages: build.mutation({
      query: (chatId) => ({
        url: `unread/${chatId}`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Chats", id: "LIST" }],
    }),
    getMessages: build.query({
      query: (id: number) => `chats/${id}/messages`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: string }) => ({
                type: "Messages" as const,
                id,
              })),
              { type: "Messages", id: "LIST" },
            ]
          : [{ type: "Messages", id: "LIST" }],
      async onCacheEntryAdded(
        arg,
        {
          updateCachedData,
          cacheDataLoaded,
          cacheEntryRemoved,
          dispatch,
          getState,
        },
      ) {
        try {
          await cacheDataLoaded;
          // saving incoming messages
          const onReceiveMessage = (data: Message) => {
            console.log("from socket data.chatId", data.chatId);
            console.log("about to invalidate arg:", {
              type: "Chats",
              id: arg,
            });
            if (arg === data.chatId) {
              updateCachedData((draft) => {
                draft.unshift({ ...data, animate: true });
              });

              // chatApi.util.invalidateTags([{ type: "Chats", id: arg }]);
              dispatch({
                type: `${chatApi.reducerPath}/invalidateTags`,
                payload: [{ type: "Chats", id: arg }],
              });
            }
          };
          // saving outcoming messages that are saved on server
          const onSentMessageSaved = (data: Message) => {
            if (arg === data.chatId)
              updateCachedData((draft) => {
                draft.unshift({ ...data, animate: true });
              });
          };

          socketInit({
            onReceiveMessage,
            onSentMessageSaved,
          });
        } catch (err) {
          console.error(err);
        }

        await cacheEntryRemoved;
        socketDestroy();
      },
    }),
  }),
});

export const {
  useGetChatsQuery,
  useAddChatMutation,
  useDeleteChatMutation,
  useUnreadMessagesMutation,
  useGetMessagesQuery,
} = chatApi;
