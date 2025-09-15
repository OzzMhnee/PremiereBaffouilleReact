import React from 'react';

const Home = () => {
    const userName = "Jérémie";

    return (
    <div className="main-content">
        <h1>Bonjour, {userName} !</h1>
        <h2>Bienvenue sur la page d'accueil !</h2>
    </div>
    );
};

export default Home;