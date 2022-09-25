import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    const body = await useBody(req)

    const msg = {
        to: body.email, // Change to your recipient
        from: process.env.SENDGRID_FROM_EMAIL, // Change to your verified sender
        subject: 'lamhouse',
        text: 'and easy to do anywhere, even with Node.js',
        html: `<tr>
        <td>${body.first_name}</td>
        <td>${body.email}</td>
        <td>${body.company}</td>        
        <td>${body.description}</td>
        </tr>`,
    }

    sgMail.send(msg).then(() => {
        console.log('Email sent')
        return sgMail;
    }).catch((error) => {
        console.error(error)
    })
    return null;
}



