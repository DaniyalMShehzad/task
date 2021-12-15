import React from 'react'
import { Link, NavLink } from "react-router-dom";
function Home() {
  // const navigate = useNavigate();
  // const dataFromRedux = useSelector((a) => a);
  // console.log(dataFromRedux);

  // let goToLogin = () => {
  //   navigate("/login");
  // };
  // let goToSignUp = () => {
  //   navigate("/signup");
  // };

  return (
    <>
        <div className="navbar">
            <div className="navbar2">
            <NavLink className="navLogin" to="/">login</NavLink>
            <NavLink className="navLogin" to="/signup">Sign up</NavLink>
            <NavLink className="navLogin" to="/hotellogin">Hotellogin</NavLink>
            <NavLink className="navLogin" to="/Hotelsignup">HotelRegister</NavLink>
            {/* <NavLink className="navLogin" to="/admin">Admin</NavLink> */}
            </div>
        </div>
    </>
  );
}
export default Home;
