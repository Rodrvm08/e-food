import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CardapioItem } from '../../../pages/home'

type CartItem = CardapioItem & { quantidade: number}

type CartState = {
    items: CartItem[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CardapioItem>) => {
            const prato = action.payload
            const itemExiste = state.items.find((item) => item.id === prato.id)
            if (itemExiste) {
                itemExiste.quantidade += 1
            } else {
                state.items.push({ ...prato, quantidade: 1 })
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            const itemId = action.payload
            const itemExiste = state.items.find((item) => item.id === itemId)

            if (itemExiste) {
                if (itemExiste.quantidade > 1) {
                    itemExiste.quantidade -= 1
                } else {
                    state.items = state.items.filter((item) => item.id !== itemId)
                }
            }
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, close, open, remove} = cartSlice.actions
export default cartSlice.reducer