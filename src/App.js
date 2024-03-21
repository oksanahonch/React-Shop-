import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductsAll from "./components/Products/ProductsAll";
import Electronics from "./components/Products/Electronics";
import Jewelery from "./components/Products/Jewelery";
import MenSClothing from "./components/Products/MenSClothing";
import WomenSClothing from "./components/Products/WomenSClothing";
import ProductProvider from "./providers/ProductProvider";
import LikesList from "./components/Products/LikesList";
import CartProductProvider from "./providers/CartProductProvider";
import CartProducts from "./components/Products/CartProducts";

function App() {
  return (
    <div>
      <ProductProvider>
      <CartProductProvider>
        <Header />

        <Routes>
          <Route path="/" element={<ProductsAll />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/men" element={<MenSClothing />} />
          <Route path="/women" element={<WomenSClothing />} />
          <Route path="/likes" element={<LikesList />} />
          <Route path="/cart" element={<CartProducts />} />
        </Routes>

      </CartProductProvider>
      </ProductProvider>


    </div>
  );
}

export default App;
