import React, { useState, useEffect, useRef } from 'react';

import Header from './components/header/Header'
import Results from './components/results/Results'
import getIPData from './util/api'

const AppContext = React.createContext()

function App() {
  const targetRef = useRef()
  const [domain, setDomain] = useState('')
  const [height, setHeight] = useState(0)
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchData = (domain='') => {
    setIsLoading(true)
    setIsError(false)
    getIPData(domain)
      .then(data => {
        setResults(data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsError(true)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (targetRef.current) {
      setHeight(
        targetRef.current.offsetHeight
      );
    }
  }, []);

  useEffect(() => {
    fetchData()
  }, [])

  const handleChange = (e) => {
    setDomain(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(domain)
  }

  return (
    <>
      <AppContext.Provider
          value={{ height, results, isLoading, handleSubmit, handleChange, isError }}>
        <Header ref={targetRef} />
        <Results />
      </AppContext.Provider>
    </>

  );
}

export { AppContext };
export default App;
