import { useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";

type Props = {
  onSubmit: (value: string) => void;
};

export const MessageInput = ({ onSubmit }: Props) => {
  const [value, setValue] = useState("");
  const handleKeyPress = (e: React.KeyboardEvent) => {
    console.log("key event");
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleClick = () => {
    handleSubmit();
  };

  const handleSubmit = () => {
    onSubmit(value);
    setValue("");
  };

  return (
    <span className="relative">
      <input
        type="text"
        className="p-4 w-full border h-full"
        placeholder="Write a message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <BsFillCaretRightFill
        onClick={handleClick}
        className="w-8 h-8 text-purple-600 absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer"
      />
    </span>
  );
};
