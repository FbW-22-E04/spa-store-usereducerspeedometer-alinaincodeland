import React, { useContext } from "react";
import { CarContext } from "./Context";
import ReactSpeedometer from "react-d3-speedometer";

export default function Car() {
  // making the counter available in this file
  const { state, dispatchState } = useContext(CarContext);

  console.log(state);

  return (
    <div className="car">
      {state.turnOn && (
        <ReactSpeedometer value={state.speed} minValue={0} maxValue={300} />
      )}

      {state.turnOn ? <p> Switch in ON</p> : <p>Switch is OFF</p>}
      <div>
        <button onClick={() => dispatchState({ type: "onButton" })}>
          Switch ON/OFF
        </button>
        <button onClick={() => dispatchState({ type: "accelerate" })}>
          Accelerate
        </button>
        <button onClick={() => dispatchState({ type: "brake" })}>Break</button>
      </div>
    </div>
  );
}
