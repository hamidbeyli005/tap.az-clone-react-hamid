import React from "react";
import { Link } from "react-router-dom";
import Array from "../api/products.json";

function Products() {
  return (
    <div>
      <div className="products_container">
        {Array.map(
          (item) =>
            item.products.map((product) => (
              <Link key={product.id} to={`/${item.name}/${product.id}`} className="card">
                <div >
                  <div className="image">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="bottom">
                    <span>{product.price} AZN </span>
                    <h4>{product.name} </h4>
                    <small>{product.date} </small>
                  </div>
                </div>
              </Link>
            ))

          //  filtreleme ücun istifade olunacag
          //  item.id===1? item.products.map((product) => <div key={product.id}>{product.name} </div>):null
        )}
      </div>
    </div>
  );
}

export default Products;
