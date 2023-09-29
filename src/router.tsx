import type { RouteObject } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { ChatPage } from "./modules/chat/pages/ChatPage/ChatPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      // The index route defines what should be displayed
      // on the default route i.e. '/'
      { index: true, element: <ChatPage /> },
      // { path: "/home", element: home },
      // { path: "/users", element: home },
      // { path: "/widgets", element: home },
    ],
  },
];

export default routes;
