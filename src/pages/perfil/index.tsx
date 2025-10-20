import FoodList from "../../components/foodlist";
import Footer from "../../components/footer";
import HeaderBanner from "../../components/headerbanner";
import Cart from "../../components/carrinho";

import { useEffect, useState } from "react";
import type { CardapioItem, Restaurants } from "../home";
import { useParams } from "react-router-dom";

const Perfil = () => {
    const [restaurante, setRestaurante] = useState<Restaurants | null>(null)
    const { id } = useParams()

    useEffect(() => {
        if (!id) return;
        
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error('Erro ao carregar restaurantes');
                }
                return resposta.json();
            })
            .then((restaurantes: Restaurants[]) => {

                const restauranteEncontrado = restaurantes.find(rest => rest.id === Number(id));
                
                if (restauranteEncontrado) {

                    const cardapioCorrigido: CardapioItem[] = restauranteEncontrado.cardapio.map((item) => ({
                        ...item,
                        preco: Number(item.preco)
                    }))
                    
                    setRestaurante({
                        ...restauranteEncontrado,
                        cardapio: cardapioCorrigido
                    })
                } else {
                    throw new Error('Restaurante não encontrado');
                }
            })
            .catch(error => {
                console.error('Erro ao carregar restaurante:', error);
            })
    }, [id])


    if (!restaurante) {
        return <div>Carregando...</div>;
    }

    return(
        <>
        {restaurante && (
            <HeaderBanner 
                tipo={restaurante.tipo!}
                titulo={restaurante.titulo!}
                capa={restaurante.capa!}
            />
        )}
            <FoodList foods={restaurante?.cardapio ?? []} />
            <Cart />
            <Footer />
        </>
    )
}

export default Perfil