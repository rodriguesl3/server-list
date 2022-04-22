import Koa from 'koa';
import logger from 'koa-logger';
import { Container } from 'inversify';
import { InversifyKoaServer } from 'inversify-koa-utils';
import cors from 'koa2-cors';

import { buildContainer } from './dependencyInjection';
import { loadMiddleware } from './loadMiddlewares';

export default class App {
	public app: Koa;
	private port: number = 8000;
	private container: Container;
	private server: InversifyKoaServer;

	constructor() {
		this.container = buildContainer();

		this.server = loadMiddleware(this.container);

		this.app = this.server.build();
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.info(`App listening on port ${this.port}`);
		});
	}
}
