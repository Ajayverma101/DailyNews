import React, { Component } from "react";
import Fullsnake from "./Fullsnake.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={Fullsnake} className="spinner-loader" alt="Loading.." />
    </div>
  );
};

export default Spinner;
