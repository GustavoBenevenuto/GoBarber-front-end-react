import styled from 'styled-components';

import signInBackgroundImage from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 700px;

    form{
        margin: 80px 0px;
        width: 340px;
        text-align: center;

        h1{
            margin-bottom: 24px;
        }

        a{
            color: #F4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover{
                color: #CCC;
            }
        }
    }

    > a {
        color: #FF9000;
        display: flex;
        align-items: center;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        
        svg{
            margin-right: 15px;
        }

        &:hover{
            color: #B06500;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImage}) no-repeat center;
    background-size: cover;
`;