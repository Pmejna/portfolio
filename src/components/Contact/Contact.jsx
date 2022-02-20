import  React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

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

    const [reCaptchPublicKey, setReCaptchPublicKey] = useState();
    const [errorDisp, setErrorDisp] = useState('none');
    const [confirmDisp, setConfirmDisp] = useState('none');
    const [btnDisabled, setBtnDisabled] = useState(false);
    
    const {executeRecaptcha} = useGoogleReCaptcha();
    
    // useEffect(() => {
    //     console.log()
    //     async function result() {
    //         await fetch(
    //     `${process.env.GATSBY_PUBLIC_RECAPTCHA_SITE_KEY}/users`
    //     ).then(res => res.json())
    //     };
    //     result();
    //     setReCaptchPublicKey(result.reCaptchPublicKey)
    // })



    const sendEmail = async (e) => {
        let target = e.target;
        // handleSentMessage

        e.preventDefault();
        setBtnDisabled(true)
        
        if (!executeRecaptcha) {
            return
        }
        
        const captchaResult = await executeRecaptcha('contact');
        setReCaptchPublicKey(captchaResult);
        // async function postDataToCaptcha(url="http://localhost:9000/serve-captcha") {
        async function postDataToCaptcha(url=`.netlify/functions/serve-captcha`) {
            const response = await fetch(url, {
                method: 'POST',
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                  'Content-Type': 'application/json'
                },
                referrerPolicy: 'no-referrer',
                body: reCaptchPublicKey 
              }).then((response) => response.json())
                .then(data => {
                    if(data.success == true) {
                        emailjs.sendForm('service_yex31g5', 'template_0mxs28h', target, 'user_5yt5RMKkSTewoPnI9eroa')
                        .then((result) => {
                            setErrorDisp('none')
                            setConfirmDisp('block')
                        }, (error) => {
                            console.log(error);
                        });   
                    } else {
                        setConfirmDisp('none')
                        setErrorDisp('block')
                    }
                    setBtnDisabled(false)
                })
        }
        postDataToCaptcha();


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
                        data-sitekey={process.env.GATSBY_PUBLIC_RECAPTCHA_SITE_KEY} 
                        data-callback='sendEmail'
                        data-action='submit'
                        disabled={btnDisabled}
                    >Submit
                    </Button>   
                </ButtonField>
                <Rectangle1 color='#0AFCD3'/>
                <Rectangle2 color='#0AFCD3'/>
                <Rectangle3 color='#0AFCD3'/>
                {
                    <>
                        <p  style={{display: confirmDisp, textAlign: 'left', color: "green"}}>Thank you. Your email has been send.</p>
                        <p  style={{display: errorDisp, textAlign: 'left', color: "red"}}>Sending failed. Try Again. Remember that Robots aren't allowed here.</p>
                    </>
                }
            </ContactForm>
        </ContactWrapper>
    )
};

export default Contact