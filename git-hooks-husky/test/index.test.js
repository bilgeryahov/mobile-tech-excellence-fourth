const assert = require('assert');

const sum = require ('../src/index').sum;
const subtract = require('../src/index').substract;

assert.equal(sum(5, 6), 11);
assert.equal(subtract(6, 5), 1);
