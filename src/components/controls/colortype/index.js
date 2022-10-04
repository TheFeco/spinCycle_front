import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import { COLORS } from '../../../config/constants'

const ColorType = ({ color, schedule }) => {
  const style = !schedule ? { backgroundColor: COLORS[color] } : { width: 15, height: 15, backgroundColor: COLORS[color] }

  return (
    <div className="color__type" style={style} />
  )
}

export default ColorType
