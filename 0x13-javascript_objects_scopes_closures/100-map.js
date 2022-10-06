#!/usr/bin/node

const list = require('./100-data').list;
const arr = list.map((item, i) => item * i);

console.log(list);
console.log(arr);
