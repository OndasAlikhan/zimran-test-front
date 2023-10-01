import { useState } from "react";
import { DialogueItem } from "./DialogueItem";
import {
  useAddChatMutation,
  useGetChatsQuery,
  useDeleteChatMutation,
} from "@/store";
import { BsPlus, BsFillXCircleFill } from "react-icons/bs";
import { Dialogue } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { ChatState, setChat } from "@/store/chatSlice";

export const DialogueList = () => {
  const dispatch = useDispatch();
  const currentChatId = useSelector(
    (state: { chatSlice: ChatState }) => state.chatSlice.currentChat,
  );

  const { data = [] as Dialogue[], isLoading } = useGetChatsQuery(""); // fetch chats from server
  const [requestAddChat, { isError: isAddChatError }] = useAddChatMutation();
  const [requestDeleteChat, { isError: isDeleteChatError }] =
    useDeleteChatMutation();

  const [newChatName, setNewChatName] = useState("");
  const [openAddChat, setOpenAddChat] = useState(false);

  const handleOpenAddChat = () => {
    setOpenAddChat((prev) => !prev);
  };
  const handleChooseChat = (id: number) => {
    dispatch(setChat({ id }));
  };

  const handleAddChat = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newChatName) {
      await requestAddChat({ title: newChatName }).unwrap();
      setNewChatName("");
      setOpenAddChat(false);
    }
  };
  const handleDeleteChat = (id: number) => {
    if (id) {
      requestDeleteChat({ id });
    }
  };

  if (isLoading) return <span>Loading...</span>;

  return (
    <div className=" w-full">
      {openAddChat ? (
        <form
          onSubmit={(e) => handleAddChat(e)}
          className="h-24 flex items-center justify-center border"
        >
          <input
            type="text"
            className="border h-10 rounded-sm"
            value={newChatName}
            onChange={(e) => setNewChatName(e.target.value)}
          />
          <span>
            <BsFillXCircleFill
              className="w-[30px] hover:cursor-pointer"
              onClick={handleOpenAddChat}
            />
          </span>
        </form>
      ) : (
        <div className="h-24 border text-xl px-8 py-5 flex items-center font-semibold justify-between">
          <span>Messages ({data.length})</span>

          <span onClick={handleOpenAddChat} className="hover:cursor-pointer">
            <BsPlus />
          </span>
        </div>
      )}

      <div className="overflow-y-auto h-full max-h-[calc(100vh-188px)]">
        {data.map((dialogue: Dialogue) => (
          <DialogueItem
            key={dialogue.id}
            dialogue={dialogue}
            current={dialogue.id === currentChatId}
            onChoose={handleChooseChat}
            onDelete={handleDeleteChat}
          />
        ))}
      </div>
    </div>
  );
};
