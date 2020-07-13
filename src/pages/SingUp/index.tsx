import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImage from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';

import Input from '../../components/input';
import Button from '../../components/button';

const SingUp: React.FC = () => {
    
    function handleSubmit(data: Object):void{
        console.log(data);
    }

    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImage} alt="Go Barber" />

                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input name="name" icon={FiUser} type="text" placeholder="Nome" />

                    <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                    <Button type="submit">Cadastrar</Button>
                </Form>

                <a href="#">
                    <FiArrowLeft />
                    Voltar para Logon
                </a>
            </Content>
        </Container>
    )
}

export default SingUp;