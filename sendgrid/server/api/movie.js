export default async (req, res) => {
    const movies = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/findOne`, {
        method: 'post', headers: {
            "api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`
        }, body: {
            "collection": "movies",
            "database": "sample_mflix",
            "dataSource": "zynomi-web-db"
        }
    })
    return movies
}