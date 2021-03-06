import React, {useCallback, useRef} from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImage from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';

import Input from '../../components/input';
import Button from '../../components/button';

const SingUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    
    const handleSubmit = useCallback( async (data: object) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6,'Minimo 6 dígitos'),
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
            <Background />
            <Content>
                <img src={logoImage} alt="Go Barber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
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