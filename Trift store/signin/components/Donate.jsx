import React from 'react'
import donate_banner from '../src/assets/Donateimg.png'
import recylvye from '../src/assets/recycle-logo-recycling-and-rotation-arrow-icon-png 1.png'
import save from '../src/assets/save_banner.png'

function Donate() {
  return (
    <div className='donate_div'>
        <div className='donate_banner'>
            <img src={donate_banner}></img>
            <button className='donate_button'>Donate</button>
        </div>
        <div className='ear_div'>
            <dic className="earth_div">
                <img src={save} alt="" />
            </dic>
            <dic className='recycle_div'>
                <div className='recycle_div_img'>
                    <img src={recylvye} alt="" />
                </div>
                <div>Over 10M cloths recycled this year</div>
            </dic>
        </div>
    </div>
  )
}

export default Donate