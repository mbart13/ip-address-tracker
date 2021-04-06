import React, { useContext } from 'react'
import './SearchBox.scss'
import arrow from 'assets/images/icon-arrow.svg'
import { AppContext } from 'App'

const SearchBox = () => {
  const { handleSubmit, handleChange } = useContext(AppContext)

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="search"
        aria-label="Search for any IP address or domain"
        placeholder="Search for any IP address or domain"
        onChange={handleChange}
      />
      <button className="btn" type="submit" aria-label="submit">
        <img className="icon" src={arrow} alt="" aria-hidden="true"/>
      </button>
    </form>
  )
}

export default SearchBox
