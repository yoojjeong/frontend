import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import Sidebar from "../components/Sidebar";
import Headers from "../components/Header";
=======
import Headers from "../components/Headers";
import Sidebar from "../components/Sidebar";
>>>>>>> parent of b224ced (Merge pull request #34 from KDT7team1/dev)

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
