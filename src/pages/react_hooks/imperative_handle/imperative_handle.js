import React, { useRef } from "react";
import AppButton from "./app_button";

const UseImperativeHandleHook = () => {
  const childRef = useRef(null);

  return (
    <div className="">
      <h1>UseImperativeHandle Hook</h1>
      <button
        onClick={() => {
          childRef.current.toggleFromParent();
        }}
      >
        Button From Parent
      </button>
      <AppButton ref={childRef} />
    </div>
  );
};

export default UseImperativeHandleHook;
