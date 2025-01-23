function Home () {
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
            
            <div className="initial-search-container">
                <input type="text" placeholder="Find your thing." />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    );
};

export default Home;