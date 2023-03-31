import React from "react";
import MsiText from "../Components/Msi/MsiText";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar2Page/Navbar2";
import Navtel from "../Components/Navtel/Navtel";

const Msi = () => {
  return (
    <div>
      <Navtel />
      <Navbar />
      <Navbar2 />
      <MsiText />
    </div>
  );
};

export default Msi;
