import React from 'react'

import { Helmet } from 'react-helmet'

import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>Sign In - Roary's SHelter</title>
        <meta property="og:title" content="Sign In - Roary's SHelter" />
      </Helmet>
    </div>
  )
}

export default SignIn
