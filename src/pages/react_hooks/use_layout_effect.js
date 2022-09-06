import React, { useLayoutEffect, useEffect, useRef } from "react";

const UseLayoutEffectHook = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log("UseLayoutEffect");
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    console.log("useEffect");
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="">
      <h1>UseLayoutEffect hook</h1>
      <input value="PEDRO" ref={inputRef} />
    </div>
  );
};

export default UseLayoutEffectHook;
