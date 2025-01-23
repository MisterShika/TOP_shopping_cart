import { useState } from 'react';
import { useNavigate } from "react-router-dom"

function Home () {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const updateSearch = (e) => {
        let newVal = e.target.value;
        setSearchTerm(newVal)
    }

    const searchSubmit = (e) => {
        e.preventDefault();
        navigate(`/shop?search=${searchTerm}`);
        console.log(searchTerm);
        setSearchTerm('');
    }

    return(
        <div className="home-page">
            <div className="river-bar"></div>
            <div className="banner">
                <video autoPlay muted loop>
                    <source src="/src/assets/video.mp4" type="video/mp4" />
                </video>
                <h1>River</h1>
            </div>
            <h2>a fake shop.</h2>
            <h3>with no backend</h3>
            <div className="initial-search-container">
                <form onSubmit={searchSubmit}>
                    <input type="text" placeholder="Find your thing." value={searchTerm} onChange={updateSearch}/>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
        </div>
    );
};

export default Home;