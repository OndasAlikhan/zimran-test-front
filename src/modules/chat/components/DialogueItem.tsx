export const DialogueItem = () => {
  return (
    <div className="max-h-24 border text-xl px-8 py-5 flex items-start flex-col gap-1 border-t-0 hover:bg-gray-100">
      <div className="flex justify-between w-full gap-1">
        <span className="text-base font-semibold">Aslan</span>
        <span className="bg-purple-600 text-xs py-1 px-2 rounded-full text-white">
          1
        </span>
      </div>
      <div className="flex justify-between w-full text-gray-500 text-xs">
        <span>Hi whats up?</span>
        <span>10:44</span>
      </div>
    </div>
  );
};
