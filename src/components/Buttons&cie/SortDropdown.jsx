import React from "react";
import '../style/SortDraopdown.scss';

const SortDropdown = ({ onSortChange }) => {
    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    };

    return (
        <div className="sort-dropdown">
            <label className="label" htmlFor="sort-select">Trier par : </label>
            <select id="sort-select" onChange={handleSortChange} className="select">
                <option value="title-asc">Ordre Alphabétique (A-Z)</option>
                <option value="price-asc">Prix (croissant)</option>
                <option value="price-desc">Prix (décroissant)</option>
            </select>
        </div>
    );
};

export default SortDropdown;
