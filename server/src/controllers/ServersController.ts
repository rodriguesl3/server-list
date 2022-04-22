import { Context, Response } from 'koa';
import Router from 'koa-router';
import { interfaces, controller, httpGet, response, requestParam, queryParam } from 'inversify-koa-utils';
import { injectable, inject } from 'inversify';
import { IController } from './IController';
import { IServerService } from '../services/IServerService';

import 'reflect-metadata';

@controller('/servers')
@injectable()
export default class ServersController implements interfaces.Controller {
	constructor(@inject('ServerService') private serverService: IServerService) {}

	@httpGet('/all')
	private getServers(
		@response() res: Response,
		@queryParam('page') page?: number,
		@queryParam('total') total?: number,
		@queryParam('search') search?: string,
	) {
		const pageParam = +(page ?? 0);
		const totalParam = +(total ?? 10);

		const serverList = this.serverService.getServers(pageParam, totalParam, search);

		res.status = 200;
		res.body = serverList;
	}

	@httpGet('/name/:name')
	private getServersByName(
		@response() res: Response,
		@requestParam('name') name: string,
		@queryParam('page') page?: number,
		@queryParam('total') total?: number,
	) {
		const pageParam = +(page ?? 0);
		const totalParam = +(total ?? 20);

		const serverList = this.serverService.getServerByName(name, pageParam, totalParam);

		res.status = 200;
		res.body = serverList;
	}

	@httpGet('/location/:location')
	private getServersByLocation(
		@response() res: Response,
		@requestParam('location') location: string,
		@queryParam('page') page?: number,
		@queryParam('total') total?: number,
	) {
		const pageParam = +(page ?? 0);
		const totalParam = +(total ?? 20);

		const serverList = this.serverService.getServerByLocation(location, pageParam, totalParam);

		res.status = 200;
		res.body = serverList;
	}
}
