import { useState } from "react";

export default function Headers() {
  // 메뉴의 열고 닫는 상태를 관리
  const [isOpen, setIsOpen] = useState(false);

  // 메뉴를 열고 닫음 -> 이전 상태를 반전시키고 저장
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Daily24
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <div className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
              본점
            </div>
            <div className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
              Get started
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
