import { DialogueList } from "../components/DialogueList";
import { DialogueWindow } from "../components/DialogueWindow";

export const ChatPage = () => {
  return (
    <div className="grid grid-cols-[500px_1fr] h-full">
      <DialogueList />
      <DialogueWindow />
    </div>
  );
};
