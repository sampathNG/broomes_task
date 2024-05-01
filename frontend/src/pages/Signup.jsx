import { useState } from "react";
import "../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const handleClick = () => {
    navigate("/signin");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData.email, formData.confirmPassword);
      const { firstname, lastname, username, email, password } = formData; // Get email and password from formData
      const response = await axios.post("http://localhost:5000/signup", {
        firstname,
        lastname,
        username,
        email,
        password,
      });
      console.log("User signed in successfully");
      navigate("/signin");
    } catch (err) {
      console.error(err);
    }
    console.log(formData); // You can handle form submission logic here
  };
  return (
    <div className="flex justify-center items-center bg-white m-12 border-2 border-solid border-gray-300">
      <div className="w-1/2 relative h-screen  ">
        <img
          src="https://wallpapers.com/downloads/high/snowy-mountains-scenery-from-a-plane-window-g5b3p2qoe1qd3rzf.webp"
          alt="plane"
          className="h-[800px] w-11/12 absolute top-0 right-[30px]"
        />
        <div className="text-white absolute top-[420px] right-[200px] w-9/12 h-1/2 bg-gray-800 bg-opacity-65 text-center flex flex-col justify-center items-center">
          <h1 className=" text-4xl font-bold">Altitude Air</h1>
          <div className="h-1 w-20 my-4 bg-white"></div>
          <p>
            We promise to ensure your well being is taken care of while <br />
            travelling with us. Boasting top in class fleet inventory and a 5
            star <br /> approval for our in-flight experience. You know you're
            getting the <br /> best from Altitude without attitude
          </p>
        </div>
      </div>
      <div className="flex w-1/2  justify-center items-center h-screen relative">
        <div className="bg-white p-8">
          <button
            className="absolute top-10 right-8 text-blue-700 h-8 w-32 font-bold border-2 text-xl border-solid border-blue-700 bg-white hover:bg-black hover:text-white"
            onClick={handleClick}
          >
            signin
          </button>
          <h1 className="text-4xl font-bold mb-4 text-blue-700">
            Explore & Experience
          </h1>
          <h3 className="text-xl font-bold mb-4 text-blue-700 my-4">
            Get onto your most comfortable journey yet. All the way up
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center w-full mt-10">
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className="flex-grow h-10 border border-solid border-gray-400 py-6 px-4  mr-8"
                required
              />
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                className="flex-grow h-10 border border-solid border-gray-400 py-6 px-4"
                required
              />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-10 border border-solid border-gray-400 py-6 px-4 my-8"
              required
            />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full h-10 border border-solid border-gray-400 py-6 px-4 "
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-10 border border-solid border-gray-400 py-6 px-4 my-8"
              required
            />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full h-10 border border-solid border-gray-400 py-6 px-4 "
              placeholder="Confirm Password"
              required
            />
            <button
              type="submit"
              className="bg-blue-700 text-white font-semibold  p-4 rounded w-full mt-10"
            >
              GET STARTED
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;
