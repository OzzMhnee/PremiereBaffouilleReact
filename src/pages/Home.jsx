import React from 'react';
import ClassCount from '../components/hooks/ClassCount';
import FunctionCount from '../components/hooks/FunctionCount';

const Home = () => {
    const userName = "Jérémie";

    return (
    <div className="main-content">
        <h1>Bonjour, {userName} !</h1>
        <h2>Bienvenue sur la page d'accueil !</h2>
        <ClassCount/>
        <FunctionCount/>
    </div>
    );
};

export default Home;