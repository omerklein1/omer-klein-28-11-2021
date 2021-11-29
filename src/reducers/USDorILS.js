const USDorILS = (state = 'USD', action) => {
    switch(action.type){
        case 'SWITCH_CURRENCY':
            console.log(state)
            return state === 'USD' ? 'ILS' : 'USD'; 
        default:
            return state;
    }
}

export default USDorILS;