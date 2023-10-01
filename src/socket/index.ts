import { Message } from "@/modules/chat/types";
import { io } from "socket.io-client";

type SendNewMessageParam = {
  chatId: number;
  text: string;
};
type SocketInitParams = {
  onReceiveMessage: (data: Message) => void;
  onSentMessageSaved: (data: Message) => void;
};

// "undefined" means the URL will be computed from the `window.location` object
const URL = import.meta.env.VITE_BACKEND_URL;

export const socket = io(URL, { transports: ["websocket"] });

const SocketEvents = {
  CONNECT: "CONNECT",
  DISCONNECT: "DISCONNECT",
  RECEIVED_MESSAGE: "receive_message",
  SENT_MESSAGE_SAVED: "sent_message_saved",
  NEW_MESSAGE: "new_message",
};

export const socketInit = ({
  onReceiveMessage,
  onSentMessageSaved,
}: SocketInitParams) => {
  socket.on(SocketEvents.CONNECT, () => console.log("connected"));
  socket.on(SocketEvents.DISCONNECT, () => console.log("disconnected"));

  socket.on(SocketEvents.RECEIVED_MESSAGE, (data) => {
    console.log("receive_message", data);
    onReceiveMessage(data);
  });
  socket.on(SocketEvents.SENT_MESSAGE_SAVED, (data) => {
    console.log("sent_message_saved", data);
    onSentMessageSaved(data);
  });
};

export const socketDestroy = () => {
  socket.off(SocketEvents.CONNECT, () => console.log("connected"));
  socket.off(SocketEvents.DISCONNECT, () => console.log("disconnected"));
};

export const sendNewMessage = (message: SendNewMessageParam) => {
  socket.emit(SocketEvents.NEW_MESSAGE, message);
};
