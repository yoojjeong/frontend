import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Statistics from "./features/statistics/pages/Statistics";

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
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export default function Main() {
  return <RouterProvider router={router} />;
}
