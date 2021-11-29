const productList = (state = [], action) => {
    switch(action.type){
        case 'SUCCESS':
            return state = action.payload? action.payload : [];
        case 'ERROR':
            return state = action.payload? {name: action.payload.name,message: action.payload.message} : [];
        case 'ADD_TO_PRODUCT_LIST':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default productList;