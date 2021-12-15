import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Profile from "../../screens/profile";
import { firebaseRedrict, useruid } from "../firebasefunc";
import {
  BookingCard,
  ButtonAppBar,
  HotelAppBar,
  HotelLogin,
  HotelRegisteration,
  HotelSignUp,
  // Home,
  Login,
  Registeration,
  SignUp,
  // slick,
  // Card,
} from "./approuters";

export default function AppRouter(props) {
  const [loader, setLoader] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(() => useruid(setLoader, dispatch, navigate));
    // console.log(location.state);
  }, []);
  // useEffect(()=>{
  //   dispatch(()=>firebaseRedrict( dispatch,navigate))
  //   // console.log(location.state);
  // },[])
  // console.log(window.location.href);
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hotellogin" element={<HotelLogin />} />
        <Route path="/Hotelsignup" element={<HotelSignUp />} />
      </Routes>
      {/* {window.location.pathname === "/" || window.location.pathname === "/signup" || window.location.pathname === "/hotellogin" || window.location.pathname === "/Hotelsignup" ||window.location.pathname === "/hotelhome"||window.location.pathname === "/hotelRegisteration" ?
        <>
        </>
        : */}
        <>
          <Routes>
            <Route path="/registeration" element={<Registeration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ButtonAppBar" element={<ButtonAppBar />} />
          </Routes>
        </>
      {window.location.pathname === "/" || window.location.pathname === "/signup" || window.location.pathname === "/hotellogin" || window.location.pathname === "/Hotelsignup" ?
        <>
        </>
        :
        <>
          <HotelAppBar>
            <Routes>
              <Route path="/hotelHome" element={<BookingCard />} />
              <Route path="/hotelRegisteration" element={<HotelRegisteration />} />
            </Routes>
          </HotelAppBar>
        </>
      }
      {/* </Router> */}
    </>
  );
}