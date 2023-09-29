import { FC } from "react";
import { Message as MessageType } from "../../types";

type Props = {
  message: MessageType;
  type: "incoming" | "outcoming";
};

export const Message: FC<Props> = ({ message, type }) => {
  return (
    <>
      {type === "incoming" && (
        <span
          className={`bg-white p-4 w-fit rounded-2xl transition ${
            message.animate ? "animate-fromLeft" : ""
          }`}
        >
          {message.text}
        </span>
      )}
      {type === "outcoming" && (
        <span
          className={`bg-purple-400 p-4 w-fit self-end rounded-2xl ${
            message.animate ? "animate-fromRight" : ""
          }`}
        >
          {message.text}
        </span>
      )}
    </>
  );
};
