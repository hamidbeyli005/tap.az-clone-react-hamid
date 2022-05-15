import React from "react";
import { Link, Outlet } from "react-router-dom";
import Array from "../api/products.json";

function Products() {
  return (
    <div>
      <div className="products_container">
        {Array.map((item) =>
        
          item.products.map((product)  =>
            product.vip === true ? 
              <Link to={`/${item.name}/${product.id}`} className="card" key={product.id}>
                <div className="image"  >
                  <img src={product.image} alt="" />
                </div>
                <div className="bottom">
                  <span>{product.price} AZN </span>
                  <h4>{product.name} </h4>
                  <small>{product.date} </small>
                </div>
              </Link>
                                    

            : null
          )
        )}

      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default Products;
