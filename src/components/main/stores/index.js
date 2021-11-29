import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import './stores.css';

function Stores() {

    const [ storesList , setStoresList ] = useState([])
    const USDorILS = useSelector(state => state.USDorILS);
    const currencyValue = useSelector(state => state.currencyValue);
    const deliveryList = useSelector(state => state.deliveryList);
    const archiveList = useSelector(state => state.archiveList);

    
    useEffect(()=>{
        const makeStoresList = () => {
            const productList = [...deliveryList, ...archiveList];
            let temp = [];
            productList.forEach( (product) => {
                let storeIndex = temp.findIndex(store=>store.name === product.store)
                if(storeIndex >= 0){                
                    temp[storeIndex].qty++
                    temp[storeIndex].price += product.price
                } else {
                    temp.push({
                        name: product.store,
                        qty: 1,
                        price: product.price
                    })
                }
            })
            setStoresList([...temp]);
        }
        makeStoresList()
    },[deliveryList,archiveList])

    return(
        <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Store Name</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {console.log(storesList)}
            {storesList ? storesList.map((store,index) => 
                <tr key={index}>
                    <td>{index + 1  }</td>
                    <td>{store.name}</td>
                    <td>{store.qty}</td>
                    <td>{(store.price * currencyValue[USDorILS]).toFixed(2)} {USDorILS === 'USD' ? '$' : '₪'}</td>
                </tr>
            ) : ""}
        </tbody>
    </table>

    )
}

export default Stores;