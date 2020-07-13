import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';

import Input from '../../components/input';
import Button from '../../components/button';

const SingIn: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoImage} alt="Go Barber" />

                <form>
                    <h1>Faça seu logon</h1>

                    <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                    <Button type="submit">Entrar</Button>

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