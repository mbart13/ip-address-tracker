import React from 'react';
import SearchBox from '../search-box/SearchBox';
import './Header.scss';

const Header = React.forwardRef((props, ref) => {
  return (
    <header ref={ref}>
      <h1 className="title">IP Address Tracker</h1>
      <SearchBox />
    </header>
  )
})

export default Header
