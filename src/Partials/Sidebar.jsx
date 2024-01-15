import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-slate-800 text-white p-6 h-full">
      <h2 className="text-4xl font-bold text-purple-400">Admin UI</h2>
      <nav className="mt-6">
        <ul className="grid gap-4">
          <li>
            <Link to={"/admin/stats"}>Statistics</Link>
          </li>
          <li>
            <Link to={"/admin/users"}>Users</Link>
          </li>
          <li>
            <Link to={"/admin/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/admin/orders"}>Orders</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
