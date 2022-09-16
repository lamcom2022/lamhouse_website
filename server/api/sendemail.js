
export default async (req, res, err) => {
    const body = await useBody(req)

    const bodyData = {
        personalizations: [
            {
                to: [
                    {
                        "email": `${body.email}`,
                        // "name": `${body.name}`
                    }
                ],
                "subject": "Lamhouse"
            }
        ],
        "content": [
            {
                "type": "text/plain",
                "value":`Hi ${body.email}`
            }
        ],
        "from": {
            "email": "sureshbabuweb@gmail.com",
            "name": "lamhouse"
        },
        // "reply_to": {
        //     "email": "sureshbabuweb@gmail.com",
        //     "name": "Suresh"
        // }
    }

    const contact = await $fetch(process.env.SENDGRID_API_URL, {
        method: 'post', headers: {
            "Authorization": process.env.SENDGRID_API_KEY,
            "Content-Type": "application/json"
        },
        body: bodyData,
    })

    return contact
}



