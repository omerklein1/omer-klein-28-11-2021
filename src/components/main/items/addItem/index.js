import { useState } from "react";
import Popup from "../../../popup";
import {useDispatch, useSelector} from 'react-redux';
import {addProductToList} from '../../../../actions';
import { useForm } from 'react-hook-form';
import './addItem.css';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ openPopup, setOpenPopup ] = useState(false);
    const [ selectName, setSelectName ] = useState();
    const deliveryList = useSelector(state => state.deliveryList);
    const productList = useSelector(state => state.productList);
    const USDorILS = useSelector(state => state.USDorILS);
    const currencyValue = useSelector(state => state.currencyValue);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        data.price = data.price / currencyValue[USDorILS];
        dispatch(addProductToList({id: `${deliveryList.length}`,...data}));
        setOpenPopup(false);
    }   

    const autocomplete = (e) => {
        const name = e.target.value
        const autocompleteList = document.querySelector(".autocomplete-list")
        const result = []
        if(name && productList){
            productList.forEach(product => {
                let productName = product.title ? product.title : product.name;
                productName.includes(name) && result.push(productName);
            });
            setSelectName(result);
            (selectName) && autocompleteList.classList.add("show")
        }
    }

    const changeName = (e) => {
        const name = e.target.textContent;
        const autocompleteList = document.querySelector(".autocomplete-list")
        const inputName = document.querySelector('input[name="name"]')

        inputName.value = name;
        inputName.focus();
        autocompleteList.classList.remove("show");
    }

    const closeAutocompleteList = () => {
        const autocompleteList = document.querySelector(".autocomplete-list")
        autocompleteList && autocompleteList.classList.remove("show");
    }

    return(
        <div className="add-item" onClick={()=>closeAutocompleteList()}>
            <button className="add-item-btn" onClick={()=>setOpenPopup(true)}> <p className="plus">+</p> Add Item</button>
            
            <Popup trigger={openPopup} setTrigger={setOpenPopup} title="Add Item">
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-data">
                        <div className="input autocomplete">
                            <input type="text"  placeholder="Item Name" {...register("name", {required: true, minLength: 3})} onChange={autocomplete} />
                            {selectName ? <div className="autocomplete-list">{selectName.slice(0,10).map((name,index) => <div key={index} onClick={changeName} className="product-list-name">{name}</div> )}</div> : ""}
                         <p className="error">{errors.name && "Product name is to short."}</p>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Store" {...register("store", {required: true, minLength: 3})}/>
                             <p className="error">{errors.store && "Store name is to short."}</p>
                        </div>
                        <div className="input">
                            <input type="number" placeholder="Price" {...register("price", {required: true})}/>
                             <p className="error">{errors.price && "Price is required."}</p>
                        </div>
                        <div className="input">
                            <input type="date" placeholder="Recieve Date Estimation" {...register("date", {required: true})}/>
                             <p className="error">{errors.date && "Recieve Date Estimation is required."}</p>
                        </div>
                    </div>
                    <div className="form-btn">
                        <button onClick={()=>setOpenPopup(false)}>Cancel</button>
                        <input type="submit" value="Add"/>
                    </div>
                </form>
            </Popup>
        </div>
    )
}

export default AddItem