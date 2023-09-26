import { useState } from "react";
import { DialogueItem } from "./DialogueItem";

export const DialogueList = () => {
  const [listOfDialogues, setListOfDialogues] = useState([1, 1, 1]);

  return (
    <div className="max-w-[50vw] w-full">
      <div className="h-24 border text-xl px-8 py-5 flex items-center font-semibold">
        Messages ({listOfDialogues.length})
      </div>
      <DialogueItem />
      <DialogueItem />
      <DialogueItem />
    </div>
  );
};
