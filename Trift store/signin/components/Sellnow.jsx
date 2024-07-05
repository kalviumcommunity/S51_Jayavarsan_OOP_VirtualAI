import React from 'react'
import shirts from '../src/assets/clothespng.parspng 1.png'
import shirt_see from '../src/assets/shirt_sell.png'
import sell from '../src/assets/shirt_sellnow_thirft.png'
import recycle from'../src/assets/recylcye_img.png'
import { Link } from 'react-router-dom'

function Sellnow() {
  return (
    <div className='sellnow_div'>
        <div className='sellnow_side1'>
            <div className='side1_text'>
                <div className='side_text'>
                    <div>Sell on Thrift</div>
                    <div className='elnow'> Sell Now!</div>
                    <div>Sell Now! & get paid</div>
                </div>
                <div className='side1_buttons'>
                   <Link className='side1_buttons_but' to={'/seller'}><button >Sell</button></Link>
                    <div className='side1_learn'>Learn more</div>
                </div>
            </div>
            <div className='side1_img'>
                 <img src={shirts} alt="" /> 
            </div>
        </div>
        <div className='sellnow_side2'>
            <div className='sellnow_side_shirts'>
                <div className='sellnow_cottonshirts'>
                < Link to={'/seeAll'}><img src={shirt_see}></img> </Link>
                </div>
                <div className='sellnow_sellnow'>
                    <Link to={'/seller'}><img src={sell}></img></Link>
                </div>
            </div>
            <div className='sellnow_recycle'>
                <img src={recycle}></img>

            </div>
        </div>
    </div>
  )
}

export default Sellnow