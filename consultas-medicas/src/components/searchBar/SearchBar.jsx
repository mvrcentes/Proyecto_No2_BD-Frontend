import React, { useState } from "react";
import axios from "axios";

//icon
import search_icon from "../../assets/search_icon.svg";

//style
import "./searchBar.css";

const SearchBar = () => {
    return (
        <div className="searchBar-input">
            <input
                className="input-Seatchbar"
                type="text"
                placeholder="Buscar"
            />
            <img src={search_icon} alt="search icon" className="icon" />
        </div>
    );
};

export default SearchBar;
