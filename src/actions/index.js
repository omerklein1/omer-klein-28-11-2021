 import axios from 'axios';
 import '../reducers';
 
 export const getProductList = () => dispatch => {
        axios.get("https://fakestoreapi.com/products")
        .then(res => res.data)
        .then(data => dispatch({type: 'SUCCESS', payload: data}))
        .catch(error => dispatch({type: 'ERROR', payload: error}))
 }

 export const getCurrencyValue = () => dispatch => {
    axios.get("http://api.exchangeratesapi.io/v1/latest?access_key=1ae0f5be893069b1d305de2159f89611&format=1")
    .then(res => res.data)
    .then(data => dispatch({
        type: 'UPDATE_CURRENCY',
         payload: {USD: data.rates.USD, ILS: data.rates.ILS}
    }))
    .catch(error => dispatch({type: 'UPDATE_ERROR', payload: error}))

}

 export const addProductToProductList = (product) => {
    return{
        type: 'ADD_TO_PRODUCT_LIST',
        payload: product

    }
 }

 export const addProductToDeliveryList = (product) => {
    return{
        type: 'ADD_TO_DELIVERY',
        payload: product

    }
 }

 export const removeProductFromDeliveryList = (productId) => {
    return{
        type: 'REMOVE_FROM_DELIVERY',
        payload: productId
    }
 }

 export const addProductToArchiveList = (product) => {
    return{
        type: 'ADD_TO_ARCHIVE',
        payload: product

    }
 }

 export const removeProductFromArchiveList = (productId) => {
    return{
        type: 'REMOVE_FROM_ARCHIVE',
        payload: productId
    }
 }

 export const addProductToList = (product) => dispatch => {
     dispatch(addProductToDeliveryList(product))
     dispatch(addProductToProductList(product))
 }

 export const addProductToArchive = (product) => dispatch => {
     dispatch(removeProductFromDeliveryList(product.id))
    dispatch(addProductToArchiveList(product))
}

export const reactiveProduct = (product) => dispatch => {
    dispatch(removeProductFromArchiveList(product.id))
   dispatch(addProductToDeliveryList(product))
}

 export const switchCurrency = () => {
    return{
        type: 'SWITCH_CURRENCY'
    }
 }


