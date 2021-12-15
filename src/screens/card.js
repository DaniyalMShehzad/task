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
  const [Data,setData]=useState("")
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((e) => e);
    console.log(state.hoteldata.userid);
    useEffect(() => {
      dispatch((dispatch) => hotelData(dispatch));
      setData(state.hoteldata.userid)
    }, []);

  // const addData = () => {
  //   navigate("/registeration");
  // };
  return (
    <>
      {/* <ButtonAppBar /> */}
      <div className="Cards">
        <div className="Cards2">
          <div className="Cards3 container">
            {/* {Data.map((e, i) => { */}
              {/* return ( */}
                {/* <Cards key={i} className="Cards4"> */}
                  {/* <img className="CardsIMG" src={e.imge} /> */}
                  {/* <h3 className="CardsH3">{e.name}</h3> */}
                  {/* <h4 className="CardsH3">{e.type}</h4> */}
                  {/* <p className="CardsP">{e.discpriton}</p> */}
                  {/* <p className="CardsPrice">{e.price}</p> */}
                  {/* <Button className="CardsBTN"  */}
                  {/* onClick={() => addData()} */}
                  {/* // > */}
                    {/* {e.button} */}
                  {/* </Button> */}
                {/* </Cards> */}
              {/* ); */}
            {/* })} */}
          </div>
        </div>
      </div>
    </>
  );
}
