import React, { useState } from "react";

const Register = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };

  return (
    <div className="h-screen grid place-items-center">
      <div>
        <h2 className="text-text text-3xl font-semibold text-center mb-12">
          Register
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[500px] text-accent gap-8"
        >
          <div className="relative w-full flex justify-between">
            <label>Account Type:</label>
            <div>
              <input type="checkbox" name="customer" id="customer" />
              <label htmlFor="customer">Customer</label>
            </div>
            <div>
              <input type="checkbox" name="retailer" id="retailer" />
              <label htmlFor="retailer">Retailer</label>
            </div>
          </div>
          <div className="relative w-full">
            <input
              className="peer bg-transparent w-full text-text border-b-[1px] border-b-accent pb-2 focus:outline-none placeholder-transparent"
              type="text"
              id="first-name"
              name="firstName"
              placeholder="first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <label
              className="text-md font-semibold absolute left-0 -top-6 transition-all peer-placeholder-shown:top-0 peer-focus:-top-6"
              htmlFor="first-name"
            >
              First Name
            </label>
          </div>
          <div className="relative w-full">
            <input
              className="peer bg-transparent w-full text-text border-b-[1px] border-b-accent pb-2 focus:outline-none placeholder-transparent"
              type="text"
              id="last-name"
              name="lastName"
              placeholder="last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <label
              className="text-md font-semibold absolute left-0 -top-6 transition-all peer-placeholder-shown:top-0 peer-focus:-top-6"
              htmlFor="last-name"
            >
              Last Name
            </label>
          </div>
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
              id="confirm-password"
              name="confirmPassword"
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
              Confirm Password
            </label>
          </div>
          <div className="relative w-full">
            <input
              className="peer bg-transparent w-full text-text border-b-[1px] border-b-accent pb-2 focus:outline-none placeholder-transparent"
              type="text"
              id="address"
              name="address"
              placeholder="name"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <label
              className="text-md font-semibold absolute left-0 -top-6 transition-all peer-placeholder-shown:top-0 peer-focus:-top-6"
              htmlFor="address"
            >
              Address
            </label>
          </div>
          <button className="w-[100px] bg-primary text-text px-4 py-2 rounded-lg">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
