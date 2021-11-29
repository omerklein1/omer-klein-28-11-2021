const currencyValue = (state = [], action) => {
    switch(action.type){
        case 'UPDATE_CURRENCY':
            return state = action.payload ? action.payload : [];
        case 'UPDATE_ERROR':
            return state = action.payload? {name: action.payload.name,message: action.payload.message} : [];
        default:
            return state;
    }
}

export default currencyValue;