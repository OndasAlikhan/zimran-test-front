import { ChatState } from "@/store/chatSlice";
import { DialogueList } from "../../components/DialogueList";
import { DialogueWindow } from "../../components/DialogueWindow";
import { useSelector } from "react-redux";

export const ChatMobilePage = () => {
  const currentChatId = useSelector(
    (state: { chatSlice: ChatState }) => state.chatSlice.currentChat,
  );
  return (
    <div className="grid grid-cols-1 h-full">
      {currentChatId ? <DialogueWindow /> : <DialogueList />}
    </div>
  );
};
