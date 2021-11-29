import productList from "./productList";
import deliveryList from "./deliveryList"
import archiveList from "./archiveList";
import currencyValue from "./currencyValue";
import USDorILS from "./USDorILS";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    productList,
    deliveryList,
    archiveList,
    currencyValue,
    USDorILS
})

export default allReducers;