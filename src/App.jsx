import "./App.css";
import { useState } from "react";

import MenuBar from "./components/MenuBar";
import HomePage from "./components/HomePage";
import DatasetDisplay from "./components/DatasetPage";
import MyBlogs from "./components/BlogsPage";

function App() {
  const [page, setPage] = useState(1);

  function DisplayPage() {
    switch (page) {
      case 1:
        return <HomePage />;

      case 2:
        return <DatasetDisplay />;

      case 3:
        return <MyBlogs />;

      default:
        return <HomePage />;
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-300 p-4">
        <MenuBar setPage={setPage} />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <DisplayPage />
      </div>
    </div>
  );
}

export default App;
