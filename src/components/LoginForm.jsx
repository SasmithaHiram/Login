import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

const LoginForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sucess, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = awit axiosInstance.post("/auth/login", {
        username: userName,
        password: password,
        expiresInMins: 30
      });

      setSuccess(`Welcome ${response.data.firstName}!`);
      console.log("Login successful: ",response.data);
      
    } catch (error) {
      setError("Invalid username or password");
      console.error("Login Error",error)
      
    }

    const formData = { firstName, lastName, userName, password };
    console.log(formData);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl border border-gray-100 rounded-2xl p-10 w-full max-w-md"
        >
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Login to Your Account
          </h1>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                placeholder="Emily"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                placeholder="Johnson"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="emilys"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
