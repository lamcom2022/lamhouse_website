export default async (req, res) => {
    const body = await useBody(req)
    const contact = await $fetch(`https://data.mongodb-api.com/app/data-fgorq/endpoint/data/v1/action/insertOne`, {
        method: 'post', headers: {
            "api-key": `KTzPhWk0W9fQHmSuQFxK2enn8wjSJ71y1pz3MdaYrzQ2RNcFT4N0mFfaNEweKR2k`
        }, body: {
            "collection": "contacts",
            "database": `lamhouse-webapp-db`,
            "dataSource": `Cluster0`,
            "document": body
        }
    })
    return contact
}