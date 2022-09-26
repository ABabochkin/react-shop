import React, { useEffect, useState } from 'react'
import Preloader from '../components/Preloader';
import GoodsList from '../components/GoodsList';
//import {API_KEY, API_URL} from '../config' 
import Cart from '../components/Cart';
import BasketList from '../components/BasketList';
import Alert from '../components/Alert';

export default function Main() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setALertName] = useState('');

    const inQuanity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuanity = el.quanity + 1;
                return {
                    ...el,
                    quanity: newQuanity,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    }

    const deQuanity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuanity = el.quanity - 1;
                return {
                    ...el,
                    quanity: newQuanity >= 0 ? newQuanity : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    }

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quanity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quanity: orderItem.quanity + 1
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder)
        }
        setALertName(item.name)
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    const removeItemBasket = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId);
        setOrder(newOrder)
    }

    const closeAlert = () => {
        setALertName('')
    }

    const clearBasket = (item) => {
        setOrder([])
    }

    useEffect( function getGoods() {
        fetch('https://fortniteapi.io/v1/shop?lang=ru', {
            headers: {
                Authorization: 'f7bca69d-9e0bc728-500cdbc7-303795a7'
            },
        })
        .then(response => response.json())
        .then(data => {
            data.featured && setGoods(data.featured)
            setLoading(false)
        });
    }, []);

return (
    <main className='content container' >
        <Cart quanity={order.length} handleBasketShow={handleBasketShow} />
        { loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} /> }
        { isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeItemBasket={removeItemBasket} inQuanity={inQuanity} deQuanity={deQuanity} clearBasket={clearBasket} />}
        { alertName && <Alert name={alertName} closeAlert={closeAlert} /> }
    </main>
)}
