'use strict';

import Promise from 'bluebird';

export default function syncImport(name) {
	let scheduledFuncs = [];
	let origScheduler = Promise.setScheduler((fn) => scheduledFuncs.push(fn));
	let origPromise = global.Promise;

	try {
		global.Promise = Promise;
		var promise = System.import(name);
		
		for(var fn of scheduledFuncs) {
			fn();
		}

		var value = promise.value();
	}
	finally {
		Promise.setScheduler(origScheduler);
		global.Promise = origPromise;
	}

	return value;
}
