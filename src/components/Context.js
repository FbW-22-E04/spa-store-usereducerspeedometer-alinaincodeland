import { createContext, useReducer, useState } from "react";

// create context variable
export const CarContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "onButton":
      if (!state.turnOn && state.speed === 0) {
        return { ...state, turnOn: true };
      } else if (state.turnOn && state.speed !== 0) {
        return state;
      } else {
        return { ...state, turnOn: false };
      }

    case "accelerate":
      if (state.turnOn && state.speed < 300) {
        return { ...state, speed: state.speed + 5 };
      } else {
        return state;
      }

    case "brake":
      if (state.turnOn && state.speed > 0) {
        return { ...state, speed: state.speed - 5 };
      } else {
        return state;
      }

    default:
      return;
  }
};

const initialState = {
  speed: 0,
  turnOn: false,
};

const CarContextProvider = ({ children }) => {
  const [state, dispatchState] = useReducer(reducer, initialState);

  return (
    <CarContext.Provider value={{ state, dispatchState }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
