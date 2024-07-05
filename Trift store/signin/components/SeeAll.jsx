import React ,{useState} from 'react'
import filter from "../src/assets/Group 95.png"
import ItemsDis from './ItemsDis'
import items from '../items'
import image_shirt from '../src/assets/shirt.png' 
import NavBar from './NavBar'

function SeeAll({filte}) {

    const filt=''

    if (filte){
        filt == filte
    }else{
        filt == ' '
    }

    const [value , setValue] = useState(filt)
    console.log(value)
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

    const filteredItems = itemsList.filter(item =>
        item.shirt_name.toLowerCase().includes(value.toLowerCase())
    );
  return (
    <>
    <NavBar value={value} setValue={setValue}></NavBar>
    <div id='seeAll_content'>
    <div id='title_see'>
        <span>Home &gt;</span> 
        <p>Product</p>
    </div>

    <div id='sideBar'>
        <div id='disSideBar'>
            <img src={filter} alt="" />
            <div className='single'></div>
            <div className='sidebar_heading'>
                <span className='heading_side'>Refined By</span>
                <a href="">Clear All</a>
            </div>
            <div className='single'></div>
            <span className='heading_side'>Price</span>
            <div id='checker'>
                <div><input type="checkbox" /><label htmlFor="">0-100.0</label></div>
                <div><input type="checkbox" /><label htmlFor="">100.0 - 300.00</label></div>
                <div><input type="checkbox" /><label htmlFor="">300.00 - 700.00</label></div>
               <div> <input type="checkbox" /><label htmlFor="">700.00 - 1000.00</label></div>
                <div><input type="checkbox" /><label htmlFor="">1000 - 3000.00</label></div>
            </div>
            <div className='single'></div>
            <span className='heading_side'>Color</span>
            <div id='color_side'>
                <div>
                    <div id='red'></div>
                    <p>Red</p>
                </div>
                <div>
                    <div id='orange'></div>
                    <p>Orange</p>
                </div>
                <div>
                    <div id='green'></div>
                    <p>Green</p>
                </div>
                <div>
                    <div id='blue'></div>
                    <p >Blue</p>
                </div>
            </div>
        </div>
        <div id='seeItem'>
        {filteredItems
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
    </div>
    </>
  )
}

export default SeeAll