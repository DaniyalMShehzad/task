import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../components/button";
import InputText from "../components/input";
import { bookingDetails, signUp } from "../config/firebasefunc";
import { Input } from "antd";
import Png from "./png.gif";
// import { Result } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone, onChange } from "@ant-design/icons";
import { Select } from "antd";
import ButtonAppBar from "./navbar";
import HotelAppBar from "./hotelnavbar";
export default function HotelRegisteration() {
    const { Option } = Select;
    //   const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    // const [rooms, setRooms] = useState("");
    const [userid, setUserid] = useState("");
    const [image,setImage]=useState("");
    const [desc,setDesc]=useState("");
    const [price,setPrice]=useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loader, setLoader] = useState();
    const state = useSelector((e) => e);
    console.log(state.useriddata.userid);
      useEffect(() => {
        setUserid(state.useriddata.userid.uid);
        setAddress(state.useriddata.userid.address)
        setCountry(state.useriddata.userid.country)
      }, []);
      let Registerhotel = (e) => {
        e.preventDefault();
        let obj = {
          name,
          address,
          contact,
          country,
          userid,
          city,
          image,
          desc,
          price
        };
        dispatch((dispatch) => bookingDetails(dispatch, obj, navigate, setLoader,state));
      };
    // function handleChange(value) {
    //     console.log(value);
    //     setRooms(value);
    // }
    const HandleChange = (e) => {
        let reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState == 2)
            setImage(reader.result);
        };
        // firebase.database().ref('UserData').push(object)
        reader.readAsDataURL(e.target.files[0]);
      
      
    
      };
    return (
        <>
            {loader ? (
                //  <h1>LOADING......</h1>
                <img src={Png} />
            ) : (
                <>
                    {/* <HotelAppBar/> */}
                    <div className="SignUp">
                        {/* <Navbar /> */}
                        <div className="SignUp2">
                            <form className="HotelRegisteration"
                              onSubmit={(e) => Registerhotel(e)}
                            >
                                <div className="login3">
                                    <h3 className="signinh4">Booking</h3>
                                    <div className="setEmail">
                                        <label className="EmailLabel">Image</label>
                                        <InputText
                                            onChange={HandleChange} 
                                            type="file" 
                                            className="enterEmail2" 
                                            placeholder='enter your Image'
                                        />
                                    </div>
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
                                    {/* <div className="setEmail">
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
                  </div> */}
                                    <div className="setEmail">
                                        <label className="EmailLabel">City</label>
                                        <input
                                            className="enterEmail"
                                            placeholder="City"
                                            required
                                            type="text"
                                            onChange={(e) => setCity(e.target.value)}
                                        // value={country}
                                        />
                                    </div>
                                    <div className="setEmail">
                                        <label className="EmailLabel">price per day</label>
                                        <input
                                            className="enterEmail"
                                            placeholder="price"
                                            required
                                            type="text"
                                            onChange={(e) => setPrice(e.target.value)}
                                        // value={country}
                                        />
                                    </div>
                                    <div className="setEmail">
                                        <label className="EmailLabel">Description</label>
                                        <textarea
                                            className="enterDesc"
                                            placeholder="description"
                                            required
                                            type="text"
                                            onChange={(e) => setDesc(e.target.value)}
                                        >
                                        </textarea>
                                    </div>
                                    <Button className="LoginBtn">Register</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
