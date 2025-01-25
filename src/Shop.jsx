import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function Shop () {
    const [searchParams, setSearchParams] = useSearchParams();
    const [productData, setProductData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    let searchValue = "";
    if(searchParams.get("s") && searchParams.get("s").length >= 1){
        searchValue = searchParams.get("s");
    }
    

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        if(productData.length > 0 && searchValue){
            console.log(searchValue);
            const newData = productData.filter((element) => {
                if(element.title.toLowerCase().includes(searchValue.toLowerCase())){
                    return element;
                }
            });
            setFinalData(newData);
        }else{
            setFinalData(productData);
        }
    }, [productData]);

    return (
        <div className="shop-container">
            Hello World
            Your search:

            <ul>
                {
                    finalData.map((row) => {
                        console.log(row);
                            return <li key={row.id}>
                                <img src={row.image} alt={row.title} />
                                <span className="product-title">{row.title}</span>
                                <span className="product-price">${row.price}</span>
                            </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Shop;