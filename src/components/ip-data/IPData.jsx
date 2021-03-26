import React, { useContext }  from 'react'

import { AppContext } from '../../App'
import './IPData.scss'


const IPData = () => {
  const { results } = useContext(AppContext)

  const { ip, isp, location } = results
  return (
    <section>
      <dl className="ip-data">
        <div className="data-item">
          <dt className="key">IP Address</dt>
          <dd className="value">{ip}</dd>
        </div>
        <div className="data-item">
          <dt className="key">Location</dt>
          <dd className="value">{location.city}, {location.region}</dd>
        </div>
        <div className="data-item">
          <dt className="key">Timezone</dt>
          <dd className="value">UTC{location.timezone}</dd>
        </div>
        <div className="data-item">
          <dt className="key">ISP</dt>
          <dd className="value">{isp}</dd>
        </div>
      </dl>
    </section>
  )

}

export default IPData
