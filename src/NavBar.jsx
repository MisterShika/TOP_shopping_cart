import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Cart from "./Cart";

function NavBar ({searchParams, setSearchParams, cartData, setCartData}) {
    const [searchInputValue, setSearchInputValue] = useState([]);
    const navigate = useNavigate();
    
    let searchValue = "";
    if(searchParams.get("s") && searchParams.get("s").length >= 1){
        searchValue = searchParams.get("s");
    }

    useEffect(() => {
        setSearchInputValue(searchValue);
    }, []);

    const updateSearch = (e) => {
        setSearchInputValue(e.target.value);
    }

    const searchAgain = (e) => {
        console.log(searchInputValue);

        e.preventDefault();
        setSearchParams(searchInputValue)
        navigate(`/shop?s=${searchInputValue}`);
        console.log(searchInputValue);
    }

    return(
        <div className="nav-container">
            <h1>River</h1>
            <form onSubmit={searchAgain} className="nav-search">
                <input type="text" value={searchInputValue} onChange={updateSearch}></input>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <div className="nav-cart">
                <Cart 
                    cartData={cartData}
                    setCartData={setCartData}
                />
            </div>
        </div>
    )
};

export default NavBar;