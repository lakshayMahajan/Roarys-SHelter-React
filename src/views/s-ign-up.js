import React from 'react'

import { Helmet } from 'react-helmet'

import './s-ign-up.css'

const SIgnUp = (props) => {
  return (
    <div className="s-ign-up-container">
      <Helmet>
        <title>SIgn Up - Roary's SHelter</title>
        <meta property="og:title" content="SIgn Up - Roary's SHelter" />
      </Helmet>
    </div>
  )
}

export default SIgnUp
