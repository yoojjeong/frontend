import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
