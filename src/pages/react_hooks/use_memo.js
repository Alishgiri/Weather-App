import Axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const UseMemo = ({}) => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data);
    });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";

    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.lenght < longestName.length) {
        longestName = currentName;
      }
    }

    console.log("This was computed.");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div className="App">
      <div>{getLongestName}</div>

      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
};

export default UseMemo;
