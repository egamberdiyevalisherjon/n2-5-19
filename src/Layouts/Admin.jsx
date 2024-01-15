import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../Partials/Header";
import Sidebar from "../Partials/Sidebar";
import { setUser } from "../Store/Slices/user";

const AdminLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const queries = [
      axios.get("/users"),
      axios.get("/products"),
      axios.get("/orders"),
    ];

    Promise.all(queries).then(
      ([{ data: usersData }, { data: productsData }, { data: ordersData }]) => {
        dispatch(setUser(usersData));
        // setProducts(productsData);
        // setOrders(ordersData);
      }
    );
  }, [dispatch]);

  return (
    <div className="grid grid-cols-6 h-screen grid-rows-10">
      <div className="row-span-10">
        <Sidebar />
      </div>
      <div className="col-span-5 h-min">
        <Header />
      </div>
      <main className="col-span-5 p-8 relative row-span-9">
        <div className="bg-purple-700 h-[200px] absolute top-0 left-0 right-0 -z-10"></div>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
