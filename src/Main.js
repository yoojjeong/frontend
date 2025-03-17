import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import SalesToday from "./features/statistics/pages/SalesToday";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      {
        // 메인 화면
        path: "/",
        element: <Home />,
      },
      {
        // 매출 조회
        path: "/statistics/salesToday",
        element: <SalesToday />,
      },
    ],
  },
]);

export default function Main() {
  return <RouterProvider router={router} />;
}
