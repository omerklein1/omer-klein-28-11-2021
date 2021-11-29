import { useSelector,useDispatch } from 'react-redux'
import { addProductToArchive, reactiveProduct} from '../../../../actions'
import './itemList.css';

function ItemList(props) {
    const { isArchiveList } = props
    const deliveryList = useSelector(state => state.deliveryList);
    const archiveList = useSelector(state => state.archiveList);
    const currentList = isArchiveList? archiveList : deliveryList;
    const USDorILS = useSelector(state => state.USDorILS);
    const currencyValue = useSelector(state => state.currencyValue);
    const dispatch = useDispatch();
    
    return( currentList ? <>
                { currentList.map( (product, index) => product &&
                    <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.store}</td>
                        <td>{(product.price * currencyValue[USDorILS]).toFixed(2)} {USDorILS === 'USD' ? '$' : '₪'}</td>
                        <td>{product.date}</td>
                        { isArchiveList ?
                            <td className="td-list-btn"><button className="list-btn" onClick={()=>dispatch(reactiveProduct(product))}>Reactive</button></td>
                            : <td className="td-list-btn"><button className="list-btn" onClick={()=>dispatch(addProductToArchive(product))}>Move To Archive</button></td>
                        }
                    </tr>
                )}
            </> : ""
    )
}

export default ItemList;