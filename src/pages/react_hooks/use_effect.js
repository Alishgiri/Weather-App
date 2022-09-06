import Axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // let timer = setTimeout(() => {
    //   setCalculation(() => count * 2);
    // }, 500);

    fetchData();

    // return () => clearTimeout(timer);
  }, []);

  const fetchData = async () => {
    const res = await Axios.get("http://jsonplaceholder.typicode.com/comments");
    console.log(res.data);
    console.log("API was called");
    setData(res.data);
  };

  if (!data) {
    return <h6>Loading...</h6>;
  }

  return (
    <>
      <h1>useEffect Hook</h1>
      <p>count: {data[0].email}</p>
    </>
  );
};

export default UseEffectHook;
