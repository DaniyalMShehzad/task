import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import Button from "../components/button";
import Cards from "../components/cards";
import { hotelData } from "../config/firebasefunc";
// import { hotelData } from "../config/firebasefunc";
// import ButtonAppBar from "./navbar";

export default function Card() {
  const [data, setData] = useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((e) => e);
   useEffect(() => {
    dispatch((dispatch) => hotelData(dispatch,state));
    setData(Object.values(state?.hoteldata?.userid))
    // console.log(data);
  }, []);
  const addData = (e) => {
    console.log(e.userid);
    navigate(`/registeration/${e.userid}`,{state:e.userid});
  };
  return (
    <>
      {/* <ButtonAppBar /> */}
      <div className="Cards">
        <div className="Cards2">
          <div className="Cards3 container">
            {data?.map((e, i) => {
              return (
                <Cards key={i} className="Cards4">
                  <div className="CardsIMAGe">
                    <img className="CardsIMG" src={e.image} />
                  </div>
                  <div className="CardsParentH3">
                    <h3 className="CardsH3">{e.name}</h3>
                    <span className="CardsH3">{e.address}</span>
                    <span className="CardsH3">{e.city}</span>
                    <p className="CardsP">{e.desc}</p>
                  </div>
                  <div className="CardsPriceParent">
                    <p className="CardsPrice">{e.price}  PKR</p>
                    <Button className="CardsBTN"
                      onClick={() => addData(e)}
                    >
                      Booking
                    </Button>
                  </div>
                </Cards>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
