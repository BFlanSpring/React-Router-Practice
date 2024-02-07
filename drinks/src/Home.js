import React from "react";
import CountDisplay from "./AvailabilityCounter";
import "./Home.css"

function Home() {
  return (
    <div className="HomeContainer">
      <h1>Lets Clean Up Springboards Mess!</h1>
      <h4>Here is our current inventory</h4>
      <CountDisplay />
    </div>
  );
}

export default Home;
