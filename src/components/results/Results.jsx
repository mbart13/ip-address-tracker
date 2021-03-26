import React, { useContext } from 'react'
import { AppContext } from '../../App'
import Map from '../map/Map'
import IPData from '../ip-data/IPData'
import Spinner from '../spinner/Spinner'


const Results = () => {
  const { isLoading, isError } = useContext(AppContext)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return (
      <h1 style={{textAlign: 'center'}}>No results found, please try again</h1>
    )
  }

  return (
    <main style={{position: 'relative'}}>
      <IPData />
      <Map />
    </main>
  )
}

export default Results
