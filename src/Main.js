import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Statistics from "./features/statistics/pages/Statistics";

import GoodsByCategory from "./features/cart_analysis/pages/GoodsByCategory";
import GoodsBySubCategory from "./features/cart_analysis/pages/GoodsBySubCategory";
import GoodsDetail from "./features/cart_analysis/pages/GoodDetail";
import Association from "./features/cart_analysis/pages/Association";
import Home from "./pages/Home";
import GoodsList from "./features/cart_analysis/pages/GoodsList";

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
      {
        // 상품찾기
        path: "/categories/findAll",
        element: <GoodsList />,
      },
      {
        // 카테고리별
        path: "/categories/:firstname",
        element: <GoodsByCategory />,
      },
      {
        // 카테고리별 ( 소분류 )
        path: "/categories/:firstname/:secondname",
        element: <GoodsBySubCategory />,
      },
      {
        // 상품상세보기
        path: "/goods/findById/:id",
        element: <GoodsDetail />,
      },
      {
        // 장바구니분석
        path: "/association",
        element: <Association />,
      },
    ],
  },
]);

export default function Main() {
  return <RouterProvider router={router} />;
}
