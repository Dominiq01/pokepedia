import React from 'react'
import classes from './Header.module.less';
import logo from '../../assets/pokepedia-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to={'/'}>
        <img src={logo}/>
      </Link>
    </header>
  )
}

export default Header;