import React from 'react'
import { ChevronRight } from 'react-bootstrap-icons'

function StaticBanner({Name}){
  return (
    <div>
        <div className='staic-banner'>
        <div className="container">
        <h2>{Name}</h2>
        <p className="Static-navigation">
          <a>Home</a>
          <ChevronRight />
          <a>{Name}</a>
        </p>
      </div>
        </div>
    </div>
  )
}

export default StaticBanner
