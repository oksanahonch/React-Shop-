import { Rate } from "antd";
import React, { useContext, useState } from "react";
import './Products.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductContext from "../../contexts/ProductContext";
import CartProduct from "../../contexts/CartProduct";
import { Button } from "@mui/material";

const ProductOne = ({product}) => {

    const {like, addLikeProduct, removeLikeProduct} = useContext(ProductContext);
    const {addCartProduct} = useContext(CartProduct);
    
    const [isLike, setisLike] = useState(like.find(l => l.id === product.id));

    const addLike = () => {
        addLikeProduct(product);
        setisLike(true);
    } 
    const addCart = () => {
      addCartProduct(product);
    }


    const removeLike = () => {
        removeLikeProduct(product.id);
        setisLike(false);
    }


  return (
        <div key={product.id} className="cart-product">
            <div className="like">
                {isLike ? <FavoriteIcon onClick={removeLike} /> : 
                <FavoriteBorderIcon onClick={addLike} />}
            </div>
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <div className="cart-product-price">
                <div className="cart-price">
                <div>Price: {product.price}</div>
                <Button onClick={addCart}>Купить</Button>
            </div>
            <div className="cart-rating">
              {product.rating.rate}
              <Rate allowHalf defaultValue={product.rating.rate} />
            </div>
          </div>
        </div>
  );
};

export default ProductOne;
