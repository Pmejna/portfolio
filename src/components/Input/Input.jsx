import React from 'react';
import styled from 'styled-components';

const Textarea = styled.div`
    background-color: #fff;
    font-family: 'IntervogueAltThin', sans-serif;
    position: relative;

    textarea {
        width: 100%;
        height: 100%;
        border: none;
        padding: 0.4rem 1rem;
        font-size: 1rem;
        font-family: inherit;

        @media (max-width: 760px) {
            font-size: 1.4rem;
        }
    }

    &.inputMessage { 
        grid-area: 1/2/3/3;
    }

    label {
        position: absolute;
        left: 1rem;
        top: -1.4rem;
    }

    @media (max-width: 760px) {
        &.inputMessage {
        grid-area: 3/1/5/2;
        }
    }
`;

const InputWrapper = styled.div`
    background-color: #fff;
    position: relative;
    font-family: 'IntervogueAltThin', sans-serif;
    
    &.inputName {
        grid-area: 1/1/2/2;
    }
    &.inputEmail {
        grid-area: 2/1/3/2;
    }
    input {
        border: none;
        display: block;
        width: 100%;
        height: 100%;
        padding: 0 1rem;
        font-size: 1rem;
        font-family: inherit;

        &:focus ~ label {
            bottom: 2rem;
        }

        @media (max-width: 760px) {
            font-size: 1.4rem;
        }
    }

    label {
        position: absolute;
        left: 1rem;
        top: -1.4rem;
    }
    @media (max-width: 760px) {
        &.inputName {
        grid-area: 1/1/2/2;
        }
        &.inputEmail {
            grid-area: 2/1/3/2;
        }
    }
`;

const Input = ({textArea, labelText, name, type, nameOfClass, id, required, placeholder }) => {
    return (
        <>
            {
                textArea ?  
                <Textarea className={nameOfClass}>
                    <textarea name={name} id={id} cols="30" rows="10" required={required} placeholder={placeholder}>
                    </textarea>
                    <label htmlFor={id}>{labelText}</label>
                </Textarea> : 
                <InputWrapper className={nameOfClass}>
                    <input type={type} name={name} required={required} placeholder={placeholder}/>
                    <label htmlFor="" required={required}>{labelText}</label>
                </InputWrapper>
            }
        </>
    )
};

export default Input