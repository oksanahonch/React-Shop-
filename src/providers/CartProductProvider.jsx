import React, { useEffect, useState } from 'react';
import CartProduct from '../contexts/CartProduct';

const CartProductProvider = ({children}) => {

    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart.filter(p=>p.quantity>0)));
    }, [cart])

    const addCartProduct = (product)=>{ 
        const findProduct = cart.find(p => p.id === product.id)
    
        // если товар в корзине
        if (findProduct) { 
          const editedProducts = cart.map(p => { 
            if (p.id === product.id) {
              return {
                ...p,
                quantity: ++p.quantity
              }
            }
            else { 
              return p;
            }
          })

          setCart(editedProducts)
        }
        // если не в корзине
        else { 
            product.quantity = 1;
            setCart([...cart, product])
        }
      }

    const removeCartProduct = (product) => {
        const findProduct = cart.find(p => p.id === product.id)
    
        // если товар в корзине
        if (findProduct) { 
          const editedProducts = cart.map(p => { 
            if (p.id === product.id) {
              return {
                ...p,
                quantity: --p.quantity
              }
            }
            else { 
              return p;
            }
          })

          setCart(editedProducts)
        }
        // если не в корзине
        else { 
            setCart(cart.filter(f => f.id !== product.id))
        }
    } 


    return (
        <CartProduct.Provider value={{ cart, addCartProduct, removeCartProduct }}>
            {children}
        </CartProduct.Provider>
    );
}

export default CartProductProvider;
