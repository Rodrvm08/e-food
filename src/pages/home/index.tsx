import Footer from "../../components/footer";
import RestaurantList from "../../components/restaurantList";
import Header from "../../components/header";
import { useEffect, useState } from "react";

export type CardapioItem = {
    id: number
    nome: string
    descricao: string
    preco: number
    porcao: string
    foto: string
}

export type Restaurants = {
    foto: string;
    infos: string[];
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: string
    descricao: string
    capa: string

    cardapio: CardapioItem[]
}


function Home() {
    const [restaurants, setRestaurants] = useState<Restaurants[]>([])

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
            .then(resposta => resposta.json())
            .then(resposta => setRestaurants(resposta))
    }, [])

    return(
    <>
        <Header />
        <RestaurantList restaurants={restaurants}/>
        <Footer />
    </>
    )
}

export default Home