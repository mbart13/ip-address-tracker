import React, { useContext } from 'react'
import { AppContext } from '../../App'
import Map from '../map/Map'
import IPData from '../ip-data/IPData'
import './Results.scss'
import Spinner from '../spinner/Spinner'

const Results = () => {
  const { isLoading, isError } = useContext(AppContext)

  if (isLoading) {
    return <main><Spinner /></main>
  }

  if (isError) {
    return (
      <main>
        <h1 style={{textAlign: 'center'}}>No results found, please try again</h1>
      </main>
    )
  }

  return (
    <main>
      <IPData />
      <Map />
    </main>
  )
}

export default Results
