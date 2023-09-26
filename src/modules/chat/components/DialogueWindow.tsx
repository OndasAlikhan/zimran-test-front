import { MessagesContainer } from "./dialogue-window/MessagesContainer";
import { MessageInput } from "./dialogue-window/MessageInput";
import { WindowHeader } from "./dialogue-window/WindowHeader";

export const DialogueWindow = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[6rem_1fr_4rem] h-full max-h-[calc(100vh-92px)]">
      <WindowHeader />
      <MessagesContainer />
      <MessageInput />
    </div>
  );
};
