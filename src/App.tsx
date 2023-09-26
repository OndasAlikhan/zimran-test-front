// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { DefaultLayout } from "./layout/DefaultLayout";

import { useRoutes } from "react-router-dom";
import router from "./router.tsx";

function App() {
  return useRoutes(router);
}

export default App;
