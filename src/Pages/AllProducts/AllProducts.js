import React, { useState } from 'react';
import { allItem } from '../../Api/CategoryApi';
import Card from '../Categories/Card/Card';

const AllProducts = () => {
    const [products,setProducts] = useState([])
    allItem().then(data=>{
        setProducts(data)
    })
    return (
        <div>
            {products.map(item => <Card item={item}/>)}
        </div>
    );

};

export default AllProducts;