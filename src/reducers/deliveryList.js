const deliveryList = (state = [], action) => {
    switch(action.type){
        case 'ADD_TO_DELIVERY':
            return [...state, action.payload];
        case 'REMOVE_FROM_DELIVERY':
            let findIndexById = state.findIndex(product => product.id === action.payload)
            state.splice(findIndexById,1)
            return [...state];
        default:
            return state;
    }
}

export default deliveryList;