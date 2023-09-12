import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ loginHandler }) => {
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [user, setUser] = useState(true);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //!!
    //!!!!send data to the server for auth
    //!!
    setUser((prevState) => !prevState);
    console.log(user);
    if (user) {
      loginHandler(user);
      setFormData(initialFormData);
      navigate("/");
    }
  };
  return (
    <div className="grid place-items-center text-text h-screen ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[500px] text-accent gap-10"
      >
        <div className="relative w-full">
          <input
            className="peer bg-transparent w-full text-text border-b-[1px] border-b-accent pb-2 focus:outline-none placeholder-transparent"
            type="email"
            id="email"
            name="email"
            placeholder="mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label
            className="text-md font-semibold absolute left-0 -top-6 transition-all peer-placeholder-shown:top-0 peer-focus:-top-6"
            htmlFor="email"
          >
            E Mail
          </label>
        </div>
        <div className="relative w-full">
          <input
            className="peer bg-transparent w-full text-text border-b-[1px] border-b-accent pb-2 focus:outline-none placeholder-transparent"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label
            className="text-md font-semibold absolute left-0 -top-6 transition-all peer-placeholder-shown:top-0 peer-focus:-top-6"
            htmlFor="password"
          >
            Password
          </label>
        </div>
        <div className="flex justify-between content-center">
          <button className="w-[100px] bg-primary text-text px-4 py-2 rounded-lg">
            Login
          </button>
          <Link className="text-text" to="/register">
            Create an Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
