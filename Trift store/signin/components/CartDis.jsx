import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import shirt from '../src/assets/shirt.png';
import delet_img from "../src/assets/delete.png"
import { Link } from 'react-router-dom';

function CartDis({ mainArr, setMainArr }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Filter cart items whenever mainArr changes
        const filteredCartItems = mainArr.filter(item => item.is_cart);
        setCartItems(filteredCartItems);
    }, [mainArr]);

    const totalItems = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
    const totalAmount = calculateTotalAmount(cartItems);

    function calculateTotalAmount(items) {
        return items.reduce((total, item) => total + (item.rate * (item.quantity || 1)), 0);
    }

    function increaseQuantity(id) {
        const updatedMainArr = mainArr.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: (item.quantity || 1) + 1
                };
            }
            return item;
        });
        setMainArr(updatedMainArr);
    }

    function decreaseQuantity(id) {
        const updatedMainArr = mainArr.map(item => {
            if (item.id === id && item.quantity && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
            return item;
        });
        setMainArr(updatedMainArr);
    }

    function removeItemFromCart(id) {
        const updatedMainArr = mainArr.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    is_cart: false,
                    quantity: 0 // Set quantity to 0 when removing from cart
                };
            }
            return item;
        });
        setMainArr(updatedMainArr);
    }

    return (
        <>
            <NavBar />
            <div>
                <span>Home</span>
                <span>&gt;</span>
                <span>Cart</span>
            </div>
            <div>
                <h1>Your Cart</h1>
                <div id='cart_items_all'>
                    {cartItems.map(item => (
                        <div id='cart_bar' key={item.id}>
                            <div id='items_details'>
                                <img id='cart_item_img' src={shirt} alt="" />
                                <div>
                                    <p>{item.shirt_name}</p>
                                    <p>{item.brand_name}</p>
                                </div>
                            </div>
                            <div className='lineup'></div>
                            <div id='rate_quan'>
                                <p>{item.rate}</p>
                                <div id='quan'>
                                    <p>{item.quantity || 1}</p>
                                </div>
                            </div>
                            <div id='buttons_divs'>
                                <button className='button_op' onClick={() => increaseQuantity(item.id)}>+</button>
                                <button className='button_op' onClick={() => decreaseQuantity(item.id)}>-</button>
                                <button className='button_del' onClick={() => removeItemFromCart(item.id)}><img src={delet_img} alt="" /></button>
                            </div>
                        </div>
                    ))}
                </div>
                <div id='buttons_collection'>
                <div className='green_button'>Total items: {totalItems}</div>
                <div className='green_button'>Total amount: {totalAmount}</div>
                <Link to={"/checkout"}><div id='checjout'>Checkout -&gt;</div></Link>
                </div>
            </div>
        </>
    );
}

export default CartDis;
