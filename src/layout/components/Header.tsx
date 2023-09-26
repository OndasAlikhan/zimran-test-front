export const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 border h-[92px] ">
      <span className="text-lg">CloudMix</span>
      <div className="text-base flex gap-1 flex-col items-end">
        <span>Samurai Moew</span>
        <span className="text-sm text-gray-400">Logout</span>
      </div>
    </header>
  );
};
