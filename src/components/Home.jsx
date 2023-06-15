import React from "react";

function Home () {
    return (<div className="home">
        <img className="home-img" src="https://cdn.pixabay.com/photo/2020/11/09/14/36/pencil-5726923_1280.jpg" alt="home-img" />
        <div className="home-content">
        <h1 className="headings">Qureka</h1>
        <h3 className="headings">The Quizzing Club of Manipal University Jaipur</h3>
        <a href="/">
            <button className="join-btn">JOIN US</button>
        </a>
        </div>
    </div>);
}

export default Home;