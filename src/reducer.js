export const initialState ={
    basket: [],
    category:"Fruits",
    address: {}
};

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action)=>{
    console.log(state);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            let newBasket = [...state.basket];
            if(index>=0){
                newBasket.splice(index, 1 );
            }else{
                console.warn(`Cant remove product (id: ${action.id}) as its not in
                basket!`)
            }
            return{
                ...state,
                basket: newBasket

            }
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case "EMPTY_BASKET":
            return{
                ...state,
                basket: []
            }
        case "SET_CATEGORY":
            return{
                ...state,
                category:action.item
            }
        case "SET_ADDRESS":
            return{
                ...state,
                address:action.item
            }
        default:
            return state;
    }
}


export default reducer;