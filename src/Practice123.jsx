import React, { useState } from "react";
import "./Practice123.css";
import Profile from "./Practice123profile";
import data from "./PracticeData";

function GetData() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <section className="post-container text-start ">
      {/* {data.map((eachObj) => {
        const { id, thumbnailUrl, title, url } = eachObj;
        return (
          <Profile
            key={id}
            id={id}
            thumbnailUrl={thumbnailUrl}
            title={title}
            url={url}
          />
        );
      })} */}
      <button style={{ fontSize: "20px" }} onClick={decrease}>
        -
      </button>
      <h5 style={{ fontSize: "70px" }}>{count}</h5>
      <button style={{ fontSize: "20px" }} onClick={increase}>
        +
      </button>
    </section>
  );
}
export default GetData;
