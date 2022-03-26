import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import FooterMenu from './FooterMenu'

function Footer() {
  const customerService = [
    'Accessibility',
    'Contact Us',
    'Return Policy',
    'FAQ',
    'Gift Certificates',
    'Wishlist',
  ]

  const company = ['About Us', 'Careers', 'Press', 'Affiliates']

  return (
    <div className='footer'>
      <div className='footerMenu'>
        <div className="footerMenuGroup">
          <FooterMenu listName='Customer Service' listItems={customerService} />
          <FooterMenu listName='Company' listItems={company} />
        </div>
        <div className='followUs'>
          <p className='title'>Follow Us</p>

          <div className='followIcons'>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
