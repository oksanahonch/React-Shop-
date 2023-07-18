import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Products.css';
import ProductOne from './ProductOne';
import SelectFilter from './SelectFilter';

const ProductsOll = () => {

    const [productsOll, setProductsOll] = useState([]);

    const getProductsOll = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProductsOll(response.data);
    }

    const [sort, setSort] = React.useState('');

    

    /* const handleChange = (event) => {
        const products = [...ProductsOll]
        let value = event.target.value
        setSort(value);
        products.sort((x, y) => x.value < y.value);
        setProductsOll(products);
    }; */

    const handleChange = (event) => {
        event.preventDefault();
        let value = event.target.value 
        if(value === 'title'){
            setSort(value)
            setProductsOll([...productsOll].sort((x, y) => x.title < y.title))
        }
        else if(value === 'price'){
            setSort(value)
            setProductsOll([...productsOll].sort((x, y) => x.price < y.price))
        }
        else 
            setProductsOll(productsOll)
            setSort('')
        console.log(value);
        //console.log(products);
        console.log(productsOll);
    };

    /* useEffect(() => {
        handleChange()
    }, [sort]) */

    /* useEffect(() => {
        setSort() 
    }, []);   */


     useEffect(() => {
        getProductsOll() 
    }, [productsOll]);

    /* const f = () => {
        const products = [...productsOll].sort((x, y) => x.price - y.price);
        setProductsOll(products);
        console.log(products); 
    }
    useEffect(() => {
        f() 
    }, []); */

    
 

    return (
        <div className="products">
            <div className="header-page">
                <h1>Oll Products</h1>
                <div>
                    {<SelectFilter /* productsOll={productsOll}  */handleChange={handleChange} sort={sort}  /> }
                </div>
            </div>
            

            <div className="products-container">
                {productsOll.map((product) => <ProductOne product={product} key={product.id} />)}
            </div>
                
        </div>
    );
}

export default ProductsOll;
