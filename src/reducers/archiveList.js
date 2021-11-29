const archiveList = (state = [], action) => {
    switch(action.type){
        case 'ADD_TO_ARCHIVE':
            return [...state, action.payload];
        case 'REMOVE_FROM_ARCHIVE':
            let findIndexById = state.findIndex(product => product.id === action.payload)
            state.splice(findIndexById,1)
            return [...state];
        default:
            return state;
    }
}

export default archiveList;