import { Message } from "./Message";
import { Message as MessageType } from "../../types";
import "./tumbleweed-animation.css";

type Props = {
  messages: MessageType[];
};

export const MessagesContainer = ({ messages }: Props) => {
  return (
    <div className="bg-[#F2F1F4] p-4 w-full flex gap-2 overflow-y-auto overflow-x-hidden flex-col-reverse relative">
      {messages?.length ? (
        messages?.map((msg) => {
          const type = msg.sender ? "outcoming" : "incoming";
          return <Message key={msg.id} message={msg} type={type} />;
        })
      ) : (
        <div className="absolute bottom-[0%] left-[-20%] h-[60px] w-[60px] tumbleweed-container">
          <img src="/tumbleweed.png" alt="" className="tumbleweed" />
        </div>
      )}
    </div>
  );
};
