import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

const MenuItem = ({ active, name, icon }) => {
  var classname = 'menu__item'
  classname += active ? ' menu-item--active' : ''

  return (
    <div className="menu__item--container">
      <Icon name={icon} className="menu__item--icon" />
      <Link to={`/${name.toLowerCase()}`} className={classname}>{name}</Link>
    </div>
  )

}

export default MenuItem
