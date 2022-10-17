#!/usr/bin/env node
'use strict';
var meow = require('meow');
var komliheroes = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ komliheroes',
		'  Samar Panda',
		'',
		'  $ komliheroes --all',
		'  Samar Panda',
		'  Deepak David',
		'  ...',
		'',
		'Options',
		'  --all   Get all names instead of a random name'
	]
});

console.log(cli.flags.all ? komliheroes.all.join('\n') : komliheroes.random());
