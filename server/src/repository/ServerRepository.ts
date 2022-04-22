import { injectable } from 'inversify';
import { Server } from '../domain/Server';
import { IServerRepository } from './IServerRepository';
import db from '../__mocks__/servers.json';
import { ServerResponse } from '../domain/ServerResponse';
import 'reflect-metadata';

@injectable()
export default class ServerRepository implements IServerRepository {
	getTotalPages(total: number): number {
		return db.length / total;
	}
	getServers(page: number, total: number, search?: string): ServerResponse {
		if (search) {
			const servers = db.filter(
				(server) =>
					server.server.toLowerCase().includes(search.toLowerCase()) ||
					server.location.toLowerCase().includes(search.toLowerCase()),
			);

			return this.mapResponse(servers, page, total);
		}

		return this.mapResponse(db, page, total);
	}
	getServerByName(name: string, page: number, total: number): ServerResponse {
		const filterResult = db.filter((server) => server.server.toLowerCase().includes(name.toLowerCase()));

		return this.mapResponse(filterResult, page, total);
	}
	getServerByLocation(location: string, page: number, total: number): ServerResponse {
		const filterResult = db.filter((server) => server.location.toLowerCase().includes(location.toLowerCase()));

		return this.mapResponse(filterResult, page, total);
	}

	private mapResponse(servers: Server[], page: number, total: number): ServerResponse {
		const startIndex = page === 1 ? 0 : page;
		return {
			total: servers.length,
			servers: servers.slice(startIndex, startIndex + total) as Server[],
		};
	}
}
