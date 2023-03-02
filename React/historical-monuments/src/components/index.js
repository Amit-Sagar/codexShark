import React, { useEffect, useState } from "react";
import { historicalMonuments } from "../Data";
import HistoricalData from "./historical-data/HistoricalData";
// import MonumentsMap from "./MonumentsMap";

const Monuments = () => {
  return (
    <div>
      {/* <MonumentsMap monumentData={monumentData} /> */}
      <HistoricalData />
    </div>
  );
};

export default Monuments;
