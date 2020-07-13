import React, { 
    InputHTMLAttributes, 
    useEffect, 
    useRef, 
    useState,
    useCallback 
} from 'react';
import {IconBaseProps} from 'react-icons';
import {useField} from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({icon: Icon, ...props}) => {
    const inputRef = useRef<HTMLInputElement>(null); 
    const [isFocused, setIsFocused] = useState(false);
    const [isField, setIsField] = useState(false);
    const { fieldName, defaultValue, error, registerField } = useField(props.name);
    
    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    },[]);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        if(inputRef.current?.value){
            setIsField(true);
        }else{
            setIsField(false);
        }
    },[]);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    },[fieldName, registerField]);

    return (
        <Container isField={isField} isFocused={isFocused}>
            {Icon && <Icon size={20}/>}
            <input 
                defaultValue={defaultValue} ref={inputRef} 
                onFocus={handleInputFocus} 
                onBlur={handleInputBlur}
                {...props} 
            />
        </Container>
    );
}

export default Input;