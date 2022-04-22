import logger from 'koa-logger';
import { Container } from 'inversify';
import { InversifyKoaServer } from 'inversify-koa-utils';
import cors from 'koa2-cors';

export function loadMiddleware(container: Container) {
	const server = new InversifyKoaServer(container);

	server.setConfig((app) => {
		app.use(cors({ origin: '*' }));
		app.use(logger());
	});

	return server;
}
