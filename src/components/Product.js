import React from 'react';
import "./Product.css";
import { useStateValue } from '../StateProvider';

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () =>{
        //dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })
         if(localStorage.getItem("basket")==null){
            localStorage.setItem("basket", JSON.stringify([]))
         }
        
        let new_array=JSON.parse(localStorage.getItem("basket"))
        new_array.push({
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating,  
        })
        localStorage.removeItem("basket")
        localStorage.setItem("basket", JSON.stringify(new_array));
    }
    return (
        <div className="product">
            <div className="product__info">
                <p> {title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i)=>(
                    <img src="https://img.icons8.com/android/15/26e07f/filled-star.png" />
                ))}
                
            </div>
        </div>
        <img src={image}
            alt=""
        />
        <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
