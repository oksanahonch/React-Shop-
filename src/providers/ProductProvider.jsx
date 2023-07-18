import { useEffect, useState } from 'react';
import ProductContext from '../contexts/ProductContext';

const ProductProvider = ({children}) => {

    const [like, setlike] = useState(localStorage.getItem('like') ? JSON.parse(localStorage.getItem('like')) : []);

    useEffect(() => {
        localStorage.setItem('like', JSON.stringify(like));
    }, [like])

    const addLikeProduct = (product) => {
        setlike([...like, product])
    }

    const removeLikeProduct = (id) => {
        setlike(like.filter(f => f.id !== id))
    }


    return (
        <ProductContext.Provider value={{ like, addLikeProduct, removeLikeProduct }}>
           {children} 
        </ProductContext.Provider>
    );
}

export default ProductProvider;
