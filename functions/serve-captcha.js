const axios = require('axios');
require('dotenv').config();

exports.handler = function(event, context, callback) {
    const {RECAPTCHA_SECRET_KEY} = process.env;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${event.body}`;

    const send = (body, message) => {
        callback(null, {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type'
            },
            body:   JSON.stringify(body)            
        });
    }

    const verifyCaptcha = () => {
        axios.post(verificationUrl)
        .then((res, data) => {
            const success = res.data.success;
          if (!success) {
            send(res.data, "Sending failed. Robots aren't allowed here.");
          } else {
              send({"success": success, "msg": res.data.score});
          }
        })
        .catch(err => send(err))
    }
    
    verifyCaptcha();
}

