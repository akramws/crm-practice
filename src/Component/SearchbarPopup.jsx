import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './Style/SearchbarPopup.css'

const SearchbarPopup = () => {
    return (
        <div className='popup-Searchbar'>
            <span className='searchBar-btn'><BsSearch /></span>
            <span className='experience-btn'>| Yrs. of Exp. |</span>
            <input type="Search" placeholder='Search'/>
            <button className='last-Serchbtn'>Search</button>
        </div>
    )
}

export default SearchbarPopup