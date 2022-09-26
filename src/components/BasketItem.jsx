import React from 'react'

export default function BasketItem(props) {
    const {
        id,
        name,
        price,
        quanity,
        removeItemBasket = Function.prototype,
        inQuanity = Function.prototype,
        deQuanity = Function.prototype
    } = props;

    return (
        <li className="collection-item" id={id} >
            {name} <i className='material-icons basket-quanity btnCount ' onClick={() => inQuanity(id) } >add</i> x{quanity} {' '} <i className='material-icons basket-quanity btnCount' onClick={() => deQuanity(id) } >remove</i>  = {price * quanity} руб.
            <span className="secondary-content" onClick={() => removeItemBasket(id)} >
                <i className="material-icons delete-icon">delete_forever</i>
            </span>
        </li>
    )
}
