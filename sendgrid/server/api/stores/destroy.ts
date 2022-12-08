export default eventHandler(async (event) => {
	const {id} = event.context.params.id;
	const query = useQuery(event);
	const body = await useBody(event); // only for POST | PUT | PATCH | DELETE requests
	const record = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/deleteMany`, {
		method: "post",
		headers: {
			"api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`,
		},
		body: {
			collection: "stores",
			database: `${process.env.MONGODB_ATLAS_DATABASE}`,
			dataSource: `${process.env.MONGODB_ATLAS_DATASOURCE}`,
			filter: body,
		},
	});
	return record;
});
