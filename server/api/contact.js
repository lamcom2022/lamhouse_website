const sg = require('../sendemail');

export default async (req, res) => {
    const body = await useBody(req)
    //console.log(body)
    const contact = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/insertOne`, {
        method: 'post', headers: {
            "api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`
        }, body: {
            "collection": "contacts",
            "database": `${process.env.MONGODB_ATLAS_DATABASE}`,
            "dataSource": `${process.env.MONGODB_ATLAS_DATASOURCE}`,
            "document": body
        }
    })


    const msg = {
        to: body.email, // Change to your recipient
        from: 'service@lamhouse.com', // Change to your verified sender
        subject: 'lamhouse',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    sg.send(msg).then(() => {
        console.log('Email sent')
    }).catch((error) => {
        console.error(error)
    })

    return contact
}