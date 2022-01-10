import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

class SendGridHelper {
    static async sendConfirmationMail (token, emailAddress) {
      const server = process.env.SERVER || 'https://phidi.herokuapp.com/';

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: emailAddress,
            from: 'daniel.maina@etinx.com',
            subject: 'Confirm email address.',
            text: `Click on this link to verify your email ${server}verification?token=${token}&email=${emailAddress}`,
            html: `<p>Click on this link to verify your email ${server}verification?token=${token}&email=${emailAddress}</p>`,
          };

          sgMail
          .send(msg)
          .then(() => {}, error => {
            console.error(error);
         
            if (error.response) {
              console.error(error.response.body)
            }
          });
        //ES8
        (async () => {
          try {
            await sgMail.send(msg);
          } catch (error) {
            console.error(error);
         
            if (error.response) {
              console.error(error.response.body)
            }
          }
        })();

    }

    static async sendForgotPasswordMail (emailAddress) {
      const server = process.env.SERVER || 'https://phidi.herokuapp.com/';

      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
          to: emailAddress,
          from: 'daniel.maina@etinx.com',
          subject: 'Reset Phidi password.',
          text: `Click on this link to reset you password ${server}reset-password?email=${emailAddress}`,
          html: `<p>Click on this link to reset you password ${server}reset-password?email=${emailAddress}</p>`,
        };

        sgMail
        .send(msg)
        .then(() => {}, error => {
          console.error(error);
       
          if (error.response) {
            console.error(error.response.body)
          }
        });
      //ES8
      (async () => {
        try {
          await sgMail.send(msg);
        } catch (error) {
          console.error(error);
       
          if (error.response) {
            console.error(error.response.body)
          }
        }
      })();

  }
}

export default SendGridHelper;