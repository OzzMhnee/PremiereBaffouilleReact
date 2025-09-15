// src/pages/Bonbons.jsx
import React from 'react';
import CardList from '../components/Card/CardList';
import cardsData from '../data/cards.json';
import SortDropdown from '../components/Buttons&cie/SortDropdown';
import { sortCards } from '../components/Buttons&cie/sortUtils';


const Bonbons = () => {
    const [sortType] = React.useState('title-asc');
    // const [sortType, setSortType] = React.useState('title-asc');

    const sortedCards = sortCards(cardsData, sortType);

    // const handleSortChange = (newSortType) => {
    //     setSortType(newSortType);
    // };
    return (
        <div className="main-content">
            <h1>Page Bonbons</h1>
            {/* <SortDropdown onSortChange={handleSortChange} /> */}
            <CardList cards={sortedCards} />
        </div>
    );
};

export default Bonbons;