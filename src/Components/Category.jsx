import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Array from "../api/products.json";

function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  return (
    <div>


      <button onClick={() => navigate("/")}>Go back</button>

      <div className="products_container">
        {Array.map(
          (item) =>
            item.name === category
              ? item.products.map((product) => (
                  <Link
                    to={`/${item.name}/${product.id}`}
                    key={product.id}
                    className="card"
                  >
                    <div>
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
              : null

          //  filtreleme ücun istifade olunacag
          //  item.id===1? item.products.map((product) => <div key={product.id}>{product.name} </div>):null
        )}
      </div>
    </div>
  );
}

export default Category;
