import { useMediaQuery } from "@/utils";
import { ChatDesktopPage } from "./ChatDesktopPage";
import { ChatMobilePage } from "./ChatMobilePage";

export const ChatPage = () => {
  const { md } = useMediaQuery();

  return <>{md ? <ChatDesktopPage /> : <ChatMobilePage />}</>;
};
