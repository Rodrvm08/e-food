import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CardapioItem } from '../../../pages/home'

type CartItem = CardapioItem & { quantidade: number}

type CartState = {
    items: CartItem[]
    isOpen: boolean
    isOrder: boolean
    isPayment: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    isOrder: false,
    isPayment: false
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        openOrder: (state) => {
            state.isOrder = true
        },
        closeOrder: (state) => {
            state.isOrder = false
        },

        openPayment: (state) => {
            state.isPayment = true
        },
        closePayment: (state) => {
            state.isPayment = false
        },
        add: (state, action: PayloadAction<CardapioItem>) => {
            const geraId = state.items.length > 0 ? state.items[state.items.length - 1].id + 1 : 1 
            state.items.push({ ...action.payload, id: geraId, quantidade: 1 })
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        clear: (state) => {
            state.items = []
        }
    }
})

export const { add, close, open, remove, openOrder, closeOrder, openPayment, closePayment, clear} = cartSlice.actions
export default cartSlice.reducer