#!/usr/bin/node

const dict = require('./101-data').dict;
const arr = {};
for (const item in dict) {
  if (!(dict[item] in arr)) {
    arr[dict[item]] = [item];
  } else {
    arr[dict[item]].push(item);
  }
}
console.log(arr);
