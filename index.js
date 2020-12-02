'use strict';

const fs = require('fs');

// ====================================

// const input = fs.readFileSync('inputs/1')
//   .toString()
//   .split('\n')
//   .map(ln => Number.parseInt(ln, 10));

// for (let i = 0; i < input.length - 1; i++) {
//   for (let j = i; j < input.length; j++) {
//     if (input[i] + input[j] === 2020) {
//       console.log(`${i} ${input[i]}, ${j} ${input[j]}, ${input[i] * input[j]}`);
//     }
//   }
// }

// for (let i = 0; i < input.length - 2; i++) {
//   for (let j = i; j < input.length - 1; j++) {
//     for (let k = j; k < input.length; k++) {
//       if (input[i] + input[j] + input[k] === 2020) {
//         console.log(`${i} ${input[i]}, ${j} ${input[j]}, ${k} ${input[k]}, ${input[i] * input[j] * input[k]}`);
//       }
//     }
//   }
// }

// ====================================

const input = fs.readFileSync('inputs/3').toString();
