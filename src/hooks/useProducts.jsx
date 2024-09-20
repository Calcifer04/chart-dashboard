import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = () => {
    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/getProducts").then((response) => {
        setListOfProducts(response.data);
        });
    }, []);

    return [listOfProducts, setListOfProducts];
    };

export default useProducts;
