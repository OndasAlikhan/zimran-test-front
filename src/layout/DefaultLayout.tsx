import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="h-[calc(100%-92px)]">
        <Outlet />
      </main>
    </>
  );
};
