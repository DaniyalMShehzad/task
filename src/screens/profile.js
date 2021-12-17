import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/cards";
import { profileData } from "../config/firebasefunc";

export default function Profile() {
  const [loader, setLoader] = useState();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((e) => e);
  console.log(state.useriddata.userid);
  // const userid = { userid: state.uiddata.userid };
  // console.log(userid);
  useEffect(() => {
    setData([...data,state.useriddata.userid])
  //   dispatch((dispatch) => profileData(setLoader, dispatch, userid));
  //   // console.log(location.state);
  }, []);
  console.log(data);
  return (
    <div className="Profile">
      <div className="Profile2">
        <div className="Profile3 container">
          {data?.map((e, i) => {
            console.log(data);
                return (
                  <Cards key={i} className="ProfileCards4">
                    <h3 className="ProfileH3">{e.name}</h3>
                    <h4 className="ProfileH3">{e.email}</h4>
                    <p className="ProfileP">{e.contact}</p>
                    <h3 className="ProfileH3">{e.country}</h3>
                    <p className="ProfilePrice">{e.address}</p>
                  </Cards>
                )
            })}
        </div>
      </div>
    </div>
  )
}
