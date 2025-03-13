import { useState } from "react";

export default function Sidebar() {
  // 메뉴의 열고 닫는 상태를 관리
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const [isStocksOpen, setIsStocksOpen] = useState(false);
  const [isGoodsOpen, setIsGoodsOpen] = useState(false);

  return (
    <div className="relative flex h-[calc(100vh-2rem)] w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <div className="p-4 mb-2">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Sidebar
        </h5>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        {/* 사이드메뉴1 */}
        <div className="relative block w-full">
          <div
            role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none bg-blue-gray-50/50 text-start text-blue-gray-700 hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <button
              type="button"
              className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-900 hover:text-blue-gray-900"
              onClick={() => setIsDashboardOpen((prev) => !prev)}
            >
              <div class="grid mr-4 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                대시보드
              </p>
              <span
                className={`ml-4 transition-transform ${
                  isDashboardOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 mx-auto transition-transform rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="overflow-hidden">
            {/* 서브 메뉴: isDashBoardOpen이 true일 때만 표시 */}
            {isDashboardOpen && (
              <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                <nav className="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                  <div
                    role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                    onClick={() => isDashboardOpen((prev) => !prev)}
                  >
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    매출통계
                  </div>
                  <div
                    role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    매출분석
                  </div>
                  <div
                    role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    이상매출알림
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
        {/* 사이드메뉴2 */}
        <div className="relative block w-full">
          <div
            role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <button
              type="button"
              className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900"
              onClick={() => setIsSalesOpen((prev) => !prev)}
            >
              <div className="grid mr-4 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                매출조회
              </p>
              <span
                className={`ml-4 transition-transform ${
                  isSalesOpen ? "" : "rotate-180"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 mx-auto transition-transform"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="overflow-hidden">
            {/* 서브 메뉴: isDashBoardOpen이 true일 때만 표시 */}
            {isSalesOpen && (
              <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                <nav className="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                  <div
                    role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    일간 매출 조회
                  </div>
                  <div
                    role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    주간 매출 조회
                  </div>
                  <div
                    role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    월간 매출 조회
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
        {/* 사이드메뉴 3 */}
        <div
          role="button"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="grid mr-4 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          장바구니 분석
          <div className="grid ml-auto place-items-center justify-self-end">
            <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-blue-gray-500/20 text-blue-gray-900">
              <span className="">14</span>
            </div>
          </div>
        </div>
        {/* 사이드메뉴4 */}
        <div className="relative block w-full">
          <div
            role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <button
              type="button"
              className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900"
              onClick={() => setIsStocksOpen((prev) => !prev)}
            >
              <div className="grid mr-4 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                재고관리
              </p>
              <span
                className={`ml-4 transition-transform ${
                  isSalesOpen ? "" : "rotate-180"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 mx-auto transition-transform"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="overflow-hidden">
            {/* 서브 메뉴: isStocksOpen이 true일 때만 표시 */}
            {isStocksOpen && (
              <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                <nav className="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                  <div
                    role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    재고현황
                  </div>
                  <div
                    role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    발주
                  </div>
                  <div
                    role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    폐기관리
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
        {/* 사이드메뉴5 */}
        <div className="relative block w-full">
          <div
            role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <button
              type="button"
              className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900"
              onClick={() => setIsGoodsOpen((prev) => !prev)}
            >
              <div className="grid mr-4 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                상품관리
              </p>
              <span
                className={`ml-4 transition-transform ${
                  isGoodsOpen ? "" : "rotate-180"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 mx-auto transition-transform"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="overflow-hidden">
            {/* 서브 메뉴: isGoodsOpen이 true일 때만 표시 */}
            {isGoodsOpen && (
              <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                <nav className="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                  <div
                    role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    상품조회
                  </div>
                  <div
                    role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    상품등록
                  </div>
                  <div
                    role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    상품관리
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
