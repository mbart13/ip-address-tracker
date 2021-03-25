import React from 'react'

import './IPData.scss'


const IPData = () => {
  return (
    <section>
      <dl className="ip-data">
        <div className="data-item">
          <dt className="key">IP Address</dt>
          <dd className="value">192.212.174.101</dd>
        </div>
        <div className="data-item">
          <dt className="key">Location</dt>
          <dd className="value">Brooklyn, NY 10001</dd>
        </div>
        <div className="data-item">
          <dt className="key">Timezone</dt>
          <dd className="value">UTC-05:00</dd>
        </div>
        <div className="data-item">
          <dt className="key">ISP</dt>
          <dd className="value">SpaceX Starlink</dd>
        </div>
      </dl>
    </section>

  )
}

export default IPData
