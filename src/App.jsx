import { Routes, Route } from "react-router-dom";
import AdminLayout from "./Layouts/Admin";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import Stats from "./Pages/Stats";
import Users from "./Pages/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/stats" element={<Stats />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/products" element={<Products />} />
        </Route>
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
      </Routes>
    </>
  );
}

export default App;
