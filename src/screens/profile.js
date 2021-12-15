import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileData } from "../config/firebasefunc";

export default function Profile() {
  const [loader, setLoader] = useState();
  const dispatch = useDispatch();
  const state = useSelector((e) => e);
  console.log(state.uiddata.userid);
  const userid = { userid: state.uiddata.userid };
  console.log(userid);
  useEffect(() => {
    dispatch((dispatch) => profileData(setLoader, dispatch, userid));
    // console.log(location.state);
  }, []);
  return <div></div>;
}
