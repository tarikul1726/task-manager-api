const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'tarikul1726@gmail.com',
        subject: 'Thanks',
        text: `Welcome ${name}`
    })
}

const sendGoodbyeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'tarikul1726@gmail.com',
        subject: 'Stay fine',
        text: `Goodbye ${name}`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}