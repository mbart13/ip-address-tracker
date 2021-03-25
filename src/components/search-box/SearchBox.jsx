import React from 'react'
import './SearchBox.scss'
import arrow from '../../assets/images/icon-arrow.svg'

const SearchBox = () => {
  return (
    <div className="search-box">
      <input
        type="search"
        aria-label="Search for any IP address or domain"
        placeholder="Search for any IP address or domain"
      />
      <button className="btn" type="submit">
        <img className="icon" src={arrow} alt="" aria-hidden="true"/>
      </button>
    </div>
  )
}

export default SearchBox
