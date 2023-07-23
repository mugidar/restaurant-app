"use client";
import React from "react";
import Countdown from "react-countdown";


const CountDown = ({ endDate = "2023-07-25" }) => {

  const date = new Date(endDate)

  return <Countdown date={date} />;
};

export default CountDown;
