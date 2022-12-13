import { createStore, combineReducers } from "redux";
import ProductReducer from "../reducer/ProductReducer";
import CartReducer from "../reducer/CartReducer";
import UserReducer from "../reducer/UserReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: "ProductReducer"
}
const root = combineReducers({
    ProductReducer,
    CartReducer,
    UserReducer
});
const persistedReducer = persistReducer(persistConfig, root)

const store = createStore(persistedReducer);
export const persistor = persistStore(store)
export default store