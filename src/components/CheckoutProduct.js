import React, {forwardRef} from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';



const CheckoutProduct=forwardRef(({id, image, title, price, rating, hideButton}, ref)=> {
    const [{basket}, dispatch]= useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id
        })
        const newBasket = JSON.parse(localStorage.getItem("basket"));
        console.log("basket has", newBasket)
        const index = newBasket.findIndex((item)=>item.id===id);
        console.log("index is", index)
        let newBasket2 = [...newBasket];
        console.log("new Basket has", newBasket2)
        if(index>=0){
            newBasket2.splice(index, 1);
        }
        console.log("new Basket spliced has", newBasket2)

        localStorage.removeItem("basket")
        localStorage.setItem("basket",  JSON.stringify(newBasket2));  
    }
    return (
        <div ref={ref} className='checkoutProduct'>
            <img className='checkoutProduct__image'  src={image} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i)=>(
                            <img src="https://img.icons8.com/android/15/26e07f/filled-star.png"/>
                        ))}
                </div>
                {!hideButton &&(
                    <button onClick={removeFromBasket}>Remove From Basket</button>
                )}
                
            </div>    
        </div>
    )
})

export default CheckoutProduct
