import { useState } from "react";
import { useClass } from "../store/useClass";
import { useNavigate } from "react-router-dom";
import SpinLoader from "../components/SpinLoader";

const HomePage = () => {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    if (!data.class.trim()) return setErr("Please Enter Id");

    navigate(`/${data.class}`);

    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center my">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        {err && (
          <p className="text-red-600 bg-red-200 py-1 rounded mb-4 text-center">
            {" "}
            {err}{" "}
          </p>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="class"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Class ID
            </label>
            <input
              type="text"
              name="class"
              id="class"
              required
              placeholder="Enter Class ID"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
