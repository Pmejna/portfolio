import  React from 'react';
import {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { useGoogleReCaptcha } from 'react-google-recaptcha';

import Button from '../Button/Button';
import Input from '../Input/Input';
import Rectangle from '../Icons/Rectangle';

const ContactWrapper = styled.section`
    width: 100vw;
    padding: 0;

    @media (max-width: 760px) {

    }
`;

const ContactHeader = styled.div`
    padding: 4rem 8vw 0 16vw;

    @media (max-width: 760px) {
        padding: 3rem 8vw 0 6vw;
    }
`;
const ContactForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 40px);
    gap: 1.6rem;
    padding: 4rem 8vw 4rem 16vw;
    background-color: #F5F5F5;
    position: relative;

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

const Rectangle1 = styled(Rectangle)`
    position: absolute;
    top: -5rem;
    right: 8vw;
    transform: scale(0.75);

    @media (max-width: 760px) {
        top: -4rem;
        right: 6vw;
        transform: scale(0.37);
    }
`;
const Rectangle2 = styled(Rectangle)`
    position: absolute;
    top:-0.6rem;
    right: 12vw;
    transform: scale(1.05);

    @media (max-width: 760px) {
        top: -1.7rem;
        right: 3vw;
        transform: scale(0.55);
    }
`;
const Rectangle3 = styled(Rectangle)`
    position: absolute;
    top: -4.2rem;
    right: 20vw;
    transform: scale(0.75);
    
    @media (max-width: 760px) {
        top: -4.2rem;
        right: 0vw;
        transform: scale(0.37);
    }
`;

const Contact = () => {

    const [reCaptchPublicKey, setReCaptchPublicKey] = useState()
    let reCaptchaRef = useRef(null);

    // useEffect(async () => {
    //     const result = await fetch(
    //     `${process.env.GATSBY_PUBLIC_RECAPTCHA_SITE_KEY}/users`
    //     ).then(res => res.json())
    //     setReCaptchPublicKey(result.reCaptchPublicKey)
    // })



    const sendEmail = async (e) => {
        
        // handleSentMessage

        e.preventDefault();
        // console.log(reCaptchaRef.current)
        // let token = await reCaptchaRef.current.executeAsync()
        // console.log(token)
        // reCaptchaRef.current.reset();

        // console.log(token, "token");

        // fetch('/submit', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json, text/plain, */*',
        //       'Content-type': 'application/json'
        //     },
        //     body: token
        //   })
        //   .then(res => res.json())
        //   .then(data => {
        //     // setNotification(data.msg) //--> dynamically set your notification state via the server
        //   })
        emailjs.sendForm('service_yex31g5', 'template_0mxs28h', e.target, 'user_5yt5RMKkSTewoPnI9eroa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });   
      }
      
    return (
        <ContactWrapper id='contact'>
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
                    <Button 
                        type='submit'
                        value="Send"
                        data-sitekey="reCAPTCHA_site_key" 
                        data-callback='sendEmail'
                        data-action='submit'
                        >Submit</Button>
                </ButtonField>
                {/* <ReCAPTCHA
                    sitekey={"6LfXGV8eAAAAAE_FdoMHJg_-aCRX0w-Ugc5flARZ"}
                    size="invisible"
                    ref={reCaptchaRef}
                /> */}
                <Rectangle1 color='#0AFCD3'/>
                <Rectangle2 color='#0AFCD3'/>
                <Rectangle3 color='#0AFCD3'/>
            </ContactForm>
        </ContactWrapper>
    )
};

export default Contact