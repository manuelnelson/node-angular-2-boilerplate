import { Router } from 'express';

export default ({ config, db }) => {
	let routes = Router();

	// add middleware here
	routes.get('/', ({req,res}) => {res.send('index.html')})

	return routes;
}
