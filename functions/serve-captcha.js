const axios = require('axios');

exports.handler = function(event, context, callback) {
    const secretKey = "6LfXGV8eAAAAAAq9CamFP9cmUaf1_imBotZmj3Hq";
    // const body = JSON.parse(event.body);
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${event.body}`;
    console.log(verificationUrl);

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

    let response = "";
    const verifyCaptcha = () => {
        axios.post(verificationUrl)
        .then((res, data) => {
            const success = res.data.success;
            // const score = res.data.score ? data.score : 0;
            console.log(res.data)
          // reCAPTCHA validation
        //   if (!success || score < 0.4) {
          if (!success) {
            send(res.data, "Sending failed. Robots aren't allowed here.");
          } else {
              send({"success": success, "msg": res.data.score});
          }
        //   // When no problems occur, "send" the form
        //   console.log(res?.data['error-codes'] ? res?.data['error-codes'] : "no errors" )

        })
        .catch(err => send(err))
    }
    
    verifyCaptcha();
}

