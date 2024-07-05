import React from 'react'
// // import { button, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Help from "../src/assets/help.png"
import Track from "../src/assets/track.png"
import Flag from "../src/assets/flag.png"
import Menu from "../src/assets/menu.png"
import DropDown from  "../src/assets/down-arrow.png"
import Search from "../src/assets/search.png"
import Cart from "../src/assets/cart.png"
import Fav from "../src/assets/heart.png"

const NavBar = ({value,setValue }) => {
    const valuer = (e) =>{
        setValue(e.target.value)
    }
  return (
    <>
     <div className="navbar1">
        <div id='left-element'>
            <a>Daily Deals</a>
            <a>Sell on Thrift Store</a>
            <a>Gift Cards</a>
        </div>
        <div id='right-elements'>
            <a><img src={Help} alt="help"/><p>Help</p></a>
            <a><img src={Track} alt="help"/><p>Track Order</p></a>
            <a><img src={Flag} alt="region"/><p>India/Rupees</p></a>
        </div>
     </div>
     <div className='navbar2'>
        <img src={Menu} alt="menu" />
        <span className='logo_div'>Pure Threads</span>
        <div id='directs'>
            <p>Categories <img src={DropDown} alt="drop down" /></p>
            <p>Deals <img src={DropDown} alt="drop down" /></p>
            <p>What's New <img src={DropDown} alt="drop down" /></p>
        </div>
       <div className="search">
        <div id='searchbar'>
            <span id="all-link">All</span>
            <p>|</p>
            <input onChange={(e)=>{valuer(e)}} type="text" placeholder="Search for items, brands, or categories" />
        </div>
        <button id="search-button"><img src={Search} alt="search" /></button>
       </div>
        <a id='sign-in'>Sign in</a>
        
        <Link to={'/cart'}> <img src={Cart} id='cart' alt="cart" /></Link>
        <img src={Fav} id='fav' alt="fav" />
     </div>
    </>
  )
}

export default NavBar