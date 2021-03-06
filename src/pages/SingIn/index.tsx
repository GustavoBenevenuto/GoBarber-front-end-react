import React, {useCallback, useRef} from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import {Form} from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImage from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';

import Input from '../../components/input';
import Button from '../../components/button';

const SingIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback( async (data: object) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória'),
            })

            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (error) {
            console.log('Erro: ',error);
            const errors = getValidationErrors(error);
            formRef.current?.setErrors(errors);
        }
    },[]);

    return (
        <Container>
            <Content>
                <img src={logoImage} alt="Go Barber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>

                    <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                    <Button type="submit">Entrar</Button>

                    <a href="#">Esqueci minha senha</a>
                </Form>

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