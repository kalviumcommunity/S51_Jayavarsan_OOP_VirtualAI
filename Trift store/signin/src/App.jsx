import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css'
import Signup from "../components/Signup"
import Signin from "../components/Signin"
import Home from "../components/Home"
import Checkout from '../components/Checkout'
import Sellnow from '../components/Sellnow'
import Donate from '../components/Donate'
import SellerPage from '../components/Seller'
import SeeAll from '../components/SeeAll'
import CartDis from '../components/CartDis'
import items from '../items'
import DealsWomen from '../components/DealsWomen'
import DealsMen from '../components/DealsMen'


function App() {
  const [count, setCount] = useState(0)
  const [mainArr , setMainArr] = useState(items)
  
  // console.log(mainArr)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Signin/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/checkout' element={< Checkout/>}></Route>
      <Route path='/seller' element={<SellerPage/>}></Route>
      <Route path='/seeAll' element={<SeeAll  />}></Route>
      <Route path ="/cart" element = {<CartDis mainArr={mainArr} setMainArr={setMainArr} />}></Route>
      <Route path ="/women" element = {<DealsWomen />}></Route>
      <Route path ="/men" element = {<DealsMen />}></Route>
    </Routes>
    </BrowserRouter>
    // < Sellnow/>
    // < Donate/>
  )
}

export default App
