const csv2json = require('csv2json');
const fs = require('fs');
const { resolve } = require('path');

const csvPath = resolve(__dirname, '../src/__mocks__/LeaseWeb_servers.csv');
const jsonPath = resolve(__dirname, '../src/__mocks__/servers.json');

/**
 * Generates json file, based one csv server list. This script is triggered for postinstall.
 */
function createJSONFileByStream() {
	fs.createReadStream(csvPath)
		.pipe(
			csv2json({
				separator: ';',
			}),
		)
		.pipe(fs.createWriteStream(jsonPath));
}

createJSONFileByStream();
