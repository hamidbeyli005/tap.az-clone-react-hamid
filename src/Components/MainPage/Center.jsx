import React from "react";
import VipProducts from "../VipProducts";
import Header from "../Header/Header";
import Products from "../Products";
import { Link, Outlet } from "react-router-dom";

function Center({ setDisplayLeft, setDisplayRight, displayRight }) {
  return (
    <div >
      <div
        className="App"
        style={{
          overflowY: { displayRight } === true ? "hidden" : "auto",
          height: "100vh",
        }}
      >
        <Header
          setDisplayLeft={setDisplayLeft}
          setDisplayRight={setDisplayRight}
        ></Header>
        <div className="home_vip">
          <div className="products_header">
            <div className="title">VIP ELANLAR </div>
            <Link to="/Vip">Bütün VIP elanlar </Link>
            <Outlet />
          </div>
          <VipProducts></VipProducts>
        </div>
        <div className="products_header">
          <div className="title"> ELANLAR </div>
          {/* <Link to="/Vip">Bütün VIP elanlar </Link> */}
        </div>

        <Products></Products>
      </div>
    </div>
  );
}

export default Center;
