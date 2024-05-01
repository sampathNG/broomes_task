import { useState } from "react";
import "../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToken } from "../features/userSlice";
function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleClick = () => {
    navigate("/signup");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      console.log(formData.email, formData.password);
      const { email, password } = formData; // Get email and password from formData
      const response = await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });
      console.log("User signed in successfully");
      const tok = response.data.token;
      dispatch(addToken({ text: tok }));
      navigate("/success");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center items-center bg-white m-12 border-2 border-solid border-gray-300">
      <div className=" relative h-screen w-1/2 ">
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
      <div className="flex  justify-center items-center h-screen w-1/2 relative">
        <div className="bg-white p-8">
          <button
            className="absolute top-10 right-8 text-blue-700 h-8 w-32 font-bold border-2 text-xl border-solid border-blue-700 bg-white hover:bg-black hover:text-white"
            onClick={handleClick}
          >
            signup
          </button>
          <h1 className="text-4xl font-bold mb-4 text-blue-700">
            Explore & Experience
          </h1>
          <h3 className="text-xl font-bold mb-4 text-blue-700 my-4">
            Get onto your most comfortable journey yet. All the way up
          </h3>
          <form onSubmit={handleSignin}>
            <div className="flex justify-center w-full mt-10"></div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-10 border border-solid border-gray-400 py-6 px-4 my-4"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-10 border border-solid border-gray-400 py-6 px-4 mt-3"
              required
            />
            <button
              type="submit"
              className="bg-blue-700 text-white font-semibold  p-4 rounded w-full mt-14"
            >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signin;
