import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Store/Slices/user";

const Stats = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const users = useSelector((store) => store.user.users);

  return (
    <div>
      <h1 className="text-white text-8xl">Statistics</h1>
      <div className="lg:flex mt-4 gap-4">
        <div className="h-[400px] bg-white lg:flex-1 rounded-xl shadow-xl p-8">
          <h2 className="text-4xl">Users</h2>
          <p className="text-8xl">{users.length}</p>
        </div>
        <div className="h-[400px] bg-white lg:flex-1 rounded-xl shadow-xl p-8">
          <h2 className="text-4xl">Products</h2>
          <p className="text-8xl">{products.length}</p>
        </div>
        <div className="h-[400px] bg-white lg:flex-1 rounded-xl shadow-xl p-8">
          <h2 className="text-4xl">Orders</h2>
          <p className="text-8xl">{orders.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
