import React, { useState } from 'react'
import items from '../items'
import ItemsDis from './ItemsDis'
import image_shirt from '../src/assets/shirt.png' 
import { Link } from 'react-router-dom'

function DealsWomen({mainArr , setMainArr}) {

    const toggle_cart = (itemId) => {
        let temp = mainArr.map(item => {
            if (item.id === itemId) {
                return { ...item, is_cart: !item.is_cart };
            }
            return item;
        });
        setMainArr(temp);
    }

    return (
        <>
            <div id='deals_header'>
                <h1>Top Products</h1>
                <a id='seeAll' href="">See All</a>
            </div>
            <div id='deals_itemsW'>
                {mainArr
                    .filter(item => item.gender === "women")
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
        </>
    );
}
export default DealsWomen