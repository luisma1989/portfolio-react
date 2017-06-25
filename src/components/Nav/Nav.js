import React from 'react'
import './Nav.scss'

export const Nav = () => (
  <div id='main'>
    <ul id='navigationMenu'>
      <li>
        <a nameClass='home' href='#'>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a nameClass='about' href='#'>
          <span>About</span>
        </a>
      </li>
      <li>
        <a nameClass='services' href='#'>
          <span>Services</span>
        </a>
      </li>
      <li>
        <a nameClass='portfolio' href='#'>
          <span>Portfolio</span>
        </a>
      </li>
      <li>
        <a nameClass='contact' href='#'>
          <span>Contact us</span>
        </a>
      </li>
    </ul>
  </div>
)

export default Nav
