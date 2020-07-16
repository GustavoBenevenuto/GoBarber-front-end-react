import styled, {css} from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isField: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    
    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;

    border: 2px solid #232129;
    color: #666360;

    ${props => props.isErrored && css `
        border-color: #c53030;
    `}

    ${props => props.isFocused && css `
        color: #FF9900;
        border: 2px solid #FF9900;
    `}

    ${props => props.isField && css `
        color: #FF9900;
    `}
    


    & + div {
        margin-top: 8px;
    }
    
    input{
        flex: 1;
        background: transparent;
        outline: none;
        border: 0px;
        color: #F4ede8;
    }

    input::placeholder{
        color: #666360;
    }

    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;
    svg{
        margin: 0;
    }

    span{
        background: #c53030;
        color: #FFF;

        &::before{
            border-color: #c53030 transparent;
        }
    }
`;
