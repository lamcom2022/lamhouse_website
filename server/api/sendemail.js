
export default async (req, res, err) => {
    const body = await useBody(req)

    console.log("bodyData: ", body);
    
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
                "value": `Hi ${body.email}`
            }
        ],
        "from": {
            "email": "biz@lamhouse.in",
            "name": "lamhouse"
        },
        // "reply_to": {
        //     "email": "sureshbabuweb@gmail.com",
        //     "name": "Suresh"
        // }
    }

    const contact = await $fetch("https://api.sendgrid.com/v3/mail/send", {
        method: 'post',
        headers: {
            "Authorization": "Bearer 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",
            "Content-Type": "application/json"
        },
        body: bodyData,
    })

    return contact
}



