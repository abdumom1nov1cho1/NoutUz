import React from "react";
import LenovoTexts from "../Components/Lenovo/LenovoText";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar2Page/Navbar2";
import Navtel from "../Components/Navtel/Navtel";

const Lenovo = () => {
  return (
    <div>
      <Navtel />
      <Navbar />
      
      <Navbar2 />
      <LenovoTexts />
    </div>
  );
};

export default Lenovo;
