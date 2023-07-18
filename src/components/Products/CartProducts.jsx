import React, { useContext, useEffect, useState} from 'react';
import CartProduct from '../../contexts/CartProduct';

const CartProducts = () => {

    const {cart, addCartProduct, removeCartProduct} = useContext(CartProduct);

    const [sum, setSum] = useState(null);

    useEffect(()=> {
        setSum(cart.reduce((a, b) => a + b.quantity*b.price, 0).toFixed(2))
    }, [cart])


    
    return (
        <div>
            <div className="product-cart">
                <h1>Cart Products</h1>
                <div><b>Название товара</b></div>
                <div><b>Стоимость</b></div>
                <div><b>Количество</b></div>
                <div><b>Сумма</b></div>
                
            </div>

            <div className="cart">
                {cart.map(product => product.quantity > 0 ?
                <div className="product-cart" key={product.id}>
                    <div><img src={product.image} alt="" /></div>
                    <div>{product.title}</div>
                    <div>{product.price}</div>
                    <div>
                        <button onClick={()=>removeCartProduct(product)}> - </button>
                            {product.quantity}
                        <button onClick={()=> addCartProduct(product)}> + </button>
                    </div>
                    <div>{product.quantity*product.price}</div>
                </div>
                : '')}
            </div>

            <div className="sum">Общая сумма: {sum}</div>

        </div>
    );
}

export default CartProducts;
