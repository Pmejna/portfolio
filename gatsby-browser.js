import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
export const wrapRootElement = ({ element }) => {
    console.log(process.env.GATSBY_PUBLIC_RECAPTCHA_SITE_KEY)
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.GATSBY_PUBLIC_RECAPTCHA_SITE_KEY}>
            {element}
        </GoogleReCaptchaProvider>
    )
}
