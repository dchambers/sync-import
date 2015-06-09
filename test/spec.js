'use strict';

import syncImport from '../src/syncImport';
import chai from 'chai';
const expect = chai.expect;

describe('syncImport()', function() {
	it("allows modules to be synchronously imported", function() {
		System.registerDynamic('A', [], true, function(require, exports, module) {
			module.exports = '@A';
			return module.exports;
		});
		const A = System.normalizeSync('A');
		
		expect(System.get(A)).to.be.undefined;
		expect(syncImport('A')).to.equal('@A');
		expect(System.get(A).default).to.equal('@A');
	});
});
