import { Server } from '../../domain/Server';
import ServerRepository from '../ServerRepository';

jest.mock('../../__mocks__/servers.json', () => [
	{
		server: 'Dell R210Intel Xeon X3440',
		memory: '16GBDDR3',
		storage: '2x2TBSATA2',
		location: 'AmsterdamAMS-01',
		price: '€4,999',
	},
	{
		server: 'HP DL180G62x Intel Xeon E5620',
		memory: '32GBDDR3',
		storage: '8x2TBSATA2',
		location: 'AmsterdamAMS-01',
		price: '€11,900',
	},
	{
		server: 'HP DL380eG82x Intel Xeon E5-2420',
		memory: '32GBDDR3',
		storage: '8x2TBSATA2',
		location: 'Washington D.C.WDC-01',
		price: '€13,199',
	},
	{
		server: 'RH2288v32x Intel Xeon E5-2650V4',
		memory: '128GBDDR4',
		storage: '4x480GBSSD',
		location: 'SingaporeSIN-11',
		price: '€22,799',
	},
]);

describe('ServerRespository', () => {
	describe('get all', () => {
		it('returns one item paginated when page size is 1', () => {
			const serverList = new ServerRepository().getServers(1, 1);

			expect(serverList.servers).toHaveLength(1);
		});
		it('returns two item paginated when page size is 2', () => {
			const serverList = new ServerRepository().getServers(1, 2);

			expect(serverList.servers).toHaveLength(2);
		});

		it('returns server filter by something', () => {
			const serverList = new ServerRepository().getServers(1, 2, 'Singa');

			expect(serverList.servers).toHaveLength(1);
			expect(serverList.servers[0]).toEqual(
				expect.objectContaining({
					location: 'SingaporeSIN-11',
				}),
			);
		});
	});

	describe('Search by Name', () => {
		it('returns Dell servers when search name = "dell"', () => {
			const serverList = new ServerRepository().getServerByName('dell', 1, 20);

			expect(serverList.servers).toHaveLength(1);
			expect(serverList.servers[0].server).toEqual('Dell R210Intel Xeon X3440');
		});

		it('returns HP servers when search name = "Hp"', () => {
			const serverList = new ServerRepository().getServerByName('Hp', 1, 20);

			expect(serverList.servers).toHaveLength(2);
			expect(serverList.servers[0].server).toEqual('HP DL180G62x Intel Xeon E5620');
			expect(serverList.servers[1].server).toEqual('HP DL380eG82x Intel Xeon E5-2420');
		});
	});

	describe('Search by location', () => {
		it('returns all servers from Singapore', () => {
			const serverList = new ServerRepository().getServerByLocation('Singapore', 1, 20);

			expect(serverList.servers).toHaveLength(1);
		});

		it('returns all servers from Amsterdam', () => {
			const serverList = new ServerRepository().getServerByLocation('Amsterdam', 1, 20);

			expect(serverList.servers).toHaveLength(2);
			expect(serverList.total).toEqual(2);
		});
	});
});
