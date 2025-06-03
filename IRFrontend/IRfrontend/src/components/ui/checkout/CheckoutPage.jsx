import React from 'react';
import './CheckoutPage.css';
import OrderItem from './OrderItem';

export default function CheckoutPage() {
  return (
    <div className='order-main'>
        
    <div className="order-left">
        <div className="order-left-left"><p className="order-left-left-p">* Оформление заказа</p></div>
        <div className="order-right-right">
            <form action="" className='order-form'>
                    <div className='cont-info' style={{width: 500}}>
                        <label htmlFor="" className="order-main-label">Контактная информация</label>


                        <div className='row'>
                        <label htmlFor="" className='mini-label'>E-mail <span className='spanst'>*</span>
                        <input type="text" className='order-inputs order-inputs-medium'/>
                        </label>
                        
                        <label htmlFor="" className='mini-label'>Номер телефона <span className='spanst'>*</span>
                        <input type="text" className='order-inputs order-inputs-medium'/>
                        </label>
                        
                        </div>
                        <label htmlFor="" className='mini-label'>ФИО <span className='spanst'>*</span></label>
                        <input type="text" className='order-inputs order-inputs-large '/>

                        
                        
                    </div>
                    <div className='adrs-del' style={{width: 500}}>
                        <label htmlFor="" className="order-main-label">Адрес доставки</label>

                        <div className='row'>
                        <label htmlFor="" className='mini-label'>Индекс <span className='spanst'>*</span>
                        <input type="text" className='order-inputs order-inputs-small'/>
                        </label>
                        
                        <label htmlFor="" className='mini-label'>Страна <span className='spanst'>*</span>
                        <input type="text" className='order-inputs order-inputs-small'/>
                        </label>

                        <label htmlFor="" className='mini-label'>Город <span className='spanst'>*</span>
                        <input type="text" className='order-inputs order-inputs-small'/>
                        </label>
                        
                        </div>
                        <label htmlFor="" className='mini-label'>Адрес <span className='spanst'>*</span></label>
                        <input type="text" className='order-inputs order-inputs-large '/>

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
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </div>
        <div className="subtotal-order">
            <div className="subtotal-order-p"><p className='subtotal-order-p-sum'>Товаров на сумму:</p><p className='subtotal-order-p-price'>1000 ₽</p></div>
            <div className="subtotal-order-p"><p className='subtotal-order-p-delivery'>Доставка:</p><p className='subtotal-order-p-price'>500 ₽</p></div>
            <div className="subtotal-order-p"><p className='subtotal-order-p-total'>Итого:</p><p className='subtotal-order-p-price subtotal-order-p-price-total'>1500 ₽</p></div>
            <button className='order-btn-cart-pay'>Оформить заказ</button>
          </div>
</div>
    </div>
  )
}
