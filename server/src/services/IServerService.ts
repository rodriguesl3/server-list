import { Server } from '../domain/Server';
import { ServerResponse } from '../domain/ServerResponse';

export interface IServerService {
	getServers(page: number, total: number, search?: string): ServerResponse;
	getServerByName(name: string, page: number, total: number): ServerResponse;
	getServerByLocation(location: string, page: number, total: number): ServerResponse;
}
