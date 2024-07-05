import React ,{useState}from 'react'
import DealsMen from './DealsMen'
import Sellnow from'./Sellnow'
import DealsWomen from './DealsWomen'
import Donate from './Donate'
import HomeMain from "./HomeMain"
// import { useState } from 'react'
import items from '../items'
import CartDis from './CartDis'
import Footer from './Footer'


function Home() {
  const [mainArr , setMainArr] = useState(items)
  return (
    <>
      < HomeMain setMainArr={setMainArr}  mainArr={mainArr}/>
      < DealsMen />
      <Sellnow />
      <DealsWomen  setMainArr={setMainArr}  mainArr={mainArr}/>
      < Donate />
      {/* <CartDis setMainArr={setMainArr}  mainArr={mainArr}></CartDis> */}
      < Footer/>
    </>
    
  )
}

export default Home