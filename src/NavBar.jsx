import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

function NavBar ({searchParams, setSearchParams}) {
    const [searchInputValue, setSearchInputValue] = useState([]);
    const navigate = useNavigate();
    
    let searchValue = "";
    if(searchParams.get("s") && searchParams.get("s").length >= 1){
        searchValue = searchParams.get("s");
    }

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
        <nav className="nav-container">
            <form onSubmit={searchAgain}>
                <input type="text" value={searchInputValue} onChange={updateSearch}></input>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </nav>
    )
};

export default NavBar;