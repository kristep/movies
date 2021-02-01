import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import HeaderNav from './HeaderNav'

const Header = (props) => {

  return (
    <>
      <header>
        <Link to="/">
          <h1>Movies library</h1>

        </Link>
      </header>
      <HeaderNav />
    </>
  )
}


export default Header