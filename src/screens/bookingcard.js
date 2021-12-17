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
  const [data, setData] = useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((e) => e);
  console.log("hotelHome");
  useEffect(() => {
    dispatch((dispatch) => hotelData(dispatch, state));
    setData(Object.values(state?.hoteldata?.userid))
    console.log(data);
 }, []);
  return (
    <>
    {/* <h1>Test</h1> */}
      {/* <ButtonAppBar /> */}
      {/* <HotelAppBar/> */}
      <div className="BookingCards">
        <div className="BookingCards2">
          <div className="BookingCards3 container">
            {data?.map((e, i) => {
              if (e.userid === state.uiddata.userid) {
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
                    {/* <Button className="CardsBTN" onClick={() => addData()}>
                    {e.button}
                    </Button> */}
                  </Cards>
                  );
              }
             
            })}
          </div>
        </div>
      </div>
    </>
  );
}