import "./App.css";
import { Routes, Route } from "react-router-dom";

import MenuBar from "./pages/MenuBar";
import HomePage from "./pages/HomePage";
import DatasetDisplay from "./pages/DatasetPage";
import MyBlogs from "./pages/BlogsPage";

function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-300 p-4">
        <MenuBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/datasets" element={<DatasetDisplay />} />
          <Route path="/blogs" element={<MyBlogs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
