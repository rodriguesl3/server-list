import { Container } from 'inversify';
import { interfaces, TYPE } from 'inversify-koa-utils';
import ServersController from '../controllers/ServersController';
import { IServerRepository } from '../repository/IServerRepository';
import ServerRepository from '../repository/ServerRepository';
import { IServerService } from '../services/IServerService';
import { ServerService } from '../services/ServerService';

export function buildContainer() {
	const container = new Container();
	container.bind<interfaces.Controller>(TYPE.Controller).to(ServersController).whenTargetNamed('ServersController');

	container.bind<IServerService>('ServerService').to(ServerService);
	container.bind<IServerRepository>('ServerRepository').to(ServerRepository).inSingletonScope();

	return container;
}
