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

// function count(ch, str) {
//   // let c = 0;
//   // for (let i = 0; i < str.length; ++i) {
//   //   if (str[i] === ch) { c += 1; }
//   // }
//   // return c;
//   const chs = [...str].filter(l => l === ch);
//   return chs.length;
//   // const chs = Array.from(str).filter(l => l === ch);
//   // return chs.length;
// }

// function isvalid(p) {
//   const cnt = count(p.lett, p.pass);
//   return p.min <= cnt && cnt <= p.max;
// }

// function isvalid2(p) {
//   let a = p.min - 1;
//   let b = p.max - 1;
//   return (
//     p.pass.length >= a && p.pass.length >= b
//     && (
//       (p.pass[a] === p.lett && p.pass[b] !== p.lett)
//       || (p.pass[a] !== p.lett && p.pass[b] === p.lett)
//     ))
// }

// function main() {
//   const validInput =
//     fs.readFileSync('inputs/3')
//       .toString()
//       .split('\n')
//       .filter(ln => ln.length > 0)
//       .map(ln => {
//         let flds = ln.split(':');
//         let policy = flds[0].split(' ');
//         let minmax = policy[0].split('-');
//         return {
//           min: Number.parseInt(minmax[0], 10),
//           max: Number.parseInt(minmax[1], 10),
//           lett: policy[1],
//           pass: flds[1].trim(),
//         };
//       })
//       .filter(isvalid2);
//   console.log(validInput.length);
// }

main();
