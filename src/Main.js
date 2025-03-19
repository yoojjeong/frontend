import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Association from "./features/cart_analysis/pages/Association";
import GoodsList from "./features/cart_analysis/pages/GoodsList";
import GoodsByCategory from "./features/cart_analysis/pages/GoodsByCategory";
import GoodsBySubCategory from "./features/cart_analysis/pages/GoodsBySubCategory";
import GoodsDetail from "./features/cart_analysis/pages/GoodDetail";

import InventoriesList from "./features/inventory/pages/InventoriesList";
import SalesToday from "./features/statistics/pages/SalesToday";
import DashBoard from "./pages/DashBoard";
import Login from './features/member/components/Login';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      id: "root",
      children: [
        {
          index: true, // '/' 경로를 의미
          element: <Home />,
        },
        {
          path: "statistics", // 상대 경로로 설정
          element: <Statistics />,
        },
        {
          path: "app/member/login", // 상대 경로로 변경
          element: <Login />, // 로그인 페이지 컴포넌트를 추가
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // v7 방식으로 경로 해석
    },
  }
);

export default function Main() {
  return <RouterProvider router={router} />;
}
