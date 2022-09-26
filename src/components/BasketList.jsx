import React from 'react'
import BasketItem from './BasketItem'

export default function BasketList(props) {
    const { order = [],
            handleBasketShow = Function.prototype, 
            removeItemBasket = Function.prototype, 
            inQuanity = Function.prototype,
            deQuanity = Function.prototype,
            clearBasket = Function.prototype
                    } = props
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quanity
    },0 )
return (
    <ul className='collection basket-list'>
        <li className="collection-item active blue lighten-2">Корзина</li>
            {
                order.length ? 
                    order.map(item =>  (
                        <BasketItem key={item.id} {...item} removeItemBasket={removeItemBasket} inQuanity={inQuanity} deQuanity={deQuanity} />
                    )) :  <li className="collection-item">Корзина пуста</li>
            }
        <li className="collection-item active blue lighten-2 contDel">Общая стоимость: {totalPrice} руб. <span>  <button className='btn-small light-green darken-4 right btnDeleteAll' onClick={clearBasket} >Удалить все </button> </span>
        </li>
        <li className="collection-item active blue lighten-2 downLine ">
            <button className='btn-small btnDone light-green darken-4' >Оформить заказ</button>
        </li>
        <i className="material-icons icons-close" onClick={handleBasketShow} >close</i>
    </ul>
)
}
