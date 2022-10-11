export default async (req, res) => {
    const body = await useBody(req)
    const contact = await $fetch(`https://data.mongodb-api.com/app/data-fgorq/endpoint/data/v1/action/insertOne`, {
        method: 'post', headers: {
            "api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`
        }, body: {
            "collection": "contacts",
            "database": `lamhouse-webapp-db`,
            "dataSource": `Cluster0`,
            "document": body
        }
    })
    return contact
}