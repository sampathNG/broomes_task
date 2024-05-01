import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const Success = () => {
  const token = useSelector((state) => state.auth.token);
  const [username, setUserName] = useState("");
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.post("http://localhost:5000/success", {
          token,
        });
        setUserName(res.data.username);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);
  return (
    <div className="flex flex-col relative justify-center items-center w-11/12 h-3/4 m-24">
      <h1 className="absolute top-4 text-white text-center">
        Success! You have successfully signed up! <br />
        Your username: {username}
      </h1>
      <img
        src="https://t4.ftcdn.net/jpg/02/14/15/85/360_F_214158575_aToU3cWlbdrZNi9UsX5SVJLUoQeH472V.jpg"
        alt="success"
        className="h-3/4 w-[900px]"
      />
    </div>
  );
};
export default Success;
