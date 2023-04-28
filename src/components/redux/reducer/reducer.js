const INIT_STATE = {
    carts:[]
}

export const cartreducer = (state=INIT_STATE,action) =>{
    switch(action.type){
     
        case "ADD_CART":
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                const updatedCart = [...state.carts];
                updatedCart[itemIndex] = {
                    ...updatedCart[itemIndex],
                    quantity: updatedCart[itemIndex].quantity + 1
                };
                return {
                    ...state,
                    carts: updatedCart
                };
            } else {
                const temp = { ...action.payload, quantity: 1 };
                return {
                    ...state,
                    carts: [...state.carts, temp]
                };
            }
        

            case "RMV_CART":
                const itemsIndex = state.carts.findIndex((item) => item.id === action.payload);
                if (itemsIndex >= 0) {
                    const updatedCart = [...state.carts];
                    if (updatedCart[itemsIndex].quantity === 1) {
                        // If there's only one item left, remove the whole item
                        updatedCart.splice(itemsIndex, 1);
                    } else {
                        // Otherwise, decrement the quantity of the item
                        updatedCart[itemsIndex] = {
                            ...updatedCart[itemsIndex],
                            quantity: updatedCart[itemsIndex].quantity - 1
                        };
                    }
                    return {
                        ...state,
                        carts: updatedCart
                    };
                } else {
                    return state;
                }
            
        
        default:
            return state;
    }
};
