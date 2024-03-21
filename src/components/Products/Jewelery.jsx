import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Products.css';
import ProductOne from './ProductOne';
import SelectFilter from './SelectFilter';

const Jewelery = () => {

    const [productsAll, setProductsAll] = useState([]);

    const getProductsAll = async () => {
        const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
        setProductsAll(response.data);
    }

    const [sort, setSort] = React.useState('');

    
        const handleChange = (event) => {
        let value = event.target.value;
        setSort(value);
        let sortFunc = () => {};

        switch (value) {
            case 'title':
                sortFunc = (a, b) => a.title.localeCompare(b.title);
                break;
            case 'price':
                sortFunc = (a, b) => a.price - b.price;
                break;
            default: 
                sortFunc = (a, b) => a.id - b.id;
                break;
        }

        setProductsAll([...productsAll].sort(sortFunc))
    };

     useEffect(() => {
        getProductsAll() 
    }, []);

    return (
        <div className="products">
            <div className="header-page">
                <h1>Jewelery</h1>
                <div>
                    {<SelectFilter handleChange={handleChange} sort={sort}  /> }
                </div>
            </div>
            

            <div className="products-container">
                {productsAll.map((product) => <ProductOne product={product} key={product.id} />)}
            </div>
                
        </div>
    );
}

export default Jewelery;
