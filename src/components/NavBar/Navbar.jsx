import React from "react";
import { Link } from "react-router-dom";
import '../style/Navbar.scss';

const Navbar = () => {
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => setDarkMode(dm => !dm);

    React.useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/Home" className="navbar-logo">
                    <span className="navbar-title">PremièreBaffouille</span>
                </Link>
                <ul className="navbar-links">
                    <li><Link to="/voitures">Voitures</Link></li>
                    <li><Link to="/bonbons">Bonbons</Link></li>
                    <li><Link to="/todolist">TodoList</Link></li>
                    <li><Link to="/family">Family</Link></li>
                </ul>
                <button className="navbar-toggle" onClick={toggleDarkMode}>
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;