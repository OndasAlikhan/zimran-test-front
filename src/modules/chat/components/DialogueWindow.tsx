import { MessagesContainer } from "./dialogue-window/MessagesContainer";
import { MessageInput } from "./dialogue-window/MessageInput";
import { WindowHeader } from "./dialogue-window/WindowHeader";
import { useGetChatsQuery, useUnreadMessagesMutation } from "@/store";
import { Dialogue } from "../types";
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { sendNewMessage } from "@/socket";
import { useGetMessagesQuery } from "@/store";
import { ChatState } from "@/store/chatSlice";

export const DialogueWindow = () => {
  const currentChatId = useSelector(
    (state: { chatSlice: ChatState }) => state.chatSlice.currentChat,
  );
  const [requestUnreadMessages] = useUnreadMessagesMutation();

  const { data = [] as Dialogue[], isLoading: isChatsLoading } =
    useGetChatsQuery(""); // fetch chats from server
  const { data: messagesData, isLoading: isMessagesLoading } =
    useGetMessagesQuery(currentChatId || 0);

  useEffect(() => {
    const currentChat: Dialogue = data.find(
      (item: Dialogue) => item.id === currentChatId,
    );
    if (currentChat._count.messages > 0) requestUnreadMessages(currentChatId);
  }, [currentChatId, requestUnreadMessages, data]);

  // const currentChat = useMemo(() => {
  //   return data.find((item: Dialogue) => item.id === currentChatId);
  // }, [data, currentChatId]);
  const currentChat = data.find((item: Dialogue) => item.id === currentChatId);

  const handleMessageSubmit = (value: string) => {
    sendNewMessage({
      chatId: currentChat.id,
      text: value,
    });
  };

  return (
    <div className="grid grid-cols-1 grid-rows-[6rem_1fr_4rem] h-full max-h-[calc(100vh-92px)]">
      <WindowHeader currentChat={currentChat} />
      <MessagesContainer messages={messagesData} />
      <MessageInput onSubmit={handleMessageSubmit} />
    </div>
  );
};
