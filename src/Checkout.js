import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from './Subtotal'
const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
    <div className="checkout__left">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2 className="checkout__title">Your Shopping Basket is empty</h2>
          <p>
            You have no item in your basket.To buy one or more item, click "Add
            to baket" next to the item
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket </h2>
          {/* list of all the checkout product  */}
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
    {
        basket.length>0 && (
            <div className="checkout__right">
                <Subtotal/>
               
            </div>
        )
    }
    </div>
  );
};

export default Checkout;
