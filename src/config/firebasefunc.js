import { signOut } from "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updatePassword,
} from "firebase/auth";
import { getDatabase, ref, set, push, child, get } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6oVYz3Ga3n1E2NqrHL22YYQHLfOvTvdU",
  authDomain: "hackathon-21a2b.firebaseapp.com",
  databaseURL: "https://hackathon-21a2b-default-rtdb.firebaseio.com",
  projectId: "hackathon-21a2b",
  storageBucket: "hackathon-21a2b.appspot.com",
  messagingSenderId: "1070463052326",
  appId: "1:1070463052326:web:a7389594602f89a6edd4e7",
  measurementId: "G-T2QC37DLEE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// let dispatch=.dispatch
// console.log(dispatch);
let userLogin = (dispatch, obj, navigate, setLoader, setLoader2) => {
  setLoader(true);
  console.log(obj);
  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      let uid = user.uid;
      console.log(uid);
      let newobj = { ...obj, uid };
      console.log(newobj.uid);
      setLoader(false);
      dispatch({
        type: "LOGIN",
        payload: newobj,
      });
      // const dbRef = ref(getDatabase());
      // get(child(dbRef, `authentication/${newobj.uid}/newobj`)).then((snapshot) => {
      //   // if (snapshot.exists()) {
      //     console.log(snapshot.val());
      //     let uidData= {...snapshot.val()}
      //     // }
      //     setLoader(false);
      //     // setUserLogin(true);
      //   // setUserData(location.state);
      //   // getData();
      // })
      navigate("/Hotels");
    })
    .catch((error) => {
      setLoader(false);
      setLoader2(true);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, "errar");
      console.log("erars");
      // ..
    });
};
// function generatePassword() {
//   var length = 8,
//     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//     retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//     retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// }

// let changepassword=(dispatch,navigate,setLoader,setLoader2)=>{
//   const user = auth.currentUser;
//   const newPassword = generatePassword();
//   updatePassword(user, newPassword).then(() => {
//     console.log("Update successful.");
//     navigate("/")
//   }).catch((error) => {
//     // An error ocurred
//     console.log("An error ocurred.");
//     // ...
//   });
// }
let signUp = (dispatch, obj, navigate, setLoader) => {
  // return (dispatch) => {
  setLoader(true);
  console.log(obj);
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      let uid = user.uid;
      console.log(user, uid);
      let newobj = { ...obj, uid };
      console.log(newobj);
      const db = getDatabase();
      set(ref(db, "authentication/" + newobj.uid), {
        newobj,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: "SIGNUPDATA",
          payload: newobj,
        });
      });
      console.log(newobj.uid);
      navigate("/Hotels");
      setLoader(false);
      // const dbRef = ref(getDatabase());
      // get(child(dbRef, `authentication/${newobj.uid}/newobj`)).then((snapshot) => {
      //   // if (snapshot.exists()) {
      //     console.log(snapshot.val());
      //     let uidData= {...snapshot.val()}
      //     // }
      //     dispatch({
      //       type: "SIGNUPDATA",
      //       payload: uidData,
      //     })
      //     setLoader(false);
      //     // setUserLogin(true);
      //   // setUserData(location.state);
      //   // getData();
      // })
    })
    .catch((error) => {
      setLoader(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      // return(
      //   <>
      //   <Result
      //     status="warning"
      //     title="Error"
      //     // {errorMessage}
      //   />
      //   </>
      //   )
      alert(errorMessage, "errar");
      console.log("erars");
      // ..
    });
  // };
};
// const firebaseRedrict=()=>{
// const user = auth.currentUser;

// // if (user) {
// //   // User is signed in, see docs for a list of available properties
// //   // https://firebase.google.com/docs/reference/js/firebase.User
// //   // ...
// // } else {
// //   // No user is signed in.
// // }
// }
const getData = (setLoader, dispatch, userid2,navigate) => {
  setLoader(true);
  const dbRef = ref(getDatabase());
  get(child(dbRef, `authentication/${userid2.user}/newobj`))
  .then((snapshot) => {
    // if (snapshot.exists()) {
    // console.log(snapshot?.val());
    let uidData = { ...snapshot?.val() };
    // }
    // console.log(uidData.type.type);
    dispatch({
      type: "USERIDDATA",
      payload: uidData,
    });
    if(uidData.type.type==="user"){
    navigate("/Hotels")
    }
    else if(uidData.type.type==="hotelManagment"){
      navigate("/hotelHome")
    }else if(uidData.type.type==="admin"){
      navigate("/adminUser")
    }
    else{
    }
    // userid(false )
    // setUserLogin(true);
    // setUserData(location.state);
    // getData();
    setLoader(false);
  })
  .catch((error) => {
    setLoader(false);
    const errorCode = error.code;
    const errorMessage = error.message;
    // alert(errorMessage, "errar");
    // console.log("erars");
    // navigate("/")
    // navigate("/")
    // ..
  });
  // .catch((error) => {
  //   setLoader(false);
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   alert(errorMessage, "errar");
  //   console.log("erars");
  //   // ..
  // });
};


