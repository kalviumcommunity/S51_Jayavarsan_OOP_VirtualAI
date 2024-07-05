import React ,{ useState } from 'react'
import items from '../items'
import ItemsDis from './ItemsDis'
import image_shirt from '../src/assets/shirt.png' 
import like from "../src/assets/heart.png"
import cart from "../src/assets/star.png"
import { Link } from 'react-router-dom'

function DealsMen() {
    const [itemsList, setItemsList] = useState(items);

    const toggle_cart = (itemId) => {
        const updatedItemsList = itemsList.map(item => {
            if (item.id === itemId) {
                return { ...item, is_cart: !item.is_cart };
            }
            return item;
        });
        setItemsList(updatedItemsList);
    }
  return (
    <>
        <div id='deals_header'>
            <h1>Daily Deals</h1>
          
        </div>
        <div id='deals_content'>
            <div id='deals_offer'>
                <div id='offer_heading'>
                    <h1>Only Availabe <br />For 24 Hours.</h1>
                    <p>Dont't Miss Out!</p>
                </div>
                <div id='deals_time'>
                    <p>Sale Ends In</p>
                    < div id='time'>
                        <div className='cirTime'>
                            <div>10</div>
                            <p>Hours</p>
                        </div>
                        <div className='upper'>:</div>
                        <div className='cirTime'>
                            <div>32</div>
                            <p>Minutes</p>
                        </div>
                        <div className='upper'>:</div>
                        <div className='cirTime'>
                            <div>59</div>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
                <div id='button_div'>
                    <Link to={'/seeAll'}><button id='product_button'>See All Products</button></Link>
                </div>
            </div>
            <div id='deals_items'>
            {itemsList
                    .filter(item => item.gender === "men")
                    .map(item => (
                        <ItemsDis
                            key={item.id} // Use unique id as key
                            shirt_name={item.shirt_name}
                            rate={item.rate}
                            rating={item.rating}
                            brand_name={item.brand_name}
                            img_link={image_shirt}
                            is_cart={item.is_cart}
                            toggel_cart={() => toggle_cart(item.id)} // Pass item id to toggle_cart
                            ikey={item.id} // You can use item.id or any other unique identifier as ikey
                        />
                    ))}
    </div>
        </div>
        <div id='deals_foot'>
        <h1>Our Featured Offers</h1>
            <Link to={'/seeAll'}><a id='seeAll' href="">See All</a></Link>
        </div>
        
    </>
  )
}
console.log(items)
export default DealsMen