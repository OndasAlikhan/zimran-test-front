import { FC } from "react";

type Props = {
  text: string;
  type: "incoming" | "outcoming";
};

export const Message: FC<Props> = ({ text, type }) => {
  return (
    <>
      {type === "incoming" && (
        <span className="bg-white p-4 w-fit rounded-2xl">{text}</span>
      )}
      {type === "outcoming" && (
        <span className="bg-purple-400 p-4 w-fit self-end rounded-2xl">
          {text}
        </span>
      )}
    </>
  );
};
