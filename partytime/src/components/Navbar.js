import React from "react";

const Navbar = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
      <h1>PartyTime!!</h1>
      <div style={{display: "flex", flexDirection: "row", justifyContent:"space-around", width:"25%"}}>
        <div >Logout</div>
        <div>Help</div>
      </div>
    </div>
  );
};

export default Navbar;
