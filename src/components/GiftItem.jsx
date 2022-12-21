import React from 'react'
import PropTypes from 'prop-types'

export const GiftItem = ({ title, url }) => {

    console.log ({title, url})

  return (
    <div className='card'>
        <img src ={url} alt={ title } />
        <p> {title} </p>
    </div>
  )
}

GiftItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}