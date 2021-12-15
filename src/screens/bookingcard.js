import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import Button from "../components/button";
import Cards from "../components/cards";
import HotelAppBar from "./hotelnavbar";
// import { hotelData } from "../config/firebasefunc";
// import ButtonAppBar from "./navbar";

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
//   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const state = useSelector((e) => e);
  //   console.log(state.hoteldata.userid);
  //   let arr = [state.hoteldata.userid];
  //   useEffect(() => {
  //     dispatch((dispatch) => hotelData(dispatch));
  //   }, []);
//   const addData = () => {
//     navigate("/registeration");
//   };
  return (
    <>
      {/* <ButtonAppBar /> */}
      {/* <HotelAppBar/> */}
      <div className="Cards">
        <div className="Cards2">
          <div className="Cards3 container">
            {arr.map((e, i) => {
              return (
                <Cards key={i} className="Cards4">
                  <img className="CardsIMG" src={e.imge} />
                  <h3 className="CardsH3">{e.name}</h3>
                  <h4 className="CardsH3">{e.type}</h4>
                  <p className="CardsP">{e.discpriton}</p>
                  <p className="CardsPrice">{e.price}</p>
                  {/* <Button className="CardsBTN" onClick={() => addData()}>
                    {e.button}
                  </Button> */}
                </Cards>
              );
            })}
          </div>
        </div>
      </div> 
    </>
  );
}