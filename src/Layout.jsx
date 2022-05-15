import React from "react";
import { useState } from "react";
import Center from "./Components/MainPage/Center";
import Left from "./Components/MainPage/Left";
import Right from "./Components/MainPage/Right";

function Layout() {
  const [displayRight, setDisplayRight] = useState(false);
  const [displayLeft, setDisplayLeft] = useState(false);

  return (
    <div className="index">
      <div>
        <Left displayLeft={displayLeft} setDisplayLeft={setDisplayLeft} />
      </div>
      <div
        className="modal"
        style={{ display: displayLeft === true ? "block" : null }}
        onClick={(e) =>
          displayLeft === true ? setDisplayLeft(!displayLeft) : null
        }
      ></div>
      <div>
        <Center
          displayRight={displayRight}
          setDisplayRight={setDisplayRight}
          setDisplayLeft={setDisplayLeft}
        />
      </div>

      <Right displayRight={displayRight} setDisplayRight={setDisplayRight} />

      {/* <div
          className="App"
          style={{
            overflowY: displayRight === true ? "hidden" : "auto",
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
          </div>

          <Products></Products>
        </div> */}
    </div>
  );
}

export default Layout;
