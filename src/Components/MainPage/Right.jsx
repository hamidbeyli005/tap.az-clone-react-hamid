import React from "react";
import { Link, Outlet } from "react-router-dom";
import category from "../../api/category.json";

function Right({ setDisplayRight, displayRight }) {
  return (
    <div
      className="right"
      style={{
        transform:
          displayRight === true ? "translateX(0)" : "translateX(100vW)",
        visibility: displayRight === true ? "visible" : "hidden",
        overflowY: displayRight === true ? "auto" : "hidden",
      }}
    >
      <div>
        <div className="header_right">
          {" "}
          <div className="icon" onClick={() => setDisplayRight(false)}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4KICAgIDxwYXRoIGZpbGw9IiNCNkI2QjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjggMS4yTDEyLjYgMCA2LjkgNS43IDEuMiAwIDAgMS4ybDUuNyA1LjdMMCAxMi42bDEuMiAxLjIgNS43LTUuNyA1LjcgNS43IDEuMi0xLjItNS43LTUuN3oiLz4KPC9zdmc+Cg=="
              alt=""
            />
          </div>
          <h4>Kataloq</h4>
        </div>
        <div className="margin"></div>

        <div className="content_right">
          <ul>
            {category.map((category, index) => (
              <li key={index} className="category">
                <Link to={`/${category.name}`}>
                  <div className="img">
                    <img src={category.image} alt="" />
                  </div>
                  <div className="titles">
                    <pre className="title">{category.title}</pre>
                    <pre className="altTitle">{category.altTitle}</pre>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Right;
