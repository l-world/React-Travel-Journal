import React from 'react'
import logoIcon from "../images/logo.png"

export default function Header() {
  return (
    <header>
      <img className='header--logo' src={logoIcon} alt="" />
      <p className='header--title'>my traveljournal</p>
    </header>
  )
}
