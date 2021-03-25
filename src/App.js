import React, { useState, useEffect, useRef } from 'react';

import Header from './components/header/Header'
import Map from './components/map/Map'
import Results from './components/results/Results'

const AppContext = React.createContext()

function App() {
  const targetRef = useRef();
  const [searchTerm, setSearchTerm] = useState('')
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (targetRef.current) {
      setHeight(
        targetRef.current.offsetHeight
      );
    }
  },[]);

  return (
    <>
      <AppContext.Provider value={{ height }}>
        <Header ref={targetRef} />
        <Results />
      </AppContext.Provider>
    </>

  );
}

export { AppContext };
export default App; ;
