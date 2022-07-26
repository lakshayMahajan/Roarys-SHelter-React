import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <div className={`card-card ${props.rootClassName} `}>
      <div className="card-info">
        <span className="card-text">{props.text}</span>
        <span className="card-text1">{props.text1}</span>
      </div>
    </div>
  )
}

Card.defaultProps = {
  rootClassName: '',
  text: 'Collect',
  text1:
    'Our shelter collects its food through the student government and its planned fundraisers and food donation drives.',
}

Card.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Card
