import { useState, useEffect } from "react";
import api from "../components/logic/api";

function useCartData(){

    const cart_code = localStorage.getItem("cart_code"); 
    const [cartitems, setCartItems] =useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const delivery = 500;
    const total = cartTotal + delivery;
  
  
    useEffect(function(){
      api.get(`get_cart?cart_code=${cart_code}`)
      .then(res =>{
        setCartItems(res.data.items)
        setCartTotal(res.data.sum_total)
      })
      .catch(err => {
        console.log(err.message)
      })
    }, [cart_code])

    return {cartitems, setCartItems, cartTotal, setCartTotal, total, delivery}
}

export default useCartData;