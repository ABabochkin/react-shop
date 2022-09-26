import React from 'react'

export default function GoodsItem(props) {

    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype
    } = props;


    return (
        <div className='card'>
            <div className="card-image">
                {
                    full_background.height > 300 ? <img src={`https://via.placeholder.com/300x150?text=${name}`} alt='name'></img>  : 
                    <img src={full_background} alt={name} /> 
                }
            </div>
            <div className="card-content">
            <span className="card-title"> {name} </span>
                <p> {description} </p>
            </div>
            <div className="card-action">
                <button 
                    className='btn'
                    onClick={() => 
                        addToBasket({
                            id,
                            name,
                            price
                        })}
                >Купить 
                </button>
                <span className='right'style={{fontSize: '20px'}} > {price} руб.</span>
            </div>
        </div>
    )
}
