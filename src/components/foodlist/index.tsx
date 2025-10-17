import { List } from "./style";
import { useState } from "react";
import { useDispatch } from "react-redux";

import close from '../../assets/close.svg'

import type { CardapioItem } from "../../pages/home";
import { ModalContent,  Modal, ModalButton, Description, BotaoFechar, ImageModal, Title } from "./style";

import Food from "../food";
import { add, open  } from "../store/reducer/carrinho";

type Props = {
    foods: CardapioItem[]
}

export const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(preco)
}

const FoodList = ({ foods } : Props) => {
    const [pratoSelecionado, setPratoSelecionado] = useState<CardapioItem | null>(null)
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        if (pratoSelecionado) {
            dispatch(add(pratoSelecionado))
            dispatch(open())
            setPratoSelecionado(null)
        }
    }

    return (
        <div className="container">
            <List>
                {foods.map(item => (
                    <Food 
                        key={item.id}
                        onClick={() => setPratoSelecionado(item)}
                        foto={item.foto} 
                        nome={`${item.nome}`} 
                        descricao={`${item.descricao}`} 
                        preco={item.preco}
                        porcao={`${item.porcao}`}                
                    />
                ))}
            </List>

            <Modal className={pratoSelecionado ? 'visivel' : ''}>
                {pratoSelecionado && (
                <ModalContent>
                    <BotaoFechar 
                        src={close} 
                        onClick={() => setPratoSelecionado(null)}
                />
                    <ImageModal src={pratoSelecionado.foto} alt={pratoSelecionado.nome} />
                    <div>
                        <Title>{pratoSelecionado.nome}</Title>
                        <Description>
                            {pratoSelecionado.descricao}
                        <span>
                            {pratoSelecionado.porcao}
                        </span>
                        </Description>
                        <ModalButton onClick={handleAddToCart}>
                            Adicionar ao carrinho - {formataPreco(pratoSelecionado.preco)}
                        </ModalButton>
                    </div>
                </ModalContent>         
                )}
                <div className='overlay'></div>
            </Modal>
        </div>
    )
}


export default FoodList