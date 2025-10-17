import { useDispatch, useSelector } from "react-redux";
import { Overlay, CartContainer, SideBar, Prices, Title, CartItem, BotaoCart, Quantity } from "./style";

import type { RootReducer } from "../store";

import { close, remove } from "../store/reducer/carrinho";
import { formataPreco } from "../foodlist";

const Cart = () => {

    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, item) => {
            return (acumulador + item.preco * item.quantidade)
        }, 0)
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart}/>
            <SideBar>
                <ul>
                    {items.map((item) => (
                        <CartItem key={item.id}>
                            <img src={item.foto}/>
                            <div>
                                <Title>{item.nome}</Title>
                                <span>{formataPreco(item.preco)}</span>
                            </div>
                            <button 
                                type='button' 
                                onClick={() => dispatch(remove(item.id))}
                            />
                            {item.quantidade > 1 && <Quantity>{item.quantidade}x</Quantity>}
                        </CartItem>
                    ))}
                </ul>
                <Prices>
                    <p>Valor total:</p>
                    <p>{formataPreco(getTotalPrice())}</p>
                </Prices>
                <BotaoCart>Continuar com a entrega</BotaoCart>
            </SideBar>
        </CartContainer>
    )
}

export default Cart