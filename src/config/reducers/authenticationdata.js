const INITIAL_STATE = {
    label: "Login/signup data Here",
    userid: false
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "AUTHENTICATION":
        console.log(action.payload);
        state.userid = action;
        return state;
      default:
        return state;
    }
  };