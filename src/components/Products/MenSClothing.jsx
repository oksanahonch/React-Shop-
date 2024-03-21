import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Products.css';
import ProductOne from './ProductOne';
import SelectFilter from './SelectFilter';

const MenSClothing = () => {

    const [productsAll, setProductsAll] = useState([]);

    const getProductsAll = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
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
                <h1>Men`s clothing</h1>
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

export default MenSClothing;
