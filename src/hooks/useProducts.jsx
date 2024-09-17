import { useState, useEffect } from 'react';
import Axios from 'axios';

const useProducts = () => {
    const [listOfProducts, setListOfProducts] = useState([]);


    useEffect(() => {
        Axios.get("http://localhost:3001/getProducts").then((response) => {
        setListOfProducts(response.data);
        });
    }, []);

    return listOfProducts;
    };

export default useProducts;
