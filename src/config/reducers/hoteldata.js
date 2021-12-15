const INITIAL_STATE = {
  label: "Hotel Data",
  userid: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HOTELDATA":
      console.log(action.payload);
      state.userid = action.payload;
      return state;
    default:
      return state;
  }
};
