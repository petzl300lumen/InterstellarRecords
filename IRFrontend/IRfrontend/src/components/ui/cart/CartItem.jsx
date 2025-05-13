import React, { useState } from 'react';
import imgaaa from '/image.png';
import deleteBtn from '/Deletebtn.svg';
import './CartItem.css';
import api, { BASE_URL } from '../../logic/api';


export default function CartItem({item, setCartItems, cartitems, setCartTotal}) {

  const [quantity, setQuantity] = useState(item.quantity)

  const itemData = {quantity:quantity, item_id:item.id}
  const itemID = {item_id: item.id}

  function deleteCartItem(){
    const confirmDelete = window.confirm("Удалить данный товар из корзины?")
    if(confirmDelete){

      api.post("delete_cartitem/", itemID)
      .then(res => {
        console.log(res.data);

        // Обновляем состояние корзины на основе данных с сервера
        api.get(`get_cart?cart_code=${localStorage.getItem("cart_code")}`)
          .then(cartRes => {
            setCartItems(cartRes.data.items || []); // Обновляем товары в корзине
            setCartTotal(cartRes.data.sum_total || 0); // Обновляем итоговую сумму
          })
          .catch(err => {
            console.error("Ошибка при обновлении корзины:", err.message);
          });
      })
      .catch(err => {
        console.error("Ошибка при удалении товара:", err.message);
      });



      // api.post("delete_cartitem/", itemID)
      // .then(res => {
      //   console.log(res.data);
      //   const updatedCartItems = cartitems.filter(cartitem => cartitem.id !== item.id);
      //   setCartItems(updatedCartItems);
      //   const newTotal = updatedCartItems.reduce((acc, curr) => acc + (curr.total || 0), 0);
      //   setCartTotal(newTotal);  
      // //   setCartItems(cartitems.filter(cartitem => cartitem.id != item.id))
      // //   setCartTotal(cartitems.filter((cartitem) => cartitem.id != item.id)
      // // .reduce((acc, curr) => acc + curr.total, 0))
      // })
      // .catch(err =>{
      //   console.log(err.message);
      // })
    }
  }

  function updateCartItem(){
    api.patch("upadate_quantity/", itemData)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  return (
    
    <div className='cartItem'>
        <img src={`${BASE_URL}${item.product.image}`} alt="" className='imageInCart' />
        <div className="textinfocart">
            <p className='p-infocart p-infocart-title'>{item.product.title} ({item.product.category})</p>
            <p className='p-infocart p-infocart-price'>{item.product.price}  ₽</p>
        </div>
        <div className='delete-update'>
        
        <input type="number" min="1" max="100" value={quantity} onChange={(e) => setQuantity(e.target.value)} onClick={updateCartItem} className='inputQuantity'  />
          {/* <button onClick={updateCartItem}>update</button> */}
        <button onClick={deleteCartItem} className='deletebtn'><img src={deleteBtn} alt="delete"  /></button>
        </div>
    </div>
  )
}
