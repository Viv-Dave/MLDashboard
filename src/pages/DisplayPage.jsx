import { Outlet } from "react-router-dom";

export default function DisplayPage() {
  return (
    <div className="mt-6">
      <Outlet />
    </div>
  );
}
