import * as React from "react";

let initialState = {
  status: "",
  userData: {
    name: "",
    phone: "",
    password: "",
    email: "",
    city: "",
    address: "",
    cnic: "",
  },
  activePost: {
    created_at: "",
    pick_up_city: "",
    pick_up_point: "",
    drop_off_city: "",
    pick_up_date: "",
    pick_up_time: "",
    charges: "",
    available_seats: "",
    description: "",
  },
  vehicalData: null,
  vehicalFound: false,
};

let ContextOne = React.createContext();
let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "login":
      return { ...state, status: "login", userData: action.payload };
    case "logout":
      localStorage.removeItem("accessToken");
      return { ...state, status: "logout" };
    case "activePost":
      return { ...state, activePost: action.payload };
    case "vehical":
      return { ...state, vehicalFound: true, vehicalData: action.payload };
    case "NoVehical":
      return { ...state, vehicalFound: false, vehicalData: action.payload };
  }
};
function ContextOneProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

let ContextOneConsumer = ContextOne.Consumer;

export { ContextOne, ContextOneProvider, ContextOneConsumer };
