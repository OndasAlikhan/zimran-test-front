import { DialogueList } from "../../components/DialogueList";
import { DialogueWindow } from "../../components/DialogueWindow";
import { useSelector } from "react-redux";

export const ChatDesktopPage = () => {
  const currentChatId = useSelector(
    (state: any) => state.chatSlice.currentChat,
  );

  return (
    <div className="grid grid-cols-[minmax(10px,300px)_1fr] h-full">
      <DialogueList />

      {currentChatId ? (
        <DialogueWindow />
      ) : (
        <div className="relative">
          <span className="absolute top-[50%] right-[50%] px-3 rounded-md translate-x-[50%]">
            Select a chat to start chatting
          </span>
        </div>
      )}
    </div>
  );
};
