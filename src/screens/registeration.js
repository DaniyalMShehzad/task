import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../components/button";
import InputText from "../components/input";
import { bookingDetails, signUp, useruid } from "../config/firebasefunc";
import { Input } from "antd";
import Png from "./png.gif";
// import { Result } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone, onChange } from "@ant-design/icons";
import { Select } from "antd";
import ButtonAppBar from "./navbar";
export default function Registeration() {
  const { Option } = Select;
  //   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [rooms, setRooms] = useState("");
  const [userid, setUserid] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  const state = useSelector((e) => e);
  console.log(state);
  // useEffect(() => {
    // }, []);
    useEffect(()=>{
      setUserid(window.location.pathname.split("/")[2])
      setCountry(state.useriddata.userid.country);
},[])
  let Register = (e) => {
    e.preventDefault();
    let obj = {
      //   email,
      //   password,
      name,
      address,
      contact,
      country,
      rooms,
      userid,
      adults,
      children,
      city
    };
    dispatch((dispatch) => bookingDetails(dispatch, obj, navigate, setLoader,state));
  };
  console.log(userid);
  function handleChange(value) {
    console.log(value);
    setRooms(value);
  }  
  function handleChange2(value) {
    console.log(value);
    setAdults(value);
  }  
  function handleChange3(value) {
    console.log(value);
    setChildren(value);
  }
  return (
    <>
      {loader ? (
        //  <h1>LOADING......</h1>
        <img src={Png} />
      ) : (
        <>
          {/* <ButtonAppBar /> */}
          <div className="SignUp">
            {/* <Navbar /> */}
            <div className="SignUp2">
              <form className="formLogin2" onSubmit={(e) => Register(e)}>
                <div className="login3">
                  <h3 className="signinh4">Booking</h3>
                  <div className="setEmail">
                    <label className="EmailLabel">Enter Your Name</label>
                    <InputText
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      type="text"
                      className="enterEmail"
                      // value={name}
                      required
                    />
                  </div>
                  {/* <div className="setEmail">
                  <label className="EmailLabel">Enter Your Email address</label>
                  <InputText
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    className="enterEmail"
                    required
                  />
                </div> */}
                  <div className="setEmail">
                    <label className="EmailLabel">Contact</label>
                    <input
                      className="enterEmail"
                      placeholder="Contact"
                      required
                      type="number"
                      onChange={(e) => setContact(e.target.value)}
                      // value={contact}
                    />
                  </div>
                  <div className="setEmail">
                    <Select
                      defaultValue="1 Rooms"
                      style={{ width: 120 }}
                      onChange={handleChange}
                      // value={rooms}
                    >
                      <Option value="1 Rooms">1 Rooms</Option>
                      <Option value="2 Rooms">2 Rooms</Option>
                      <Option value="3 Rooms">3 Rooms</Option>
                    </Select>
                  </div>
                  <div className="setEmail">
                    <Select
                      defaultValue="1 adults"
                      style={{ width: 120 }}
                      onChange={handleChange2}
                      // value={rooms}
                    >
                      <Option value="1 adults">1 adults</Option>
                      <Option value="2 adults">2 adults</Option>
                      <Option value="3 adults">3 adults</Option>
                    </Select>
                  </div>
                  <div className="setEmail">
                    <Select
                      defaultValue="1 children"
                      style={{ width: 120 }}
                      onChange={handleChange3}
                      // value={rooms}
                    >
                      <Option value="1 children">1 children</Option>
                      <Option value="2 children">2 children</Option>
                      <Option value="3 children">3 children</Option>
                    </Select>
                  </div>
                  <div className="setEmail">
                    <label className="EmailLabel">Enter Your Address</label>
                    <input
                      className="enterEmail"
                      required
                      placeholder="Address"
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                      // value={address}
                    />
                  </div>
                  <div className="setEmail">
                    <label className="EmailLabel">City</label>
                    <input
                      className="enterEmail"
                      placeholder="city"
                      required
                      type="text"
                      onChange={(e) => setCity(e.target.value)}
                      // value={country}
                    />
                  </div>
                  <Button className="LoginBtn">sign up</Button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
