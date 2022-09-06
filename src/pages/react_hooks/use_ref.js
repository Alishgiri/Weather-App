import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const count = useRef(0);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    count.current += 1;
  });

  const onClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  return (
    <div className="">
      <h1>useRef hook</h1>
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onClick}>Change Name</button>
      <h1>Render Count: {count.current}</h1>
    </div>
  );
};

export default UseRefHook;
