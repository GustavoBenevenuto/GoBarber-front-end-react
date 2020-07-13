import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';

const SingIn: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoImage} alt="Go Barber" />

                <form>
                    <h1>Faça seu logon</h1>

                    <input type="text" placeholder="E-mail" />

                    <input type="password" placeholder="Senha" />

                    <button type="submit">Entrar</button>

                    <a href="#">Esqueci minha senha</a>
                </form>

                <a href="#">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>
    )
}

export default SingIn;