export const Header = () => {
  return (
    <header
      className="flex justify-between items-center p-5 border h-[92px]"
      data-testid="header"
    >
      <span className="text-lg flex items-center gap-1">
        <div className="w-10 h-10">
          <img src="cloud.svg" className="w-full h-full" />
        </div>
        CloudMix
      </span>
      <div className="text-base flex gap-1 flex-col items-end">
        <span>Chat bot</span>
        <span className="text-sm text-gray-400">App</span>
      </div>
    </header>
  );
};