const usersauthentication=(dispatch)=>{
  const dbRef = ref(getDatabase());
  get(child(dbRef, `authentication/`))
  .then((snapshot) => {
    // if (snapshot.exists()) {
    console.log(snapshot.val());
    let uidData = { ...snapshot?.val() };
    dispatch({
      type: "USERUID",
      payload:uidData,
    })
  })
}
// const profileData = (setLoader, dispatch, userid) => {
//   setLoader(true);
//   const dbRef = ref(getDatabase());
//   if(state?.useriddata?.userid?.type.type==="user"){
//     get(child(dbRef, `bookingDetails/${userid.userid}`)).then((snapshot) => {
//       // if (snapshot.exists()) {
//       console.log(snapshot.val());
//       let uidData = { ...snapshot.val() };
//       console.log(uidData);
//     });
//   }
//     // }
//     // dispatch({
//     //   type: "PROFILEDATA",
//     //   payload: uidData,
//     // });
//     // setLoader(false);
//     // userid(false )
//     // setUserLogin(true);
//     // setUserData(location.state);
//     // getData();
// };
const bookingDetails = (dispatch, obj, navigate, setLoader,state) => {
  console.log(obj);
  console.log(state);
  const db = getDatabase();
  if(state?.useriddata?.userid?.type.type==="user"){
    set(ref(db, "bookingDetails/" + state.uiddata.userid), obj)
    navigate("/Holets");
  }
  else if(state.useriddata.userid.type.type==="hotelManagment"){
    set(ref(db, "HotelbookingDetails/" + obj.userid), obj)
    navigate("/hotelHome");
  }
  // else if(state.useriddata.userid.type.type==="admin"){
  //   set(ref(db, "HotelbookingDetails/" + obj.userid), obj)
  //   navigate("/adminlUser");
  // }
  // dispatch({
  //   type: "BOOKINGDETAILS",
  //   obj,
  // });
  console.log(obj);
  // push(ref(db, + 'studentData/'), obj)
  //   .then(() => {
  //       // Data saved successfully!
  //   // console.log("success");
  //   // alert("data sent")
  //   // console.log(obj);
  //   // dispatch({
  //   //   type: "ADDDATATATYPE",
  //   //   payload: obj,
  //   // })
  //   // navigate("LoginHome",{ state: obj })
  // })
  // .catch((error) => {
  //     // The write failed...
  //     alert("error")
  //   });
};
let useruid = (setLoader, dispatch, navigate) => {
  setLoader(true);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = auth.currentUser.uid;
      dispatch({
        type: "USERUIDDATA",
        payload: uid,
      });
      setLoader(false);
    } else {
      // console.log("error");
      navigate("/");
      // window.location.pathname.split("/")
    }
  });
};

let useruidhotel = (setLoader, dispatch, navigate,condition) => {
  setLoader(true);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = auth.currentUser.uid;
      console.log(uid);
      // if(condition.condition==="user")
      setLoader(false);
      // navigate("/hotelHome")
    } else {
      console.log("error");
      navigate("/");
      // window.location.pathname.split("/")
    }
  });
};
const hotelData = (dispatch,state) => {
  const dbRef = ref(getDatabase());
  if(state?.useriddata?.userid?.type.type==="user"){
    get(child(dbRef, `HotelbookingDetails/`)).then((snapshot) => {
      // if (snapshot.exists()) {
      console.log(snapshot.val());
      const uidData = { ...snapshot?.val() };
      dispatch({
        type: "HOTELDATA",
        payload: uidData,
      });
    });
  }
  else if(state?.useriddata?.userid?.type.type==="hotelManagment"){
    get(child(dbRef, `bookingDetails/`)).then((snapshot) => {
      // if (snapshot.exists()) {
      console.log(snapshot.val());
      const uidData = { ...snapshot?.val() };
      dispatch({
        type: "HOTELDATA",
        payload: uidData,
      });
    });
  }
  // else{
  // null
  // } 
    // }
    // setLoader(false);
    // userid(false )
    // setUserLogin(true);
    // setUserData(location.state);
    // getData();
};
let signout = (navigate, setLoader) => {
  setLoader(true);
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful");
      navigate("/");
      setLoader(false);
    })
    .catch((error) => {
      console.log("An error happened.", error);
    });
};
export {
  userLogin,
  signUp,
  signout,
  useruid,
  getData,
  hotelData,
  bookingDetails,
  // profileData,
  usersauthentication,
  useruidhotel
};
