import VipProducts from "./Components/VipProducts";
import NoPage from "./Components/NoPage";
import Layout from "./Layout";
import Product from "./Components/Product";
import Category from "./Components/Category";
import Shops from "./Components/Shops";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Shop from "./Components/Shop";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route exact path="/vip" element={<VipProducts />} />
          <Route exact path="/:category/:id" element={<Product ></Product>} />
          <Route exact path="/:category" element={<Category></Category>} />
          <Route exact path="/shops" element={<Shops></Shops>} />
          <Route exact path="/shops/:shop" element={<Shop></Shop>} />
          <Route exact path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
