import { inject, injectable } from 'inversify';
import { ServerResponse } from '../domain/ServerResponse';
import { IServerRepository } from '../repository/IServerRepository';
import { IServerService } from './IServerService';

@injectable()
export class ServerService implements IServerService {
	constructor(@inject('ServerRepository') private serverRepository: IServerRepository) {}

	getServers(page: number, total: number, search?: string): ServerResponse {
		return this.serverRepository.getServers(page, total, search);
	}
	getServerByName(name: string, page: number, total: number): ServerResponse {
		return this.serverRepository.getServerByName(name, page, total);
	}
	getServerByLocation(location: string, page: number, total: number): ServerResponse {
		return this.serverRepository.getServerByLocation(location, page, total);
	}
}
