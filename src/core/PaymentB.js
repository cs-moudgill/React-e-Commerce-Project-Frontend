import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { emptyCart, loadCart } from "./helper/CartHelper";
import { createOrder } from "./helper/OrderHelper";
import { getmeToken, processPayment } from "./helper/Paymentbhelper";
import DropIn from "braintree-web-drop-in-react";
import { isAuthenticated } from "../auth/helper";

const Paymentb = ({ products, setReload, reload = undefined }) => {
  const [info, setInfo] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
    instance: {}
  });
  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    getmeToken(userId, token).then((info) => {
      console.log(info);
      if (info.error) {
        setInfo({ ...info, error: info.error });
      } else {
        const clientToken = info.clientToken;
        setInfo({ clientToken });
      }
    });
  };

  const showDropIn=()=>{
      return (
          <div>
          {info.clientToken !== null && products.length > 0 ? (
            <div>
                <DropIn 
                    options={{authorization:info.clientToken}}
                    onInstance={instance=>(info.instance=instance)}
                />
                <button className='btn btn-block btn-success rounded' onClick={()=>{}}>Buy</button>
            </div>
          ) : (
            <h3>Please Login or add something to cart</h3>
          )}
           </div>
      )
  }

  useEffect(() => {
    getToken(userId, token);
  }, []);

  return (
    <div>
      <h1>hello</h1>
      {showDropIn()}
    </div>
  );
};

export default Paymentb;
