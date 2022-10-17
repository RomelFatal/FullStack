'use strict';
var test = require('ava');
var komliheroes = require('./');

test(function(t){
	t.assert(komliheroes.all.length > 0);
	t.end();
});
