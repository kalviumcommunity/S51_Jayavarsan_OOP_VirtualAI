import React from "react";
import location from "../src/assets/addresss.png";
import dotimg from "../src/assets/dot.png";
import { GooglePayButton } from "react-social-login-buttons";
// import GooglePayComponent from './GooglePayComponent';

function Checkout() {
  const product_price = 0;
  const final_price = product_price + 30;
  return (
    <div>
      <div className="checkout_div">
        <div className="checkout_topcontainer">
          <div className="checkout_ship_info">
            <img src={location}></img>
            <span>Shipping Info</span>
          </div>
          <form className="checkout_form">
            <label>Door No./Flat No.</label>
            <input className="input" type="text" placeholder=" eg:43G" />
            <label>Address.</label>
            <input className="input" type="text" placeholder=" eg:43G" />
            <label>City.</label>
            <input className="input" type="text" placeholder=" eg:43G" />
            <label>District</label>
            <input className="input" type="text" placeholder=" eg:43G" />
            <label>Zip Code</label>
            <input className="input" type="text" placeholder=" eg:43G" />
            <div className="checkout_checkbox">
              <input id="check_box" type="checkbox" />
              <div>Save this to my Address book</div>
            </div>
            <input
              className="checkout_submit_button"
              value={"Save"}
              type="submit"
            ></input>
          </form>
        </div>
        <div className="checkout_payment">
          <div className="checkout_payment_info">
            <img src={dotimg}></img>
            <span>Total Amount</span>
          </div>
          <div className="price_details">
            <div className="checout_payment_price_div">
              <div className="checout_payment_name">Total product price</div>
              <div>₹ {product_price}</div>
            </div>
            <div className="checout_payment_price_div">
              <div className="checout_payment_name">Platform fee</div>
              <div>₹ {30}</div>
            </div>
            <div className="checout_payment_price_div">
              <div className="checout_payment_name">Total Payable amount</div>
              <div>₹ {final_price}</div>
            </div>
          </div>
          <hr />
          <div className="checkout_price_details">
            <div className="text_detail">Payable Amount:</div>
            <dib className="price">₹ {final_price}</dib>
          </div>
          <div id="gpay_but"></div>
          <div className="Gpay_button">
            {/* <GooglePayButton
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: "CARD",
                    parameters: {
                      allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                      allowedCardNetworks: ["MASTERCARD", "VISA"],
                    },
                    tokenizationSpecification: {
                      type: "PAYMENT_GATEWAY",
                      parameters: {
                        gateway: "example",
                        gatewayMerchantId: "exampleGatewayMerchantId",
                      },
                    },
                  },
                ],

                merchantInfo: {
                  merchantId: "12345678901234567890",
                  merchantName: "Demo Merchant",
                },
                transactionInfo: {
                  totalPriceStatus: "FINAL",
                  totalPriceLabel: "Total",
                  totalPrice: {final_price},
                  currencyCode: "INR",
                  countryCode: "IN",
                },
                shippingAddressRequired: false,
                callbackIntents: ["PAYMENT_AUTHORIZATION"],
              }}
              onLoadPaymentData={(paymentRequest) => {
                console.log(paymentRequest);
              }}
              onPaymentAuthorized={(paymentData) => {
                console.log("paymentData " + paymentData);
                return { transactionState: "SUCCESS" };
              }}
              existingPaymentMethodRequired="false"
              buttonColor="black"
              buttonType="buy"
            ></GooglePayButton> */}
            {/* <GooglePayComponent totalPrice={final_price} /> */}
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
          <span>Privacy Policy</span>
          <span>Terms & Condition</span>
          <span>Refund Policy</span>
        </div>
        <div>Pure Threads © 2024</div>
      </div>
    </div>
  );
}

export default Checkout;
