import * as S from "./style"

import logo from "../../assets/logo.png";
import Facbook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";


export default function Footer() {
    return (
        <S.FooterContainer>
        <img src={logo} alt="Logo da Efood" />
        <S.FooterLogo>
            <img src={Instagram} alt="Logo do Facbook" />
            <img src={Facbook} alt="Logo do Instagram" />
            <img src={twitter} alt="Logo do X" />
        </S.FooterLogo>
        <S.FooterText>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade <br />
            dos produtos é toda do estabelecimento contratado.
        </S.FooterText>
        </S.FooterContainer>
    )
}