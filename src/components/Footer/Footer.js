import React from 'react'
import './footer.css'

const Footer = () => {

  const scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <footer>
      <span className="copy">© 2020 KriStep All Rights Reserved</span>
      <i
        className="fas fa-arrow-up go-up"
        onClick={scrollUp}
      ></i>
    </footer>
  )
}

export default Footer