import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import ProductContext from '../../contexts/ProductContext';
import { ShoppingCartOutlined } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CartProduct from '../../contexts/CartProduct';

const Header = () => {

    const {like} = useContext(ProductContext);
    const {cart} = useContext(CartProduct);

    const [cartLength, setCartLength] = useState(null);

    
    useEffect(() => {
        setCartLength(cart.reduce((a, b) => a + b.quantity, 0))
    }, [cart])

    return (
        <header>
            <nav>
                <NavLink to="/">Oll product</NavLink>
                <NavLink to="/electronics">Electronics</NavLink>
                <NavLink to="/jewelery">Jewelery</NavLink>
                <NavLink to="/men">Men`s Clothing</NavLink>
                <NavLink to="/women">Women`s Clothing</NavLink>
                <NavLink to="/likes" className='icons'> <FavoriteBorderIcon /> {like.length} </NavLink>
                <NavLink to="/cart" className='icons'> <ShoppingCartOutlined /> {cartLength} </NavLink>  
            </nav>
            
        </header>
    );
}

export default Header;
