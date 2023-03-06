import React, { useState } from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import logo from "../../assets/logo.svg"

const navbar = () => {
  //const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href='#home' style={{color: '#fff'}}>Home</a></p>
          <p><a href='#wgpt3' style={{color: '#fff'}}>What is GPT3?</a></p>
          <p><a href='#possibility' style={{color: '#fff'}}>Open AI</a></p>
          <p><a href='#features' style={{color: '#fff'}}>Case Studies</a></p>
          <p><a href='#blog' style={{color: '#fff'}}>Library</a></p>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'> Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>

      </div>
    </div>
  )
}

export default navbar
