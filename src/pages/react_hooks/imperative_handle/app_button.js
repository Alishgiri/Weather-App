import React, { forwardRef, useImperativeHandle, useState } from "react";

const AppButton = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(true);

  useImperativeHandle(ref, () => ({
    toggleFromParent() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default AppButton;
