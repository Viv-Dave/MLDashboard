import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <div className="flex flex-col gap-4">
      <Link to="/">Home</Link>

      <Link to="/datasets">Datasets</Link>

      <Link to="/blogs">Blogs</Link>
    </div>
  );
}

export default MenuBar;
