import fundoImg from "../../assets/fundoHeader.png"

import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

import { Imagem, Text, TextBanner, RestaurantName, Banner } from "./style"

type Props = {
    tipo: string
    titulo: string
    capa: string
}

const HeaderBanner = ({ capa, tipo, titulo }: Props) => (
    <>
    <Imagem style={{ backgroundImage: `url(${fundoImg})` }}>
        <Text>Restaurantes</Text>
        <Link to="/">
            <img src={logo} alt="Efood" />
        </Link>
        <Text>0 produto(s) no carrinho</Text>
    </Imagem>
    <Banner style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${capa})`}}>
        <div className="container">
            <TextBanner>{tipo}</TextBanner>
            <RestaurantName>{titulo}</RestaurantName>
        </div>
    </Banner>
    </>
)

export default HeaderBanner