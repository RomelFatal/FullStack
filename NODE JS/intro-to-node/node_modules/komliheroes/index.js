'use strict';
var uniqueRandomArray = require('unique-random-array');
var komliheroes = require('./komliheroes.json');

exports.all = komliheroes;
exports.random = uniqueRandomArray(komliheroes);
