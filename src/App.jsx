import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';


import Bonbons from './pages/Bonbons';
import Voitures from './pages/Voitures';
import TodoListPage from './pages/TodoList';
import Home from './pages/Home';
import Family from './pages/Family'
import Profil from './pages/Profil';
import PrivateRoute from './components/protection/PrivateRoute';

function App() {

    const [isAdmin] = useState(false);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/profil" element={
                    <PrivateRoute isAdmin={ isAdmin } >
                        <Profil />
                    </PrivateRoute>
                    } />
                <Route path="/bonbons" element={
                    <PrivateRoute isAdmin={ isAdmin } >
                        <Bonbons />
                    </PrivateRoute>
                    } />
                <Route path="/voitures" element={<Voitures />} />
                <Route path="/todolist" element={<TodoListPage />} />
                <Route path="/family" element={<Family />} />
            </Routes>
        </Router>
    );
}

export default App;