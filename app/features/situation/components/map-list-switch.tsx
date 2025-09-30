import { useLocation, useNavigate } from "react-router";
import {Map, List} from "lucide-react";

export default function MapListSwitch() {
  const location = useLocation();
  const navigate = useNavigate();

  const isList = location.pathname === "/situation/list";
  const baseClass = "flex items-center justify-between gap-2 px-4 rounded-full transition-colors duration-300" +
    " text-white cursor-pointer";
  return (
    <div className="relative flex h-12 rounded-full bg-slate-300">
      <button
        onClick={() => navigate("/situation")}
        className={`${baseClass} ${!isList ? "bg-blue-500 font-bold" : "font-medium"}`}
      >
        {!isList && <Map size={16} />}
        지도 화면
      </button>

      <button
        onClick={() => navigate("/situation/list")}
        className={`${baseClass} ${isList ? "bg-blue-500 font-bold" : "font-medium"}`}
      >
        {isList && <List size={16} />}
        리스트 화면
      </button>
    </div>
  );
}
