import { useDispatch } from "react-redux";
import { Dialogue } from "../../types";
import { BsArrowLeftShort } from "react-icons/bs";
import { setChat } from "@/store/chatSlice";

type Props = {
  currentChat: Dialogue;
};
export const WindowHeader = ({ currentChat }: Props) => {
  const dispatch = useDispatch();
  const handleGoBack = () => {
    dispatch(setChat({ id: null }));
  };
  return (
    <div className="ps-4 px-8 py-5 flex items-center gap-3 border border-l-0 h-24">
      <span className="md:hidden" onClick={(e) => handleGoBack()}>
        <BsArrowLeftShort className="w-[30px] h-[30px] cursor-pointer" />
      </span>
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold">{currentChat.title}</span>
        <span className="text-xs text-gray-500">Online</span>
      </div>
    </div>
  );
};
