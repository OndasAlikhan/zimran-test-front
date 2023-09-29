import { FC } from "react";
import { BsTrash } from "react-icons/bs";
import { Dialogue } from "@/modules/chat/types";
import { parseDate } from "@/utils";

type Props = {
  dialogue: Dialogue;
  current: boolean;
  onDelete: (id: number) => void;
  onChoose: (id: number) => void;
};

export const DialogueItem: FC<Props> = ({
  dialogue,
  current,
  onDelete,
  onChoose,
}) => {
  return (
    <div
      className={`border grid grid-rows-1 grid-cols-[1fr_40px] h-[84px] ${
        current ? "bg-gray-100" : ""
      }`}
    >
      <div
        onClick={() => onChoose(dialogue.id)}
        className="max-h-24  text-xl px-8 py-5 flex items-start flex-col gap-1 border-t-0 hover:bg-gray-200"
      >
        <div className="flex justify-between w-full gap-1">
          <span className="text-base font-semibold">{dialogue.title}</span>

          {dialogue?._count?.messages ? (
            <span className="bg-purple-600 text-xs py-1 px-2 rounded-full text-white">
              {dialogue?._count?.messages}
            </span>
          ) : null}
        </div>
        <div className="flex justify-between w-full text-gray-500 text-xs">
          <span className="break-keep">
            {dialogue.messages?.[0]?.text || ""}
          </span>
          <span className="break-keep">
            {parseDate(dialogue.messages?.[0]?.createdAt || "")}
          </span>
        </div>
      </div>
      <div
        className="flex justify-center items-center hover:bg-red-500 hover:text-white"
        onClick={() => onDelete(dialogue.id)}
      >
        <BsTrash />
      </div>
    </div>
  );
};
