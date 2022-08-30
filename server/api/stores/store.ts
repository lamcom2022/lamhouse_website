import type {IncomingMessage, ServerResponse} from "http";
import {useBody} from "h3";
import destr from "destr";

export default eventHandler(async (event) => {
	const query = useQuery(event);
	const body = await useBody(event); // only for POST | PUT | PATCH | DELETE requests
	const recordset = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/insertOne`, {
		method: "post",
		headers: {
			"api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`,
		},
		body: {
			collection: "stores",
			database: `${process.env.MONGODB_ATLAS_DATABASE}`,
			dataSource: `${process.env.MONGODB_ATLAS_DATASOURCE}`,
			document: body,
		},
	});
	return recordset;
});
