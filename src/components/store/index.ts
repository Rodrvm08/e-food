import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducer/carrinho'
import api from "../services/api";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;