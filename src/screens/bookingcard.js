import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Button from "../components/button";
import Cards from "../components/cards";
import HotelAppBar from "./hotelnavbar";
import { hotelData } from "../config/firebasefunc";
import ButtonAppBar from "./navbar";

export default function BookingCard() {
  const arr = [
    {
      name: "Aston Martin DBS Superleggera 2021",
      type: "Cars",
      discpriton:
        "a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders",
      imge: "https://cdn.motor1.com/images/mgl/10219/s3/aston-martin-dbs-superleggera-exterior.jpg",
      price: "$304,995",
      button: "Booking",
    },
    {
      name: "Aston Martin DBS Superleggera 2021",
      type: "Cars",
      discpriton:
        "a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders",
      imge: "https://cdn.motor1.com/images/mgl/10219/s3/aston-martin-dbs-superleggera-exterior.jpg",
      price: "$304,995",
      button: "Booking",
    },
    {
      name: "Aston Martin DBS Superleggera 2021",
      type: "Cars",
      discpriton:
        "a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders",
      imge: "https://cdn.motor1.com/images/mgl/10219/s3/aston-martin-dbs-superleggera-exterior.jpg",
      price: "$304,995",
      button: "Booking",
    },
    {
      name: "Aston Martin DBS Superleggera 2021",
      type: "Cars",
      discpriton:
        "a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders",
      imge: "https://cdn.motor1.com/images/mgl/10219/s3/aston-martin-dbs-superleggera-exterior.jpg",
      price: "$304,995",
      button: "Booking",
    },
    {
      name: "Aston Martin DBS Superleggera 2021",
      type: "Cars",
      discpriton:
        "a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders",
      imge: "https://cdn.motor1.com/images/mgl/10219/s3/aston-martin-dbs-superleggera-exterior.jpg",
      price: "$304,995",
      button: "Booking",
    },
    {
      name: "Aston Martin DBS Superleggera 2021",
      type: "Cars",
      discpriton:
        "a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders",
      imge: "https://cdn.motor1.com/images/mgl/10219/s3/aston-martin-dbs-superleggera-exterior.jpg",
      price: "$304,995",
      button: "Booking",
    },
  ];
  const [data, setData] = useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((e) => e);
  console.log(state);
   useEffect(() => {
    dispatch((dispatch) => hotelData(dispatch,state));
    setData(Object.values(state?.hoteldata?.userid))
    console.log(data);
    // if(state.uiddata.userid===){}
  }, []);
  return (
    <>
      {/* <ButtonAppBar /> */}
      {/* <HotelAppBar/> */}
      <div className="BookingCards">
        <div className="BookingCards2">
          <div className="BookingCards3 container">
            {data?.map((e, i) => {
              if(e.userid===state.uiddata.userid){
              return (
                <Cards key={i} className="BookingCards4">
                  {/* <img className="CardsIMG" src={e.imge} /> */}
                  <h3 className="CardsH3">{e.name}</h3>
                  <h4 className="CardsH3">{e.country}</h4>
                  <p className="CardsP">{e.city}</p>
                  <p className="CardsPrice">{e.rooms}</p>
                  <p className="CardsPrice">{e.adults}</p>
                  <p className="CardsPrice">{e.children}</p>
                  <p className="CardsPrice">{e.contact}</p>
                  {/* <Button className="CardsBTN" onClick={() => addData()}> */}
                    {/* {e.button} */}
                  {/* </Button> */}
                </Cards>
              // else()
              );
            }
            else{
            }
            })}
          </div>
        </div>
      </div> 
    </>
  );
}