import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addUser, removeUser } from "../Store/Slices/user";

const AddUserModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleAddUser = async (e) => {
    e.preventDefault();

    const first_name = e.target[0].value;
    const last_name = e.target[1].value;
    const age = e.target[2].value;
    const email = e.target[3].value;
    const image = e.target[4].value;
    const password = e.target[5].value;

    if (!first_name || !last_name || !age || !email || !image || !password) {
      return toast("All fields are required!", { type: "error" });
    }

    const newUser = {
      first_name,
      last_name,
      age,
      email,
      image,
      password,
    };

    const { data: user } = await axios.post("/users", newUser);
    dispatch(addUser(user));
    toast("User is added", { type: "success" });
    onClose();
  };

  return (
    <div className="fixed inset-12 bg-white border border-black shadow-2xl p-8">
      <h2 className="text-4xl border-b pb-4">New User</h2>
      <form onSubmit={handleAddUser}>
        <div className="mt-4">
          <label className="text-lg" htmlFor="first_name">
            First Name
          </label>
          <input
            className="w-full border px-4 py-2 rounded-md"
            type="text"
            name=""
            id="first_name"
            placeholder="Eshmat"
          />
        </div>
        <div className="mt-4">
          <label className="text-lg" htmlFor="last_name">
            Last Name
          </label>
          <input
            className="w-full border px-4 py-2 rounded-md"
            type="text"
            name=""
            id="last_name"
            placeholder="Toshmatov"
          />
        </div>
        <div className="mt-4">
          <label className="text-lg" htmlFor="age">
            Age
          </label>
          <input
            className="w-full border px-4 py-2 rounded-md"
            type="number"
            name=""
            id="age"
            placeholder="32"
          />
        </div>
        <div className="mt-4">
          <label className="text-lg" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border px-4 py-2 rounded-md"
            type="text"
            name=""
            id="email"
            placeholder="eshmat@gmail.com"
          />
        </div>
        <div className="mt-4">
          <label className="text-lg" htmlFor="image">
            Image
          </label>
          <input
            className="w-full border px-4 py-2 rounded-md"
            type="url"
            name=""
            id="image"
            placeholder="https://example.com/user.png"
          />
        </div>
        <div className="mt-4">
          <label className="text-lg" htmlFor="password">
            Password
          </label>
          <input
            className="w-full border px-4 py-2 rounded-md"
            type="password"
            name=""
            id="password"
            placeholder="******"
          />
        </div>
        <div className="mt-4 flex justify-end gap-4">
          <button
            onClick={onClose}
            type="reset"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            <i className="fa-solid fa-cancel"></i> Cancel
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md">
            <i className="fa-solid fa-save"></i> Save
          </button>
        </div>
      </form>
    </div>
  );
};

const Users = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((store) => store.user.users);

  const handleDeleteUser = async (user) => {
    if (confirm("Are you sure to delete this user?")) {
      await axios.delete(`/users/${user.id}`);
      toast("User is deleted", { type: "info" });
      dispatch(removeUser(user.id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-white text-8xl">Statistics</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          <i className="fa-solid fa-add"></i> Create a User
        </button>
        {showModal && <AddUserModal onClose={() => setShowModal(false)} />}
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              ID.
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">
                <img
                  src={user.image}
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
              </td>
              <td className="px-6 py-4">{user.id}</td>
              <td className="px-6 py-4">
                {user.first_name} {user.last_name}
              </td>
              <td className="px-6 py-4">{user.age}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleDeleteUser(user)}
                  className="px-4 py-2 bg-rose-600 text-white rounded-md"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
