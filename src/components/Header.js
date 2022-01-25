import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../Firebase';
import mercado from '../images/mercado_logo.png'

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    let length=0
    if(localStorage.getItem("basket")!=null){
        const basket2 = JSON.parse(localStorage.getItem("basket"))
        length=basket2.length
    }
    const addCategory=(value)=>{
        dispatch({
            type:'SET_CATEGORY',
            item:value,
        })
    }
    const handleAuthentication = ()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo"
                    src={mercado}
                />  
            </Link>
        <div className="header__search">
            <div className="dropdown">
                <button className="dropbtn">Categories
                </button>
                <div className="dropdown-content">
                    <div className="Category__item" onClick={()=>addCategory("Fruits")}>Fruits</div>
                    <div className="Category__item" onClick={()=>addCategory("Vegetables")}>Vegetables</div>
                    <div className="Category__item" onClick={()=>addCategory("Others")}>Others</div>
                </div>

            </div>
            <input className="header__searchInput" type="text"/>
            <SearchIcon
            className="header__searchIcon" />
        </div>

        <div className="header__nav">
            <Link to={!user && '/login'}>
            <div  onClick={handleAuthentication} className='header__option'>
                <span className='header__optionLineOne'>Hello {user?user.email:'Guest'}</span>
                <span className='header__optionLineTwo'>{user ?'Sign Out':'Sign In'}</span>
            </div>
            </Link>
            <Link to='/orders'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>  
            </div>
            </Link>
            <div className='header__option'>
            <span className='header__optionLineOne'>About</span>
            <span className='header__optionLineTwo'>Us</span>
                
            </div>
        </div>
        <Link to="/checkout">
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">{length}</span>
            </div>
        </Link>
        
        </div>
    )
}

export default Header
