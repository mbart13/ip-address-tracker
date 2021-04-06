import React, { useContext } from 'react'
import { AppContext } from '../../App'
import Map from 'components/map/Map'
import IPData from 'components/ip-data/IPData'
import Spinner from 'components/spinner/Spinner'


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
