import { Link } from "react-router-dom";

import * as S from './styles'

import fundoHeader from '../../assets/fundoHeader.png';
import Logo from '../../assets/logo.png';

export default function Header() {
    return(
        <S.headerContainer style={{backgroundImage: `url(${fundoHeader})`}}>
            <S.logo>
                <Link to={"/"}>
                    <img src={Logo} alt="Logo" />
                </Link>
            </S.logo>
            <S.titulo>
                Viva experiências gastronômicas
                <br /> no conforto da sua casa
            </S.titulo>
        </S.headerContainer>
    )
}

