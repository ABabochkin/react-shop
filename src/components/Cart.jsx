import React from 'react'

export default function Cart (props) {
    const {quanity = 0, handleBasketShow = Function.prototype} = props;
    return (
        <div className='cart blue' onClick={handleBasketShow} >
            <i className='material-icons trash'>local_grocery_store</i>
            {quanity ? <span className='cart-quanity'>{quanity}</span> : null }
        </div>
    )
}
