import React, { useContext} from 'react';
import ProductContext from '../../contexts/ProductContext';
import ProductOne from './ProductOne';

const LikesList = () => {

    const {like} = useContext(ProductContext);

    
    return (
        <div className="products">
            <h1>Favorites products</h1>

            <div className="products-container">
                {like.map((product) => <ProductOne product={product} key={product.id} />)}
            </div>
                
        </div>
    );
}

export default LikesList;
