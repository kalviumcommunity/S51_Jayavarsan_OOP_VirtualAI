import React ,{useState}  from 'react'
import star from "../src/assets/star.png"
import like from "../src/assets/heart.png"
import cart from "../src/assets/cart.png"
import likeW from "../src/assets/heart-w.png"

function ItemsDis({shirt_name , rate , rating , brand_name , img_link ,is_cart ,toggel_cart , ikey}) {
    const display_rating = () =>{
        let temp = []
        for(let i=1;i <= Math.round(rating) ;i++ ){
            temp.push(<img key={i} src={`${star}`}/> )
        }
        return temp
    }

    const [isButton , setIsButton] =useState(false)
    const [islike ,setIsLike] = useState(false)

    const cart_button = () =>{
        setIsButton(true)
    }
    const caert_button_off = () =>{
        setIsButton(false)
    }

    const toggel_like = () =>{
        setIsLike(!islike)
    }
    
    

    
  return (
    <>
    <div id='item_box' onMouseOver={cart_button} onMouseLeave={caert_button_off} key={ikey}>
        <div id='options'>
            <div className='sales_bar'>Sale</div>
            <div>
                <img onClick={toggel_like} src={islike ? likeW : like} alt="" />
            </div>
        </div>
        <div className='item_image'><img src={`${img_link}`} alt="" /></div>
        <div className='details_box'>
            <h2>{shirt_name}</h2>
            <p>{brand_name}</p>
            <div>
                {
                    display_rating()
                }
            </div>
            <h2>₹{Math.round(rate/2)}</h2>
        </div>
        {isButton && <button onClick={() => toggel_cart(ikey)} className='cart_button'>{is_cart ? "Remove From Cart" : "Add to Cart"}</button>}
    </div>
    </>
  )
}

export default ItemsDis