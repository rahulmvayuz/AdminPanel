import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    country: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();  // Use this for navigation after updating

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const parsedData = JSON.parse(storedData);
    const user = parsedData.find((item) => item.id === parseInt(id, 10));

    if (user) {
      setData(user);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem("data");
    const parsedData = JSON.parse(storedData);
    const updatedData = parsedData.map((item) =>
      item.id === parseInt(id, 10) ? data : item
    );
    localStorage.setItem("data", JSON.stringify(updatedData));
    alert("User data updated successfully!");
    navigate('/');  // Redirect to the home page or any other page after update
  };

  return (
    <div className="p-1 pt-0 text-center">
      <h1 className="text-xl font-normal text-gray-500 mb-1">Update User Data</h1>
      <div className="min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6"
        >
          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600 mb-2" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={data.name}
              onChange={handleChange}
              className="w-full p-2 border-b text-base border-gray-300 focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600 mb-2" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Add Email"
              value={data.email}
              onChange={handleChange}
              className="w-full p-2 border-b text-base border-gray-300 focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600 mb-2" htmlFor="phone">
              Phone:
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Add Phone Number.."
              value={data.phone}
              onChange={handleChange}
              className="w-full p-2 border-b text-base border-gray-300 focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600 mb-2" htmlFor="dob">
              Dob:
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              placeholder="Add DOB.."
              value={data.dob}
              onChange={handleChange}
              className="w-full p-2 border-b text-base border-gray-300 focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="mb-2">
            <label className="block text-base font-bold text-gray-600 mb-2" htmlFor="country">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={data.country}
              onChange={handleChange}
              className="w-full border-b text-base border-gray-300 focus:outline-none focus:border-gray-500"
            >
              <option value="india">India</option>
              <option value="china">China</option>
              <option value="uk">UK</option>
              <option value="oman">Oman</option>
              <option value="qatar">Qatar</option>
              <option value="japan">Japan</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
