import React from 'react'
import ThemeContext from '../contexts/theme'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: '#20B2AA'
}

export default function Nav ({ toggleTheme }) {
  const theme = React.useContext(ThemeContext)
  return (
    <nav className='row space-between'>
      <ul className='row nav'>
        <li>
          <NavLink
            to='/'
            exact
            activeStyle={activeStyle}
            className='nav-link'>
              Top
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/new'
            activeStyle={activeStyle}
            className='nav-link'>
              New
          </NavLink>
        </li>
      </ul>
      <button
        style={{fontSize: 30}}
        className='btn-clear'
        onClick={toggleTheme}
      >
        {theme === 'light' ? '🌑' : '🌕'}
      </button>
    </nav>
  )
}