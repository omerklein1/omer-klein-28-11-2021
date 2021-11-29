import { useState } from 'react';
import ItemList from './itemList';
import AddItem from './addItem';
import './items.css';

function Items() {
    const [ isArchiveList, setIsArchiveList ] = useState(false);
    return(
        <>
            <div className="menu">
                <div>
                    <p className={isArchiveList? "" : "selected"} onClick={()=>setIsArchiveList(false)}>Delivery</p>
                    <p className={isArchiveList? "selected" : ""} onClick={()=>setIsArchiveList(true)}>Archive</p>
                </div>
            </div>
            <AddItem />
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Item Name</th>
                        <th>Store</th>
                        <th>Price</th>
                        <th>Delivery Estimate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <ItemList isArchiveList={isArchiveList}/>
                </tbody>
            </table>
        </>
    )
}

export default Items;