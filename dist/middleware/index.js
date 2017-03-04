'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

exports.default = function (_ref) {
	var config = _ref.config,
	    db = _ref.db;

	var routes = (0, _express.Router)();

	// add middleware here
	routes.get('/', function (_ref2) {
		var req = _ref2.req,
		    res = _ref2.res;
		res.send('index.html');
	});

	return routes;
};
//# sourceMappingURL=index.js.map