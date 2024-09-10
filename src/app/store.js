import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "../features/productSlice"
import cartReducer from "../features/cartSlice"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: persistedCartReducer,
  },
})

export default store
