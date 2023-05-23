import React,{ useState, useEffect } from 'react'
import { ItemList } from '../ItemList'
import axios from 'axios';

export const ItemListContainer = () => {
    const [categories,setCategories]=useState([]);
    const [products, setProduct] = useState([]);
    const [productLoading, setProductLoading] = useState(true)

    const getCategories = async () =>{
    const response = await axios.get("http://localhost:8080/api/category/getcategories");
    console.log(response.data);
    setCategories(response.data);
  }
  const getProducts = async () =>{
    const response = await axios.get("http://localhost:8080/api/product/getall");
    console.log(response.data);
    setProduct(response.data);
    setProductLoading(false);
  }

    useEffect(() => {
    getCategories();
    getProducts();
    }, []);
    return (
        <div className="mt-5 pt-5">
            <div className="fw-bold d-flex flex-column align-items-center mt-5">
                <h1 className="fw-bold">~ Products ~</h1>
                {
                    productLoading ?
                        <img src="https://github.com/KeviinPoncee/reactjs-pf-restaurant/blob/gh-pages/assets/images/loader.gif?raw=true" alt="" />
                    :

                        <ItemList categories={categories} products={products}  />
                }
            </div>
        </div>
    )
}
