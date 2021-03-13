import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

import Button from '../Button/Button';
import Input from '../Input/Input';

const ContactWrapper = styled.section`
    width: 100vw;
    padding: 0;

    @media (max-width: 760px) {

    }
`;

const ContactHeader = styled.div`
    padding: 4rem 8vw 0 16vw;
`;
const ContactForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 40px);
    gap: 1.6rem;
    padding: 4rem 8vw 4rem 16vw;
    background-color: #F5F5F5;

    .buttonField {
        grid-area: 3/2/4/3;
    }

    @media (max-width: 1260px) {
        grid-template-columns: 1fr 2fr;
    }
    @media (max-width: 760px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(5, 40px);
        gap: 2.4rem;
        padding: 3rem 8vw 0 6vw;
        font-size: 1.2rem;
        
        .buttonField {
        grid-area: 5/1/6/2;
    }
    }
`;

const Above = styled.p`
    font-family: "IntervogueAltThin";
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #6D6D6D;
    margin-bottom: 1rem;

    @media (max-width: 760px) {
        font-size: 1.2rem;
    }
`;

const Title2 = styled.h2`
    font-size: 3rem;
    line-height: 3.8rem;
    color: black;
`;

const ButtonField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    @media (max-width: 760px) {
        justify-content: flex-start;
    }
`;

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_yex31g5', 'template_0mxs28h', e.target, 'user_5yt5RMKkSTewoPnI9eroa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
      
    return (
        <ContactWrapper>
            <ContactHeader>
            <Above >
                Contact 
            </Above>
            <Title2>Let's get in touch!</Title2>
            </ContactHeader>
            <ContactForm onSubmit={sendEmail}>
                <Input type='text' name='name' labelText='Your name'  nameOfClass='inputName' required />
                <Input type='email' name='email' labelText='Your email' nameOfClass='inputEmail' required />
                <Input textArea id='message' name="message" labelText='Your message' nameOfClass='inputMessage' required />
                <ButtonField className='buttonField' formButton>
                    <Button type='submit' value="Send">Submit</Button>
                </ButtonField>
            </ContactForm>
        </ContactWrapper>
    )
};

export default Contact