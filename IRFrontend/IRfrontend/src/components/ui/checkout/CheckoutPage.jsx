import React, { useState } from 'react';
import './CheckoutPage.css';
import OrderItem from './OrderItem';
import useCartData from '../../../hooks/useCartData';
import api from '../../logic/api';


export default function CheckoutPage() {

    const {cartitems, setCartItems, cartTotal, setCartTotal, total, delivery} = useCartData();


    

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [fio, setFio] = useState('');
    const [index, setIndex] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [comment, setComment] = useState('');

 const handleOrder = async (e) => {
        e.preventDefault();

        const info = `
            Email: ${email}
            Телефон: ${phone}
            ФИО: ${fio}
            Индекс: ${index}
            Страна: ${country}
            Город: ${city}
            Адрес: ${address}
            Комментарий: ${comment}
        `;

        // try {
        //     const res = await api.post('/create_order/', {
        //         cart_code: localStorage.getItem('cart_code'),
        //         info: info
        //     });
        //                 // Можно очистить корзину, показать сообщение, редирект и т.д.
        // } catch (err) {
        //     alert('Ошибка оформления заказа');
        // }

 }


  return (
    <div className='order-main'>
        
    <div className="order-left">
        <div className="order-left-left"><p className="order-left-left-p">* Оформление заказа</p></div>
        <div className="order-right-right">
            <form action="" className='order-form' onSubmit={handleOrder}>
                    <div className='cont-info' style={{width: 500}}>
                        <label htmlFor="" className="order-main-label">Контактная информация</label>

                        <div className='row'>
                        <label htmlFor="" className='mini-label'>E-mail <span className='spanst'>*</span>
                        <input type="text" 
                        className='order-inputs order-inputs-medium'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                        </label>
                        
                        <label htmlFor="" className='mini-label'>Номер телефона <span className='spanst'>*</span>
                        <input type="text" 
                        className='order-inputs order-inputs-medium'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        />
                        </label>
                        
                        </div>
                        <label htmlFor="" className='mini-label'>ФИО <span className='spanst'>*</span></label>
                        <input type="text" 
                        className='order-inputs order-inputs-large '
                        value={fio}
                        onChange={e => setFio(e.target.value)}
                        />
 
                    </div>
                    <div className='adrs-del' style={{width: 500}}>
                        <label htmlFor="" className="order-main-label">Адрес доставки</label>

                        <div className='row'>
                        <label htmlFor="" className='mini-label'>Индекс <span className='spanst'>*</span>
                        <input type="text" 
                        className='order-inputs order-inputs-small'
                        value={index}
                        onChange={e => setIndex(e.target.value)}
                        />
                        </label>
                        
                        <label htmlFor="" className='mini-label'>Страна <span className='spanst'>*</span>
                        <input type="text" 
                        className='order-inputs order-inputs-small'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        />
                        </label>

                        <label htmlFor="" className='mini-label'>Город <span className='spanst'>*</span>
                        <input type="text" 
                        className='order-inputs order-inputs-small'
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        </label>
                        
                        </div>
                        <label htmlFor="" className='mini-label'>Адрес <span className='spanst'>*</span></label>
                        <input type="text" 
                        className='order-inputs order-inputs-large '/>
                        <label htmlFor="" className='mini-label'>Комментарий к заказу</label>
                        <input type="text" 
                        className='order-inputs order-inputs-large '
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        />

                    </div>
                    <div className='pay-info' style={{width: 500}}>
                        <label htmlFor="" className="order-main-label">Плажетная информация</label>

                        <label htmlFor="" className='mini-label'>Номер карты <span className='spanst'>*</span></label>
                        <input type="text" className='order-inputs order-inputs-large'/>
                        <div className='row'>
                        <label htmlFor="" className='mini-label'>Срок действия <span className='spanst'>*</span>
                        <input type="text" className='order-inputs order-inputs-medium'/>
                        </label>
                        
                        <label htmlFor="" className='mini-label'>CVC-код <span className='spanst'>*</span>
                        <input type="text" className='order-inputs order-inputs-medium'/>
                        </label>
                        
                        </div>
                    </div>

                     
            </form>
        </div>

    </div>

<div className="order-right">
        <div className='container'>
            
            { cartitems.map((cartitem) => <OrderItem key={cartitem.id} cartitem={cartitem} />) }

        </div>
        <div className="subtotal-order">
            <div className="subtotal-order-p"><p className='subtotal-order-p-sum'>Товаров на сумму:</p><p className='subtotal-order-p-price'>{cartTotal} ₽</p></div>
            <div className="subtotal-order-p"><p className='subtotal-order-p-delivery'>Доставка:</p><p className='subtotal-order-p-price'>{delivery} ₽</p></div>
            <div className="subtotal-order-p"><p className='subtotal-order-p-total'>Итого:</p><p className='subtotal-order-p-price subtotal-order-p-price-total'>{total} ₽</p></div>
           
           
           <button className='order-btn-cart-pay' type='button' onClick={handleOrder}>Оформить заказ</button>
          </div>
</div>
    </div>
  )
}
