#!/usr/bin/node
const x = process.argv[2];
if (isNaN(x)) {
  console.log('Missing size');
} else {
  for (let j = 0; j < x; j++) {
    console.log('X'.repeat(x));
  }
}
