import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
import Hamburger from './Hamburger'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    console.log('Here in the toggle', navbarOpen)

    setNavbarOpen((prev) => !prev)    
    console.log('Here in the toggle222', navbarOpen)
  }

  return (
    <nav className='navBar'>
      <div className='logoMenuGroup'>
        <div className='hamburgerDiv' onClick={handleToggle}>
          <Hamburger isOpen={navbarOpen} />
        </div>

        <div className='logoDiv'>
          <img src={logo} className='logoImg' />
        </div>
      </div>

      <div className='menuInBar'>
        <ul>
          <li>Men's</li>
          <li>Women's</li>
          <li>accessories</li>
          <li>sale!</li>
        </ul>
      </div>

      <div className={`navMenu ${navbarOpen ? 'show' : 'hide'}`}>     
        <ul>
          <li>Men's</li>
          <li>Women's</li>
          <li>accessories</li>
          <li>sale!</li>
        </ul>
      </div>

      <div className='iconDiv'>
        <GoSearch />
        <FaUser />
        <FaShoppingCart />
      </div>
    </nav>
  )
}

export default Navbar
