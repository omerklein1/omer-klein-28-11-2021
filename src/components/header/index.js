import { useDispatch } from 'react-redux'
import { switchCurrency } from '../../actions'
import './header.css';

export default function Header(props) {
    const dispatch = useDispatch();
    const { isStoreList, setIsStoreList } = props
    
    const handleSwitch = () => {
        dispatch(switchCurrency())
    }

    return <nav>
        <div className="purchase-btn">
            <p className={isStoreList? "" : "selected"} onClick={()=>setIsStoreList(false)}>Purchase by item</p>
            <p className={isStoreList? "selected" : ""} onClick={()=>setIsStoreList(true)}>Purchase by store</p>
        </div>
        <div className="currency">
            <span>Currency:  </span>
            <select onChange={handleSwitch}>
                <option>$</option>
                <option>₪</option>
            </select>
        </div>
     </nav>;
}

