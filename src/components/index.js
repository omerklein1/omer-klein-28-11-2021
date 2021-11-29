import { useEffect, useState } from 'react'
import { getCurrencyValue, getProductList } from '../actions';
import { useDispatch, useSelector } from 'react-redux'
import Main from './main';
import Header from "./header";
import Popup from './popup';
import './components.css';


function Components() {
  const dispatch  = useDispatch();
  const [ isStoreList, setIsStoreList ] = useState(false);
  const [ openPopupProductListError, setOpenPopupProductListError ] = useState(true);
  const [ openPopupCurrencyValueError, setOpenPopupCurrencyValueError ] = useState(true);
  const productList = useSelector(state => state.productList)

  useEffect( () => {
      dispatch(getProductList());
      dispatch(getCurrencyValue());
        setInterval(() => {
      dispatch(getCurrencyValue());
    }, 1000 * 60 * 10);
    
  },[dispatch])
  
  return (<>
      <Header isStoreList={isStoreList} setIsStoreList={setIsStoreList}/>
      <Main isStoreList={isStoreList}/>
      { (openPopupProductListError && productList.name === 'Error') &&
      <Popup trigger={openPopupProductListError} setTrigger={setOpenPopupProductListError} title={productList.name} subTitle={productList.message}>
        <p>Can't get product list from fakestoreapi API</p>
      </Popup>}
      { (openPopupCurrencyValueError && productList.name === 'Error') &&
      <Popup trigger={openPopupCurrencyValueError} setTrigger={setOpenPopupCurrencyValueError} title={productList.name} subTitle={productList.message}>
        <p>Can't get product list from exchangeratesapi API</p>
      </Popup>}
      
    </> );
  }

export default Components;
