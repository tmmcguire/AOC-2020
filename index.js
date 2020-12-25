'use strict';

const { count } = require('console');
const fs = require('fs');
const { type } = require('os');
const { normalize } = require('path');
const { nextTick, domain } = require('process');
const { start } = require('repl');
const { isNumber } = require('util');

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

// ====================================

// function main() {
//   const input = fs.readFileSync('inputs/5')
//     .toString()
//     .split('\r\n')
//     .filter(ln => ln.length > 0)
//     .map((ln) => ln.split(''));
//   const nrows = input.length;
//   const ncols = input[0].length;

//   let row = 0;
//   let col = 0;

//   let trees = 0;
//   while (row < nrows) {
//     console.log(`${row} ${input[row]}`);
//     if (input[row][col] === '#') {
//       trees += 1;
//     }
//     col = (col + 3) % ncols;
//     row = row + 1;
//   }

//   console.log(trees);
// }

// ====================================

// function main() {
//   const paths = [
//     [1, 1],
//     [3, 1],
//     [5, 1],
//     [7, 1],
//     [1, 2]
//   ];

//   const input = fs.readFileSync('inputs/5')
//     .toString()
//     .split('\r\n')
//     .filter(ln => ln.length > 0)
//     .map((ln) => ln.split(''));
//   const nrows = input.length;
//   const ncols = input[0].length;

//   let product = 1;
//   for (const [colinc, rowinc] of paths) {
//     let row = 0;
//     let col = 0;

//     let trees = 0;
//     while (row < nrows) {
//       if (input[row][col] === '#') {
//         trees += 1;
//       }
//       col = (col + colinc) % ncols;
//       row = row + rowinc;
//     }
//     product *= trees;
//     console.log(`${[colinc, rowinc]} ${trees}`);
//   }

//   console.log(product);
// }

// ====================================

// function isValid(rec) {
//   const keys = [
//     'byr', // (Birth Year)
//     'iyr', // (Issue Year)
//     'eyr', // (Expiration Year)
//     'hgt', // (Height)
//     'hcl', // (Hair Color)
//     'ecl', // (Eye Color)
//     'pid', // (Passport ID)
//     // 'cid', // (Country ID)
//   ];
//   return keys.every((k) => rec.hasOwnProperty(k));
// }

// function validYear(v, low, hi) {
//   if (v.match(/^\d\d\d\d$/)) {
//     const n = Number.parseInt(v, 10);
//     return low <= n && n <= hi;
//   }
//   return false;
// }

// function validHgt(v) {
//   const match = v.match(/^(\d+)(cm|in)$/);
//   if (match) {
//     const n = Number.parseInt(match[1], 10);
//     switch (match[2]) {
//       case 'cm':
//         return 150 <= n && n <= 193;
//       case 'in':
//         return 59 <= n && n <= 76;
//       default:
//         return false;
//     }
//   }
//   return false;
// }

// function validHcl(v) {
//   const res = v.match(/^#[0-9a-f]{6}$/);
//   return res;
// }

// function validEcl(v) {
//   switch (v) {
//     case 'amb':
//     case 'blu':
//     case 'brn':
//     case 'gry':
//     case 'grn':
//     case 'hzl':
//     case 'oth':
//       return true;
//     default:
//       return false;
//   }
// }

// function validPid(v) {
//   const res = v.match(/^\d{9}$/);
//   return res;
// }

// function isValid2(rec) {
//   const keys = [
//     ['byr', (byr) => validYear(byr, 1920, 2002)], // (Birth Year) - four digits; at least 1920 and at most 2002.
//     ['iyr', (iyr) => validYear(iyr, 2010, 2020)], // (Issue Year) - four digits; at least 2010 and at most 2020.
//     ['eyr', (eyr) => validYear(eyr, 2020, 2030)], // (Expiration Year) - four digits; at least 2020 and at most 2030.
//     ['hgt', validHgt], // (Height) - a number followed by either cm or in:
//     //  If cm, the number must be at least 150 and at most 193.
//     //  If in, the number must be at least 59 and at most 76.
//     ['hcl', validHcl], // (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
//     ['ecl', validEcl], // (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
//     ['pid', validPid], // (Passport ID) - a nine-digit number, including leading zeroes.
//     // 'cid', // (Country ID) - ignored, missing or not.
//   ];
//   return keys.every(([k, p]) => rec.hasOwnProperty(k) && p(rec[k]));
// }

// function main() {
//   const input = fs.readFileSync('inputs/7')
//     .toString()
//     .split('\r\n\r\n')
//     .map((rec) => {
//       const obj = {};
//       rec.split(/\s+/).forEach((pr => {
//         const [key, value] = pr.split(':');
//         obj[key] = value;
//       }));
//       return obj;
//     });
//   // console.log(input);
//   console.log(input.filter(isValid2).length);
// }

// ====================================

// function toBinary(str, zero, one) {
//   return str.split('')
//     .reduce((acc, cur) => (cur === zero) ? 2 * acc : 2 * acc + 1, 0);
// }

// // function main() {
// //   const seat = fs.readFileSync('inputs/9')
// //     .toString()
// //     .split('\r\n')
// //     .filter(ln => ln.length > 0)
// //     .map((ln) => {
// //       const row = toBinary(ln.slice(0, 7), 'F', 'B');
// //       const col = toBinary(ln.slice(7), 'L', 'R');
// //       const seat = row * 8 + col;
// //       console.log(`${row}  ${col}  ${seat}`);
// //       return seat;
// //     })
// //     .reduce((acc, cur) => cur > acc ? cur : acc, 0);
// //     console.log(seat);
// // }

// function main() {
//   const seats = fs.readFileSync('inputs/9')
//     .toString()
//     .split('\r\n')
//     .filter(ln => ln.length > 0)
//     .map((ln) => {
//       const row = toBinary(ln.slice(0, 7), 'F', 'B');
//       const col = toBinary(ln.slice(7), 'L', 'R');
//       const seat = row * 8 + col;
//       console.log(`${row}  ${col}  ${seat}`);
//       return seat;
//     }).sort((a, b) => a - b);
//   console.log(seats);
//   for (let i = 0; i < seats.length - 1; i++) {
//     if (seats[i] !== seats[i + 1] - 1) {
//       console.log(seats[i] + 1);
//     }
//   }
// }

// ====================================

// function main() {
//   const input = fs.readFileSync('inputs/11')
//     .toString()
//     .split('\r\n\r\n')
//     .map((grp) => {
//       return grp.split('\r\n')
//         .map((per) => new Set(per.split('')))
//         .reduce((acc, per) => new Set([...acc, ...per]), new Set()); // Union of persons
//     });
//   console.log(input);
//   console.log(input.reduce((acc, cur) => acc + cur.size, 0));
// }

// function main() {
//   const input = fs.readFileSync('inputs/11')
//     .toString()
//     .trim()
//     .split('\r\n\r\n')
//     .map((grp) =>
//       grp.split('\r\n')
//         .map((per) => new Set(per.split('')))
//         .reduce((acc, per) => new Set([...acc].filter(x => per.has(x)))) // Intersection of persons
//     );
//   console.log(input.reduce((acc, cur) => acc + cur.size, 0));
// }

// ====================================

// function reduceToObj(obj, [k, v]) {
//   obj[k] = v;
//   return obj;
// }

// function getRules() {
//   return fs.readFileSync('inputs/13')
//     .toString()
//     .trim()
//     .split('\r\n')
//     .map((ln) => {
//       let [hd, tl] = ln.trim().slice(0, -1).split(' contain ');
//       hd = hd.slice(0, -5)
//       if (tl === 'no other bags') {
//         return [hd, {}];
//       } else {
//         const tail = tl.split(', ')
//           .map((poss) => {
//             const m = poss.match(/(\d+) (.*) bags?/)
//             return [m[2], Number.parseInt(m[1], 10)];
//           })
//           .reduce(reduceToObj, {});
//         return [hd, tail];
//       }
//     })
//     .reduce(reduceToObj, {});
// }

// // Rules map is {<bag a>: {<bag b>: <n>}}.
// // This means bag a contains n bag b's.
// // Reversing this map produces:
// // {<bag b>: [<bag a>]}
// // which means that bag b can be contained in bag a.
// function reverseRules(rules) {
//   return Object.entries(rules)
//     .reduce((acc, [head, tail]) => {
//       Object.keys(tail).forEach((key) => {
//         if (acc.hasOwnProperty(key)) {
//           acc[key].push(head);
//         } else {
//           acc[key] = [head];
//         }
//       });
//       return acc;
//     }, {});
// }

// // function main() {
// //   const reversed = reverseRules(getRules());
// //   let queue = reversed['shiny gold'];
// //   const possibilities = new Set();
// //   while (queue.length > 0) {
// //     const curr = queue.pop();
// //     possibilities.add(curr);
// //     if (reversed.hasOwnProperty(curr)) {
// //       queue = queue.concat(reversed[curr]);
// //     }
// //   }
// //   console.log(possibilities.size);
// // }

// function contained(rules, bag) {
//   return Object.entries(rules[bag])
//     .reduce((acc, [key, value]) => acc + value * (1 + contained(rules, key)), 0);
// }

// function main() {
//   const rules = getRules();
//   console.log(contained(rules, 'shiny gold'));
// }

// ====================================

// class Interpreter {
//   constructor() {
//     this.acc = 0;
//     this.pc = 0;
//   }

//   step(instruction) {
//     switch (instruction[0]) {
//       case 'acc':
//         this.acc += instruction[1];
//         this.pc += 1;
//         break;
//       case 'jmp':
//         this.pc += instruction[1];
//         break;
//       case 'nop':
//         this.pc += 1;
//         break;
//     }
//   }

//   execute(code) {
//     while (0 <= this.pc && this.pc < code.length) {
//       const current = code[this.pc];
//       this.step(current);
//     }
//   }

//   interpret(instructions) {
//     const code = this.decode(instructions);
//     this.execute(code);
//   }

//   decode(instructions) {
//     return instructions.map((instruction) => {
//       const segments = instruction.match(/([a-z]*) ([+-])(\d*)/);
//       if (!segments) {
//         throw new Error(`??? ${instruction}`);
//       }
//       const value = Number.parseInt(segments[3], 10);
//       return [
//         segments[1],
//         (segments[2] === '+') ? value : -1 * value,
//       ];
//     });
//   }
// }

// class Breakpoint1 extends Interpreter {
//   constructor() {
//     super();
//     this.seen = new Set([this.pc]);
//   }

//   step(instruction) {
//     super.step(instruction);
//     if (this.seen.has(this.pc)) {
//       this.pc = -1;
//     } else {
//       this.seen.add(this.pc);
//     }
//   }
// }

// class Breakpoint2 extends Breakpoint1 {
//   constructor() {
//     super();
//     this.testloc = -1;
//   }

//   reset() {
//     this.acc = 0;
//     this.pc = 0;
//     this.seen = new Set([this.pc]);
//   }

//   swap(code, loc) {
//     switch (code[loc][0]) {
//       case 'jmp':
//         code[loc][0] = 'nop';
//         break;
//       case 'nop':
//         code[loc][0] = 'jmp';
//         break;
//       default:
//         throw new Error(`Cannot swap instruction ${loc}`);
//     }
//   }

//   next(code) {
//     if (this.testloc < 0) {
//       this.testloc = 0;
//     } else {
//       this.swap(code, this.testloc);
//       this.testloc += 1;
//     }
//     while (this.testloc < code.length && code[this.testloc][0] === 'acc') {
//       this.testloc += 1;
//     }
//     if (this.testloc < code.length) {
//       this.swap(code, this.testloc);
//       return code;
//     } else {
//       return null;
//     }
//   }

//   interpret(instructions) {
//     let code = this.decode(instructions);
//     while (code) {
//       this.execute(code);
//       if (this.pc >= code.length) {
//         break;
//       } else {
//         code = this.next(code);
//         this.reset();
//       }
//     }
//   }

// }

// // function main() {
// //   const input = fs.readFileSync('inputs/15')
// //     .toString()
// //     .trim()
// //     .split('\r\n');
// //   const interpreter = new Breakpoint1();
// //   interpreter.interpret(input);
// //   // console.log(interpreter);
// //   console.log(`${interpreter.pc}: ${interpreter.acc}`);
// // }

// function main() {
//   const input = fs.readFileSync('inputs/15')
//     .toString()
//     .trim()
//     .split('\r\n');
//   const interpreter = new Breakpoint2();
//   interpreter.interpret(input);
//   console.log(`${interpreter.pc}: ${interpreter.acc}`);
// }

// ====================================

// const LENGTH = 25;

// function isValid(input, curr) {
//   let i = curr - LENGTH;
//   let j = i + 1;
//   while (i < curr && input[i] + input[j] !== input[curr]) {
//     j += 1;
//     if (j >= curr) {
//       i += 1;
//       j = i + 1;
//     }
//   }
//   return i !== curr;
// }

// // function main() {
// //   const input = fs.readFileSync('inputs/17')
// //     .toString()
// //     .trim()
// //     .split('\r\n')
// //     .map((ln) => Number.parseInt(ln, 10));
// //   let curr = 25;
// //   while (curr < input.length && isValid(input, curr)) {
// //     curr += 1;
// //   }
// //   console.log(`${curr}: ${input[curr]}`);
// // }

// function contiguousSequence(input, total, start) {
//   let i = start;
//   let sum = 0;
//   while (sum < total) {
//     sum += input[i]
//     i += 1;
//   }
//   if (sum === total) {
//     return [start, i]
//   } else {
//     return null;
//   }
// }

// function main() {
//   const input = fs.readFileSync('inputs/17')
//     .toString()
//     .trim()
//     .split('\r\n')
//     .map((ln) => Number.parseInt(ln, 10));
//   let curr = 25;
//   while (curr < input.length && isValid(input, curr)) {
//     curr += 1;
//   }
//   const invalid = input[curr];
//   curr = 0;
//   let result = contiguousSequence(input, invalid, curr);
//   while (curr < input.length && !result) {
//     curr += 1;
//     result = contiguousSequence(input, invalid, curr);
//   }
//   const subsequence = input.slice(result[0], result[1]);
//   subsequence.sort();
//   console.log(subsequence[0] + subsequence[subsequence.length - 1]);
// }

// ====================================

// function main() {
//   const input = fs.readFileSync('inputs/19')
//     .toString()
//     .trim()
//     .split('\r\n')
//     .map((ln) => Number.parseInt(ln, 10))
//     .sort((a, b) => a - b);
//   input.unshift(0); // initial power source
//   input.push(input[input.length - 1] + 3); // final device
//   console.log(`${input}`);
//   let one = 0;
//   let three = 0;
//   for (let i = 0; i < input.length - 1; ++i) {
//     switch (input[i + 1] - input[i]) {
//       case 0, 2:
//         break;
//       case 1:
//         one += 1;
//         break;
//       case 3:
//         three += 1;
//         break;
//       default:
//         throw new Error(`Help: ${i} ${input[i + 1]} - ${input[i]}`);
//     }
//   }
//   console.log(`${one} ${three} ${one * three}`);
// }

// // Idea: break the input into segments where input[j] === input[i] + 3 (there's
// // only one way to get between the two). Then count for each segment and
// // multiply.
// function countSegment(input, start, end) {
//   let count = 0;
//   const queue = [start];
//   while (queue.length > 0) {
//     const cur = queue.pop();
//     if (cur >= end) {
//       count += 1;
//     } else {
//       const value = input[cur];
//       for (let i = cur + 1; i < cur + 4; ++i) {
//         if (input[i] - value < 4) {
//           queue.push(i);
//         }
//       }
//     }
//   }
//   return count;
// }

// function segments(input) {
//   const res = [];
//   let start = 0;

//   while (start <= input.length - 1) {
//     let end = start + 1;
//     while (input[end] - input[end - 1] < 3) {
//       end += 1;
//     }
//     res.push([start, end - 1]);
//     start = end;
//   }

//   return res;
// }

// function main() {
//   const input = fs.readFileSync('inputs/19')
//     .toString()
//     .trim()
//     .split('\r\n')
//     .map((ln) => Number.parseInt(ln, 10))
//     .sort((a, b) => a - b);
//   input.unshift(0); // initial power source
//   input.push(input[input.length - 1] + 3); // final device

//   const opts = segments(input)
//     .map(([start, end]) => countSegment(input, start, end))
//     .reduce((acc, val) => acc * val, 1);
//   console.log(opts);
// }

// ====================================

// // function nOccupied(state, row, col) {
// //   const rows = state.length;
// //   const cols = state[0].length;
// //   let count = 0;
// //   for (let r = row - 1; r <= row + 1; r++) {
// //     if (r < 0 || r >= rows) {
// //       continue;
// //     }
// //     for (let c = col - 1; c <= col + 1; c++) {
// //       if (c < 0 || c >= cols || (r === row && c === col)) {
// //         continue;
// //       } else if (state[r][c] === '#') {
// //         count += 1;
// //       }
// //     }
// //   }
// //   return count;
// // }

// // function step(state) {
// //   const newState = Array.from(state, ln => Array.from(ln));
// //   for (let r = 0; r < state.length; r++) {
// //     for (let c = 0; c < state[0].length; c++) {
// //       switch (state[r][c]) {
// //         case 'L':
// //           if (nOccupied(state, r, c) === 0) {
// //             newState[r][c] = '#';
// //           }
// //           break;
// //         case '#':
// //           if (nOccupied(state, r, c) > 3) {
// //             newState[r][c] = 'L';
// //           }
// //           break;
// //         case '.':
// //           break;
// //         default:
// //           throw new Error(`Unknown: ${state[r][c]} ${r} ${c}`);
// //           break;
// //       }
// //     }
// //   }
// //   return newState;
// // }

// function within(state, row, col) {
//   return 0 <= row && row < state.length && 0 <= col && col < state[0].length;
// }

// function nVisible(state, row, col) {
//   const directions = [[0, 1], [1, 1], [1, 0], [0, -1], [-1, -1], [-1, 0], [1, -1], [-1, 1]];
//   let count = 0;
//   for (let direction of directions) {
//     const [dr, dc] = direction;
//     let r = row;
//     let c = col;
//     while (true) {
//       r += dr;
//       c += dc;
//       if (!within(state, r, c) || state[r][c] === 'L') {
//         break;
//       } else if (state[r][c] === '#') {
//         count += 1;
//         break;
//       }
//     }
//   }
//   return count;
// }

// function step(state) {
//   const newState = Array.from(state, ln => Array.from(ln));
//   for (let r = 0; r < state.length; r++) {
//     for (let c = 0; c < state[0].length; c++) {
//       switch (state[r][c]) {
//         case 'L':
//           if (nVisible(state, r, c) === 0) {
//             newState[r][c] = '#';
//           }
//           break;
//         case '#':
//           if (nVisible(state, r, c) > 4) {
//             newState[r][c] = 'L';
//           }
//           break;
//         case '.':
//           break;
//         default:
//           throw new Error(`Unknown: ${state[r][c]} ${r} ${c}`);
//           break;
//       }
//     }
//   }
//   return newState;
// }

// function stabilized(oldState, newState) {
//   for (let r = 0; r < oldState.length; r++) {
//     for (let c = 0; c < oldState[0].length; c++) {
//       if (oldState[r][c] !== newState[r][c]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// function totalOccupied(state) {
//   return state.reduce(
//     (outer, row) =>
//       outer + row.reduce(
//         (inner, col) => inner + (col === '#' ? 1 : 0),
//         0
//       ),
//     0
//   );
// }

// // function main() {
// //   const input = fs.readFileSync('inputs/21')
// //     .toString()
// //     .trim()
// //     .split('\r\n')
// //     .map((ln) => ln.split(''));
// //   let oldState = input;
// //   let newState = step(input);
// //   let steps = 1;
// //   // console.log(newState);
// //   while (!stabilized(oldState,newState)) {
// //     oldState = newState;
// //     newState = step(newState);
// //     steps += 1;
// //   }
// //   console.log(steps);
// //   console.log(newState);
// //   console.log(totalOccupied(newState));
// // }

// function main() {
//   const input = fs.readFileSync('inputs/21')
//     .toString()
//     .trim()
//     .split('\r\n')
//     .map((ln) => ln.split(''));
//   let oldState = input;
//   let newState = step(input);
//   let steps = 1;
//   while (!stabilized(oldState, newState)) {
//     oldState = newState;
//     newState = step(newState);
//     steps += 1;
//   }
//   console.log(steps);
//   // console.log(newState);
//   console.log(totalOccupied(newState));
// }

// ====================================

// // // State: {
// // // loc: [<N coord>, <E coord>],
// // // dir: <direction>,
// // // }

// // // Clockwise rotation
// // const direction = {
// //   0: [0, 1],  // East
// //   1: [-1, 0], // South
// //   2: [0, -1], // West
// //   3: [1, 0],  // North
// // };

// // function state0() {
// //   return {
// //     loc: [0, 0],
// //     dir: 0,
// //   }
// // }

// // function update(state, [action, value]) {
// //   switch (action) {
// //     case 'N':
// //       state.loc = [state.loc[0] + value, state.loc[1]];
// //       return state;
// //     case 'S':
// //       state.loc = [state.loc[0] - value, state.loc[1]];
// //       return state;
// //     case 'E':
// //       state.loc = [state.loc[0], state.loc[1] + value];
// //       return state;
// //     case 'W':
// //       state.loc = [state.loc[0], state.loc[1] - value];
// //       return state;
// //     case 'L':
// //       state.dir = (state.dir + 4 - (value / 90)) % 4;
// //       return state;
// //     case 'R':
// //       state.dir = (state.dir + 4 + (value / 90)) % 4;
// //       return state;
// //     case 'F':
// //       const [Nd, Ed] = direction[state.dir].map((d) => d * value);
// //       state.loc = [state.loc[0] + Nd, state.loc[1] + Ed];
// //       return state;
// //     default:
// //       throw new Error(`update: ${action}?`);
// //   }
// // }

// // function main() {
// //   const input = fs.readFileSync('inputs/day12')
// //     .toString()
// //     .trim()
// //     .split('\r\n')
// //     .map((ln) => {
// //       const match = ln.match(/(\w)(\d+)/);
// //       if (match) {
// //         return [match[1], Number.parseInt(match[2], 10)];
// //       } else {
// //         throw new Error(`${ln}?`);
// //       }
// //     })
// //   const end = input.reduce(update, state0());
// //   const distance = Math.abs(end.loc[0]) + Math.abs(end.loc[1]);
// //   console.log(end);
// //   console.log(distance);
// // }

// // State: {
// //  loc: [<N coord>, <E coord>],
// //  way: [<N coord>, <E coord>],
// // }

// function state0() {
//   return {
//     loc: [0, 0],
//     way: [1, 10],
//   }
// }

// function rotateL([n, e]) {
//   return [e, -1 * n];
// }

// function rotateR([n, e]) {
//   return [-1 * e, n];
// }

// function update(state, [action, value]) {
//   switch (action) {
//     case 'N':
//       state.way = [state.way[0] + value, state.way[1]];
//       return state;
//     case 'S':
//       state.way = [state.way[0] - value, state.way[1]];
//       return state;
//     case 'E':
//       state.way = [state.way[0], state.way[1] + value];
//       return state;
//     case 'W':
//       state.way = [state.way[0], state.way[1] - value];
//       return state;
//     case 'L':
//       switch (value) {
//         case 270:
//           state.way = rotateL(state.way);
//         case 180:
//           state.way = rotateL(state.way);
//         case 90:
//           state.way = rotateL(state.way);
//       }
//       return state;
//     case 'R':
//       switch (value) {
//         case 270:
//           state.way = rotateR(state.way);
//         case 180:
//           state.way = rotateR(state.way);
//         case 90:
//           state.way = rotateR(state.way);
//       }
//       return state;
//     case 'F':
//       const [Nd, Ed] = state.way.map((d) => d * value);
//       state.loc = [state.loc[0] + Nd, state.loc[1] + Ed];
//       return state;
//     default:
//       throw new Error(`update: ${action}?`);
//   }
// }

// function main() {
//   const input = fs.readFileSync('inputs/day12')
//     .toString()
//     .trim()
//     .split('\r\n')
//     .map((ln) => {
//       const match = ln.match(/(\w)(\d+)/);
//       if (match) {
//         return [match[1], Number.parseInt(match[2], 10)];
//       } else {
//         throw new Error(`${ln}?`);
//       }
//     })
//   const end = input.reduce(update, state0());
//   const distance = Math.abs(end.loc[0]) + Math.abs(end.loc[1]);
//   console.log(end);
//   console.log(distance);
// }

// ====================================

// // function main() {
// //   const input = fs.readFileSync('inputs/day13')
// //     .toString()
// //     .trim()
// //     .split('\r\n');
// //   const earliestDeparture = Number.parseInt(input[0], 10);
// //   const busses = input[1].split(',')
// //     .filter((elt) => elt !== 'x')
// //     .map((elt) => Number.parseInt(elt, 10));
// //   console.log(`${earliestDeparture} -- ${busses}`);
// //   let i = 1;
// //   let best = 0;
// //   for (; i < busses.length; ++i) {
// //     if (busses[i] - (earliestDeparture % busses[i]) < busses[best] - (earliestDeparture % busses[best])) {
// //       best = i;
// //     }
// //   }
// //   console.log(`${busses[best]} * (${busses[best]} - ${earliestDeparture % busses[best]})`);
// //   console.log(busses[best] * (busses[best] - (earliestDeparture % busses[best])));
// // }

// // I had to cheat; the tip I found as "Chinese Remainder Theorem".
// function remainders(busses) {
//   const result = [];
//   for (let i = 0; i < busses.length; ++i) {
//     if (busses[i] >= 0) {
//       result.push([busses[i], (busses[i] - (BigInt(i) % busses[i])) % busses[i]]);
//     }
//   }
//   return result;
// }

// function main() {
//   const input = fs.readFileSync('inputs/day13')
//     .toString()
//     .trim()
//     .split('\r\n');
//   const busses = input[1].split(',')
//     .map((elt) => (elt !== 'x') ? BigInt(Number.parseInt(elt, 10)) : -1);

//   const congruences = remainders(busses)
//     .sort(([a1, a2], [b1, b2]) => a1 - b1);
//   let congruence = congruences.pop();
//   let step = congruence[0];
//   let base = congruence[1];
//   while (congruences.length > 0) {
//     congruence = congruences.pop();
//     while (base % congruence[0] !== congruence[1]) {
//       base += step;
//     }
//     step = step * congruence[0];
//   }
//   console.log(base);
// }

// ====================================

// // function toMask(str) {
// //   let ones = BigInt(0);
// //   let zeros = BigInt(0);
// //   for (let i = 0; i < 36; ++i) {
// //     switch (str[i]) {
// //       case 'X':
// //         ones = ones * 2n;
// //         zeros = zeros * 2n + 1n;
// //         break;
// //       case '1':
// //         ones = ones * 2n + 1n;
// //         zeros = zeros * 2n + 1n;
// //         break;
// //       case '0':
// //         ones = ones * 2n;
// //         zeros = zeros * 2n;
// //         break;
// //       default:
// //         throw new Error(str);
// //     }
// //   }
// //   return [ones, zeros];
// // }

// // function toOp(ln) {
// //   let match = ln.match(/mask = ([X01]{36})/);
// //   if (match) {
// //     const [ones, zeros] = toMask(match[1]);
// //     return ['mask', ones, zeros];
// //   }
// //   match = ln.match(/mem\[(\d+)\] = (\d+)/);
// //   if (match) {
// //     return [
// //       'assign',
// //       BigInt(match[1]),
// //       BigInt(match[2]),
// //     ];
// //   }
// // }

// // function main() {
// //   const input = fs.readFileSync('inputs/day14')
// //     .toString()
// //     .trim()
// //     .split('\r\n')
// //     .map(toOp);
// //   console.log(input);
// //   const memory = input.reduce((state, op) => {
// //     switch (op[0]) {
// //       case 'mask':
// //         state.mask = [op[1], op[2]];
// //         break;
// //       case 'assign':
// //         const loc = op[1];
// //         let val = op[2];
// //         val = val | state.mask[0];
// //         val = val & state.mask[1];
// //         state.mem[loc] = val;
// //         break;
// //     }
// //     return state;
// //   }, {
// //     mask: [],
// //     mem: {},
// //   });
// //   console.log(memory);
// //   const sum = Object.values(memory.mem).reduce((acc, cur) => acc + cur, 0n);
// //   console.log(sum);
// // }

// function toMask(str) {
//   let ones = BigInt(0);
//   let bitvalue = 36n;
//   let floating = [];
//   for (let i = 0; i < 36; ++i) {
//     bitvalue -= 1n;
//     switch (str[i]) {
//       case 'X':
//         ones = ones * 2n;
//         floating.push(2n ** bitvalue);
//         break;
//       case '1':
//         ones = ones * 2n + 1n;
//         break;
//       case '0':
//         ones = ones * 2n;
//         break;
//       default:
//         throw new Error(str);
//     }
//   }
//   return [ones, floating];
// }

// function doFloating(masks, value) {
//   let addresses = [value];
//   for (let mask of masks) {
//     // addresses.flatMap((cur) => {
//     //   addresses = [(cur | m), (cur & ~m)];
//     // })
//     addresses = addresses.reduce(
//       (acc, cur) => acc.concat([(cur | mask), (cur & ~mask)]),
//       []
//     );
//   }
//   return addresses;
// }

// function toOp(ln) {
//   let match = ln.match(/mask = ([X01]{36})/);
//   if (match) {
//     const [ones, floating] = toMask(match[1]);
//     return ['mask', ones, floating];
//   }
//   match = ln.match(/mem\[(\d+)\] = (\d+)/);
//   if (match) {
//     return [
//       'assign',
//       BigInt(match[1]),
//       BigInt(match[2]),
//     ];
//   }
// }

// function main() {
//   const input = fs.readFileSync('inputs/day14')
//     .toString()
//     .trim()
//     .split('\r\n')
//     .map(toOp);
//   const memory = input.reduce((state, op) => {
//     switch (op[0]) {
//       case 'mask':
//         state.mask = [op[1], op[2]];
//         break;
//       case 'assign':
//         doFloating(state.mask[1], op[1] | state.mask[0])
//           .forEach((v) => state.mem[v] = op[2]);
//         break;
//     }
//     return state;
//   }, {
//     mask: [],
//     mem: {},
//   });
//   const sum = Object.values(memory.mem)
//     .reduce((acc, cur) => acc + cur, 0n);
//   console.log(sum);
// }

// ====================================

// const INPUT = [5, 1, 9, 18, 13, 8, 0];
// const INPUTa = [0, 3, 6];
// const INPUTb = [1, 3, 2];
// const INPUTc = [2, 1, 3];
// const INPUTd = [3, 1, 2];

// const TURNS = 30000000;

// // const numbers = {};
// const numbers = Array(TURNS);

// function distance(number) {
//   const turns = numbers[number];
//   if (turns === undefined) {
//     return 0;
//   } else {
//     return turns[0] - turns[1];
//   }
// }

// function say(turn, number) {
//   const turns = numbers[number];
//   if (turns === undefined) {
//     numbers[number] = [turn, turn];
//   } else {
//     numbers[number] = [turn, turns[0]];
//   }
// }

// // function main() {
// //   const input = INPUT;
// //   for (let t = 1; t <= input.length; t++) {
// //     say(t, input[t-1]);
// //   }
// //   let last = input[input.length - 1];
// //   for (let t = input.length + 1; t <= 2020; t++) {
// //     const dist = distance(last);
// //     // console.log(`${t} ${dist}`);
// //     say(t, dist);
// //     last = dist;
// //   }
// //   console.log(last);
// // }

// function main() {
//   const input = INPUT;
//   for (let t = 1; t <= input.length; t++) {
//     say(t, input[t - 1]);
//   }
//   let last = input[input.length - 1];
//   for (let t = input.length + 1; t <= TURNS; t++) {
//     const dist = distance(last);
//     // console.log(`${t} ${dist}`);
//     say(t, dist);
//     last = dist;
//   }
//   console.log(last);
// }

// ====================================

// function buildRules(rules) {
//   const ruleMap = rules.split('\r\n')
//     .map((rule) => {
//       const [head, tail] = rule.split(':').map((s) => s.trim());
//       return [
//         head,
//         tail.split(' or ').map((rng) => rng.split('-').map((n) => Number.parseInt(n, 10))),
//       ];
//     })
//     .reduce((m, rule) => {
//       m[rule[0]] = rule[1];
//       return m;
//     }, {});
//   return ruleMap;
// }

// function buildTicket(line) {
//   const ticket = line.split(',').map((n) => Number.parseInt(n, 10));
//   return ticket;
// }

// // function mergeTestRes(results) {
// //   return results.reduce(
// //     (current, next) => current.reduce(
// //       (cur, test, i) => {
// //         if (cur[i] !== test) {
// //           cur[i] = null;
// //         }
// //         return cur;
// //       },
// //       next
// //     )
// //   );
// // }

// // function testRule(ruleTail, ticket) {
// //   const result = mergeTestRes(
// //     ruleTail.map(
// //       ([low, hi]) => ticket.map(
// //         (val) => (low <= val && val <= hi) ? null : val
// //       )
// //     )
// //   );
// //   return result;
// // }

// // function validTicket(rules, ticket) {
// //   const result = mergeTestRes(
// //     Object.values(rules).map((rule) => testRule(rule, ticket))
// //   );
// //   return result;
// // }

// // function sum(ary) {
// //   return ary
// //     .filter((elt) => typeof elt === 'number')
// //     .reduce((acc, n) => acc + n, 0);
// // }

// // function main() {
// //   const input = fs.readFileSync('inputs/day16')
// //     .toString()
// //     .trim()
// //     .split('\r\n\r\n');
// //   const rules = buildRules(input[0]);
// //   const myTicket = buildTicket(input[1].split('\r\n')[1]);
// //   const nearby = input[2].split('\r\n').slice(1).map(buildTicket);
// //   // console.log(JSON.stringify(rules, null, 2));
// //   // console.log(JSON.stringify(myTicket, null, 2));
// //   // console.log(JSON.stringify(nearby, null, 2));
// //   const x = nearby.map((tkt) => validTicket(rules, tkt)).map(sum);
// //   console.log(sum(x));
// // }

// function testRule(ruleTail, value) {
//   return ruleTail.some(([low, hi]) => low <= value && value <= hi);
// }

// function validTicket(rules, ticket) {
//   return ticket.every(
//     (value) => Object.values(rules).some(
//       (ruleTail) => testRule(ruleTail, value)
//     )
//   );
// }

// function assignFields(rules, tickets) {
//   let assignment = [];
//   for (let i = 0; i < tickets[0].length; ++i) {
//     assignment[i] = new Set(
//       Object.entries(rules)
//         .filter(
//           ([_, ruleTail]) => tickets
//             .map((tkt) => tkt[i])
//             .every((val) => testRule(ruleTail, val))
//         )
//         .map(([key, _]) => key)
//     );
//   }
//   assignment = Array.from(assignment.entries())
//     .sort((a, b) => a[1].size - b[1].size)
//   const mapping = {};
//   for (let i = 0; i < assignment.length; ++i) {
//     if (assignment[i][1].size > 1) {
//       throw new Error(`${i}`);
//     } else {
//       const key = Array.from(assignment[i][1].values())[0];
//       mapping[key] = assignment[i][0];
//       for (let j = i + 1; j < assignment.length; ++j) {
//         assignment[j][1].delete(key);
//       }
//     }
//   }
//   return mapping;
// }

// function main() {
//   const input = fs.readFileSync('inputs/day16')
//     .toString()
//     .trim()
//     .split('\r\n\r\n');
//   const rules = buildRules(input[0]);
//   const myTicket = buildTicket(input[1].split('\r\n')[1]);
//   const nearby = input[2]
//     .split('\r\n')
//     .slice(1)
//     .map(buildTicket)
//     .filter((tkt) => validTicket(rules, tkt));
//   const assignment = assignFields(rules, nearby);
//   console.log(assignment);
//   const result = Object.entries(assignment)
//     .filter(([key, _]) => key.startsWith('departure'))
//     .map(([_, idx]) => BigInt(myTicket[idx]))
//     .reduce((acc, cur) => acc * cur, 1n);
//   console.log(result);
// }

// ====================================

// // class State {
// //   constructor(cells) {
// //     this.cells = cells;
// //   }

// //   static from2D(input) {
// //     const state = new State();
// //     state.cells = [input];
// //     return state;
// //   }

// //   cellAt(layer, row, col) {
// //     if (layer < 0 || this.cells.length <= layer) {
// //       return '.';
// //     } else if (row < 0 || this.cells[0].length <= row) {
// //       return '.';
// //     } else if (col < 0 || this.cells[0][0].length <= col) {
// //       return '.';
// //     } else {
// //       return this.cells[layer][row][col];
// //     }
// //   }

// //   neighbors(layer, row, col) {
// //     let count = 0;
// //     for (let l1 = layer - 1; l1 <= layer + 1; ++l1) {
// //       for (let r1 = row - 1; r1 <= row + 1; ++r1) {
// //         for (let c1 = col - 1; c1 <= col + 1; ++c1) {
// //           if ((layer !== l1 || row !== r1 || col !== c1) && this.cellAt(l1, r1, c1) === '#') {
// //             count += 1;
// //           }
// //         }
// //       }
// //     }
// //     return count;
// //   }

// //   active() {
// //     let count = 0;
// //     for (let layer = 0; layer < this.cells.length; ++layer) {
// //       for (let row = 0; row < this.cells[0].length; ++row) {
// //         for (let col = 0; col < this.cells[0][0].length; ++col) {
// //           if (this.cellAt(layer, row, col) === '#') {
// //             count += 1;
// //           }
// //         }
// //       }
// //     }
// //     return count;
// //   }

// //   cellStep(layer, row, col) {
// //     const n = this.neighbors(layer, row, col);
// //     switch (this.cellAt(layer, row, col)) {
// //       case '#':
// //         if (n === 2 || n === 3) {
// //           return '#';
// //         } else {
// //           return '.';
// //         }
// //       case '.':
// //         if (n === 3) {
// //           return '#';
// //         } else {
// //           return '.';
// //         }
// //     }
// //   }

// //   nextState() {
// //     const nlayers = this.cells.length + 1;
// //     const nrows = this.cells[0].length + 1;
// //     const ncols = this.cells[0].length + 1;
// //     const newCells = Array(nlayers);
// //     for (let layer = -1; layer < nlayers; ++layer) {
// //       const curLayer = Array(nrows);
// //       for (let row = -1; row < nrows; ++row) {
// //         const curRow = Array(ncols);
// //         for (let col = -1; col < ncols; ++col) {
// //           // curRow[col + 1] = this.cellAt(layer, row, col);
// //           // curRow[col + 1] = this.neighbors(layer, row, col);
// //           curRow[col + 1] = this.cellStep(layer, row, col);
// //         }
// //         curLayer[row + 1] = curRow;
// //       }
// //       newCells[layer + 1] = curLayer;
// //     }
// //     return new State(newCells);
// //   }

// //   printState() {
// //     for (let layer = 0; layer < this.cells.length; ++layer) {
// //       console.log(`Layer ${layer}`);
// //       for (let row = 0; row < this.cells[0].length; ++row) {
// //         console.log(this.cells[layer][row].join(''));
// //       }
// //     }
// //   }
// // }

// class State {
//   constructor(cells) {
//     this.cells = cells;
//   }

//   static from2D(input) {
//     const state = new State();
//     state.cells = [[input]];
//     return state;
//   }

//   cellAt(layer, row, col, hyper) {
//     if (layer < 0 || this.cells.length <= layer) {
//       return '.';
//     } else if (row < 0 || this.cells[0].length <= row) {
//       return '.';
//     } else if (col < 0 || this.cells[0][0].length <= col) {
//       return '.';
//     } else if (hyper < 0 || this.cells[0][0][0].length <= hyper) {
//       return '.';
//     } else {
//       return this.cells[layer][row][col][hyper];
//     }
//   }

//   neighbors(layer, row, col, hyper) {
//     let count = 0;
//     for (let l1 = layer - 1; l1 <= layer + 1; ++l1) {
//       for (let r1 = row - 1; r1 <= row + 1; ++r1) {
//         for (let c1 = col - 1; c1 <= col + 1; ++c1) {
//           for (let h1 = hyper - 1; h1 <= hyper + 1; ++h1) {
//             if ((layer !== l1 || row !== r1 || col !== c1 || hyper !== h1)
//               && this.cellAt(l1, r1, c1, h1) === '#') {
//               count += 1;
//             }
//           }
//         }
//       }
//     }
//     return count;
//   }

//   active() {
//     let count = 0;
//     for (let layer = 0; layer < this.cells.length; ++layer) {
//       for (let row = 0; row < this.cells[0].length; ++row) {
//         for (let col = 0; col < this.cells[0][0].length; ++col) {
//           for (let hyper = 0; hyper < this.cells[0][0][0].length; ++hyper) {
//             if (this.cellAt(layer, row, col, hyper) === '#') {
//               count += 1;
//             }
//           }
//         }
//       }
//     }
//     return count;
//   }

//   cellStep(layer, row, col, hyper) {
//     const n = this.neighbors(layer, row, col, hyper);
//     switch (this.cellAt(layer, row, col, hyper)) {
//       case '#':
//         if (n === 2 || n === 3) {
//           return '#';
//         } else {
//           return '.';
//         }
//       case '.':
//         if (n === 3) {
//           return '#';
//         } else {
//           return '.';
//         }
//     }
//   }

//   nextState() {
//     const nlayers = this.cells.length + 1;
//     const nrows = this.cells[0].length + 1;
//     const ncols = this.cells[0][0].length + 1;
//     const nhyper = this.cells[0][0][0].length + 1;
//     // console.log(`nS ${nlayers} ${nrows} ${ncols} ${nhyper}`);
//     const newCells = Array(nlayers);
//     for (let layer = -1; layer < nlayers; ++layer) {
//       const curLayer = Array(nrows);
//       for (let row = -1; row < nrows; ++row) {
//         const curRow = Array(ncols);
//         for (let col = -1; col < ncols; ++col) {
//           const curCol = Array(nhyper);
//           for (let hyper = -1; hyper < nhyper; ++hyper) {
//             // curCol[hyper + 1] = '.';
//             // curCol[hyper + 1] = this.cellAt(layer, row, col, hyper);
//             // curCol[hyper + 1] = this.neighbors(layer, row, col, hyper);
//             curCol[hyper + 1] = this.cellStep(layer, row, col, hyper);
//           }
//           curRow[col + 1] = curCol;
//         }
//         curLayer[row + 1] = curRow;
//       }
//       newCells[layer + 1] = curLayer;
//     }
//     return new State(newCells);
//   }

//   printState() {
//     for (let layer = 0; layer < this.cells.length; ++layer) {
//       for (let row = 0; row < this.cells[0].length; ++row) {
//         console.log(`Layer ${layer} ${row}`);
//         for (let col = 0; col < this.cells[0][0].length; ++col) {
//           // console.log(this.cells[layer][row][col])
//           console.log(this.cells[layer][row][col].join(''));
//         }
//       }
//     }
//   }
// }

// function main() {
//   const input = fs.readFileSync('inputs/day17')
//     .toString()
//     .trim()
//     .split('\r\n')
//     .map((ln) => ln.split(''));
//   let state = State.from2D(input);
//   for (let cycle = 0; cycle < 6; ++cycle) {
//     // state.printState();
//     // console.log(state.active());
//     state = state.nextState();
//   }
//   state.printState();
//   console.log(state.active());
// }

// ====================================

// // function parse(str) {
// //   const match = str.match(/\d+/);
// //   if (match) {
// //     return Number.parseInt(str, 10);
// //   } else {
// //     switch (str) {
// //       case '+', '*':
// //         return str;
// //       default:
// //         return false;
// //     }
// //   }
// // }

// function numberP(str) {
//   return /^\d+$/.test(str);
// }

// class ExprStack {
//   constructor() {
//     this.stack = [];
//     this.state = 'empty';
//   }

//   // push(elt) {
//   //   if (typeof elt === 'number' && this.state === 'empty') {
//   //     this.stack.push(elt);
//   //     this.state = 'function';
//   //   } else if (typeof elt === 'function' && this.state === 'function') {
//   //     this.stack.push(elt);
//   //     this.state = 'completing'
//   //   } else if (typeof elt === 'number' && this.state === 'completing') {
//   //     const op = this.stack.pop();
//   //     const arg1 = this.stack.pop();
//   //     this.stack.push(op(arg1, elt));
//   //     this.state = 'function';
//   //   } else {
//   //     throw new Error('stack in wrong state');
//   //   }
//   // }

//   push(elt) {
//     if (numberP(elt)) {
//       if (this.state === 'empty') {
//         this.stack.push(Number.parseInt(elt, 10));
//         this.state = 'number';
//       } else if (this.state === 'plus') {
//         const arg = this.stack.pop();
//         this.stack.push(Number.parseInt(elt, 10) + arg);
//         this.state = 'number';
//       } else if (this.state === 'times') {
//         this.stack.push(Number.parseInt(elt, 10));
//         this.state = 'number';
//       }
//     } else if (elt === '+') {
//       this.state = 'plus';
//     } else if (elt === '*') {
//       this.state = 'times';
//     }
//   }

//   pop() {
//     let value = this.stack.reduce((acc, cur) => acc * cur, 1);
//     this.stack = [];
//     this.state = 'empty';
//     return value;
//   }
// }

// function evaluate(input) {
//   let line = input;
//   const stack = new ExprStack;
//   while (line.length > 0) {
//     const elt = line.shift();
//     if (elt === '(') {
//       stack.push(evaluate(line));
//     } else if (elt === ')') {
//       break;
//     } else {
//       stack.push(elt);
//     }
//   }
//   return stack.pop();
// }

// function main() {
//   const input = fs.readFileSync('inputs/day18')
//     .toString()
//     .trim()
//     .split('\r\n')
//     .map((ln) => ln.split('').filter((elt) => elt !== ' '));
//   const result = input.map(evaluate);
//   console.log(result.reduce((acc, cur) => acc + BigInt(cur), 0n));
// }

// ====================================

// function makeRules(lines) {
//   const terminals = [];
//   const nonterminals = [];
//   lines.forEach((ln) => {
//     const [head, body] = ln.split(': ').map((s) => s.trim());
//     if (/"\w"/.test(body)) {
//       // terminal
//       terminals.push([head, body[1]]);
//     } else {
//       // nonterminal
//       nonterminals.push([
//         head,
//         body.split(' | ').map((seq) => seq.split(' '))
//       ]);
//     }
//   });
//   return {
//     'terminals': terminals.reduce((m, [h, ch]) => {
//       m[h] = ch;
//       return m
//     }, {}),
//     'nonterminals': nonterminals.reduce((m, [h, b]) => {
//       m[h] = b;
//       return m;
//     }, {}),
//   };
// }

// // function makeRegex(rules, rule = '0') {
// //   if (rules.terminals.hasOwnProperty(rule)) {
// //     return rules.terminals[rule];
// //   } else {
// //     const internals = rules.nonterminals[rule]
// //       .map((body) => body.map((sub) => makeRegex(rules, sub)).join(''))
// //       .join('|');
// //     return `(${internals})`;
// //   }
// // }

// function makeRegex(rules, rule = '0') {
//   if (rules.terminals.hasOwnProperty(rule)) {
//     return rules.terminals[rule];
//   } else {
//     const internals = rules.nonterminals[rule]
//       .map((body) => body.map((sub) => makeRegex(rules, sub)).join(''))
//       .join('|');
//     return `(?:${internals})`;
//   }
// }

// // function main() {
// //   const input = fs.readFileSync('inputs/day19b')
// //     .toString()
// //     .trim()
// //     .split('\r\n\r\n');
// //   const rules = makeRules(input[0].split('\r\n'));

// //   const pattern = `^${makeRegex(rules)}$`;
// //   console.log(pattern);
// //   const r = new RegExp(pattern);
// //   const result = input[1].split('\r\n')
// //     .filter(msg => r.test(msg))
// //     .reduce((acc, _) => acc + 1, 0);
// //   console.log(result);
// // }

// function patterns(rules) {
//   const p42 = [];
//   for (let i = 0; i < 10; ++i) {
//     p42.push(`^${makeRegex(rules, '42')}{${i}}`);
//   }
//   const p31 = [];
//   for (let i = 0; i < 10; ++i) {
//     p31.push(`${makeRegex(rules, '31')}{${i}}$`);
//   }
//   return {
//     42: p42,
//     31: p31,
//   }
// }

// function main() {
//   const input = fs.readFileSync('inputs/day19')
//     .toString()
//     .trim()
//     .split('\r\n\r\n');
//   const rules = makeRules(input[0].split('\r\n'));

//   const pats = patterns(rules);

//   const result = input[1].split('\r\n')
//     .map(msg => {
//       for (let i = 1; i < 10; ++i) {
//         const match = msg.match(new RegExp(pats[42][i]));
//         if (!match) {
//           return false;
//         }
//         const remainder = msg.slice(match[0].length);
//         for (let j = 1; j < 10; ++j) {
//           if (remainder.match(new RegExp(`${pats[42][j]}${pats[31][j]}`))) {
//             return true;
//           }
//         }
//       }
//       return false;
//     })
//     .reduce((acc, cur) => acc + (cur ? 1 : 0), 0);
//   console.log(result);
// }

// ====================================

// function toBits(chars) {
//   return chars.reduce((acc, ch) => (acc * 2) + (ch === '#' ? 1 : 0), 0);
// }

// const seaMonster = [
//   '                  # '.split(''),
//   '#    ##    ##    ###'.split(''),
//   ' #  #  #  #  #  #   '.split(''),
// ];

// class Tile {
//   constructor(id, data) {
//     this.id = id;
//     this.data = data;
//   }

//   static fromText(text) {
//     const lines = text.split('\r\n');
//     let m = lines[0].match(/^Tile (\d+):$/);
//     if (!m) {
//       throw new Error('bad tile: ' + text);
//     }
//     return new Tile(Number.parseInt(m[1], 10), lines.slice(1).map((ln) => ln.split('')))
//   }

//   toString() {
//     return this.data.map((r) => r.join('')).join('\n');
//   }

//   top() {
//     return toBits(this.data[0]);
//   }

//   bottom() {
//     return toBits(this.data[this.data.length - 1]);
//   }

//   left() {
//     return toBits(this.data.map((r) => r[0]));
//   }

//   right() {
//     return toBits(this.data.map((r) => r[r.length - 1]));
//   }

//   flip() {
//     const copy = Array.from(this.data);
//     copy.reverse();
//     return new Tile(this.id, copy);
//   }

//   rotate() {
//     const rows = this.data.length;
//     const result = [];
//     for (let i = 0; i < rows; ++i) {
//       result.push(Array(rows));
//     }
//     for (let i = 0; i < rows; ++i) {
//       for (let j = 0; j < rows; ++j) {
//         result[j][rows - 1 - i] = this.data[i][j];
//       }
//     }
//     return new Tile(this.id, result);
//   }

//   transformations() {
//     const t90 = this.rotate();
//     const t180 = t90.rotate();
//     const t270 = t180.rotate();
//     return [
//       this,
//       t90,
//       t180,
//       t270,
//       this.flip(),
//       t90.flip(),
//       t180.flip(),
//       t270.flip(),
//     ];
//   }

//   removeBorders() {
//     const data = this.data.slice(1, this.data.length - 1)
//       .map((row) => row.slice(1, row.length - 1));
//     return new Tile(this.id, data);
//   }

//   static coalesce(tiles) {
//     const n = Math.sqrt(tiles.length);
//     const rows = tiles[0].data.length;
//     const data = [];
//     for (let strip = 0; strip < tiles.length; strip += n) {
//       const sTiles = tiles.slice(strip, strip + n);
//       for (let i = 0; i < rows; ++i) {
//         let row = sTiles.map(t => t.data[i])
//           .reduce((acc, row) => acc.concat(row), []);
//         data.push(row);
//       }
//     }
//     return new Tile('composite', data);
//   }

//   seaMonsterAt(row, col) {
//     for (let r = 0; r < seaMonster.length; ++r) {
//       for (let c = 0; c < seaMonster[0].length; ++c) {
//         if (seaMonster[r][c] === '#' && this.data[row + r][col + c] !== '#') {
//           return false;
//         }
//       }
//     }
//     return true;
//   }

//   markSeaMonsterAt(row, col) {
//     for (let r = 0; r < seaMonster.length; ++r) {
//       for (let c = 0; c < seaMonster[0].length; ++c) {
//         if (seaMonster[r][c] === '#') {
//           this.data[row + r][col + c] = 'O';
//         }
//       }
//     }
//   }

//   markSeaMonsters() {
//     let found = false;
//     for (let i = 0; i < this.data.length - seaMonster.length; ++i) {
//       for (let j = 0; j < this.data[0].length - seaMonster[0].length; ++j) {
//         if (this.seaMonsterAt(i, j)) {
//           found = true;
//           this.markSeaMonsterAt(i, j);
//         }
//       }
//     }
//     return found;
//   }

//   roughness() {
//     let count = 0;
//     for (let i = 0; i < this.data.length; ++i) {
//       for (let j = 0; j < this.data[0].length; ++j) {
//         if (this.data[i][j] === '#') {
//           count += 1;
//         }
//       }
//     }
//     return count;
//   }
// }

// function partialValid(n, image) {
//   const current = image[image.length - 1];
//   const row = Math.floor((image.length - 1) / n);
//   const column = (image.length - 1) % n;
//   if (row > 0) {
//     const up = image[(row - 1) * n + column];
//     if (up.bottom() !== current.top()) {
//       return false;
//     }
//   }
//   if (column > 0) {
//     const left = image[row * n + (column - 1)];
//     if (left.right() !== current.left()) {
//       return false;
//     }
//   }
//   return true;
// }

// function build(n, tiles) {
//   const queue = [[[], tiles]];
//   while (queue.length > 0) {
//     console.log(`current queue ${queue.length}`);
//     const [image, remaining] = queue.pop();
//     if (remaining.length === 0) {
//       return image;
//     }
//     for (let i = 0; i < remaining.length; ++i) {
//       const current = remaining[i];
//       const prefix = remaining.slice(0, i);
//       const suffix = remaining.slice(i + 1);
//       for (let transform of current.transformations()) {
//         const newImage = Array.from(image);
//         newImage.push(transform);
//         if (partialValid(n, newImage)) {
//           queue.unshift([newImage, Array.from(prefix).concat(suffix)]);
//         }
//       }
//     }
//   }
//   return null;
// }

// // function main() {
// //   const input = fs.readFileSync('inputs/day20')
// //     .toString()
// //     .trim()
// //     .split('\r\n\r\n')
// //     .map((t) => Tile.fromText(t));
// //   console.log(input.length);

// //   const n = Math.sqrt(input.length);

// //   const image = build(n, input);
// //   console.log(image.map((t) => t.id));
// //   const ids = [[0, 0], [0, n - 1], [n - 1, 0], [n - 1, n - 1]]
// //     .map(([r, c]) => r * n + c)
// //     .map((i) => image[i].id)
// //     .reduce((acc, cur) => acc * cur, 1);
// //   console.log(ids);
// // }

// function main() {
//   const input = fs.readFileSync('inputs/day20')
//     .toString()
//     .trim()
//     .split('\r\n\r\n')
//     .map((t) => Tile.fromText(t));
//   console.log(input.length);

//   const n = Math.sqrt(input.length);

//   const image = build(n, input);
//   const composite = Tile.coalesce(image.map((t) => t.removeBorders()));
//   for (let transformed of composite.transformations()) {
//     if (transformed.markSeaMonsters()) {
//       console.log(transformed.toString());
//       console.log(transformed.roughness());
//     }
//   }
// }

// ====================================

// function union(s1, s2) {
//   return new Set([...s1, ...s2]);
// }

// function intersection(s1, s2) {
//   return new Set(
//     [...s1].filter(elt => s2.has(elt))
//   );
// }

// function difference(s1, s2) {
//   return new Set(
//     [...s1].filter(elt => !s2.has(elt))
//   );
// }

// function allerganMapping(input) {
//   const allergenMap = input.reduce((map, [ingredients, allergens]) => {
//     allergens.forEach((allergen) => {
//       const iSet = new Set(ingredients);
//       if (map.hasOwnProperty(allergen)) {
//         map[allergen] = intersection(map[allergen], iSet);
//       } else {
//         map[allergen] = iSet;
//       }
//     });
//     return map;
//   }, {});

//   const allergenMapping = Object.entries(allergenMap);
//   while (!allergenMapping.every(([a, i]) => i.size === 1)) {
//     const identified = allergenMapping.filter(([a, i]) => i.size === 1).reduce((s, [a, i]) => union(s, i), new Set());
//     for (let i = 0; i < allergenMapping.length; ++i) {
//       if (allergenMapping[i][1].size > 1) {
//         allergenMapping[i][1] = difference(allergenMapping[i][1], identified);
//       }
//     }
//   }

//   return allergenMapping.reduce((map, elt) => {
//     map[elt[0]] = elt[1];
//     return map;
//   }, {})
// }

// function main() {
//   const input = fs.readFileSync('inputs/day21')
//     .toString()
//     .trim()
//     .split('\r\n')
//     .map((ln) => {
//       const match = ln.match(/([^(]*) \(contains ([^)]*)\)/);
//       const ingredients = match[1].trim().split(' ');
//       const allergens = match[2].trim().split(', ');
//       return [ingredients, allergens];
//     });

//   const ingredients = input.map(([i, a]) => new Set(i)).reduce((s, i) => union(s, i), new Set());
//   const allergans = input.map(([i, a]) => new Set(a)).reduce((s, a) => union(s, a), new Set());
//   const allerganMap = allerganMapping(input);

//   // console.log(ingredients);
//   // console.log(allergans);
//   // console.log(allerganMap);

//   const badIngredients = Object.values(allerganMap).reduce((s, i) => union(s, i), new Set());
//   const goodIngredients = difference(ingredients, badIngredients);

//   const appearances = input.map(([ing, _]) =>
//     ing.filter((i) => goodIngredients.has(i))
//       .reduce((a, s) => a + 1, 0))
//     .reduce((a, s) => a + s, 0);
//   console.log(appearances);

//   console.log(allerganMap);
//   const x = Object.entries(allerganMap)
//     .map(([a, i]) => [a, [...i][0]])
//     .sort((a,b) => a[0].localeCompare(b[0]))
//     .map(([a,i]) => i)
//     .join(',');
//   console.log(x);
// }

// ====================================

// function textToDeck(text) {
//   return text.split('\r\n')
//     .slice(1)
//     .map((ln) => Number.parseInt(ln, 10));
// }

// function score(deck) {
//   return deck.reverse()
//     .map((val, ind) => val * (ind + 1))
//     .reduce((acc, val) => acc + val, 0);
// }

// // function main() {
// //   const input = fs.readFileSync('inputs/day22')
// //     .toString()
// //     .trim()
// //     .split('\r\n\r\n');
// //   const deck1 = textToDeck(input[0]);
// //   const deck2 = textToDeck(input[1]);
// //   while (deck1.length > 0 && deck2.length > 0) {
// //     const card1 = deck1.shift();
// //     const card2 = deck2.shift();
// //     console.log(`1: ${card1} 2: ${card2}`);
// //     if (card1 < card2) {
// //       deck2.push(card2);
// //       deck2.push(card1);
// //     } else {
// //       deck1.push(card1);
// //       deck1.push(card2);
// //     }
// //   }
// //   if (deck1.length > 0) {
// //     console.log(`1: ${deck1}`);
// //     console.log(score(deck1));
// //   } else {
// //     console.log(`2: ${deck2}`);
// //     console.log(score(deck2));
// //   }
// // }

// function recursiveCombatGame(gameNumber) {
//   const seen = new Set();

//   return function recursiveCombat(deck1, deck2) {
//     console.log(`Game ${gameNumber}`);
//     while (deck1.length > 0 && deck2.length > 0) {
//       const deckStr = `${deck1.join('-')}/${deck2.join('-')}`;
//       console.log(`Round ${seen.size + 1}: ${deckStr}`);
//       if (seen.has(deckStr)) {
//         return ['game', 1, deck1];
//       }
//       seen.add(deckStr);
//       const card1 = deck1.shift();
//       const card2 = deck2.shift();
//       if (card1 <= deck1.length && card2 <= deck2.length) {
//         // recursive game
//         // console.log('recursive game');
//         const result = recursiveCombatGame(++gameNumber)(
//           Array.from(deck1).splice(0, card1),
//           Array.from(deck2).splice(0, card2),
//         );
//         // console.log('end recursive game');
//         switch (result[0]) {
//           case 'round':
//             if (result[1] === 1) {
//               deck1.push(card1);
//               deck1.push(card2);
//             } else {
//               deck2.push(card2);
//               deck2.push(card1);
//             }
//             break;
//           case 'game':
//             deck1.push(card1);
//             deck1.push(card2);
//             break;
//         }
//       } else {
//         if (card1 < card2) {
//           deck2.push(card2);
//           deck2.push(card1);
//         } else {
//           deck1.push(card1);
//           deck1.push(card2);
//         }
//       }
//     }
//     if (deck1.length > 0) {
//       return ['round', 1, deck1];
//     } else {
//       return ['round', 2, deck2];
//     }
//   };
// }

// function main() {
//   const input = fs.readFileSync('inputs/day22')
//     .toString()
//     .trim()
//     .split('\r\n\r\n');
//   const deck1 = textToDeck(input[0]);
//   const deck2 = textToDeck(input[1]);
//   const result = recursiveCombatGame(1)(deck1, deck2);
//   console.log(result);
//   console.log(score(result[2]));
// }

// ====================================

// // function circularSlice(ary, start, end) {
// //   start = start % ary.length;
// //   end = end % ary.length;
// //   if (start < end) {
// //     return [
// //       ary.slice(start, end),
// //       [...ary.slice(0, start), ...ary.slice(end)],
// //     ];
// //   } else {
// //     return [
// //       [...ary.slice(start), ...ary.slice(0, end)],
// //       ary.slice(end, start),
// //     ];
// //   }
// // }

// // function circularInsert(ary, loc, elts) {
// //   return [...ary.slice(0, loc), ...elts, ...ary.slice(loc)];
// // }

// const plusMod = (i, j, m) => (i + j) % m;
// const incMod = (i, m) => plusMod(i, 1, m);
// const minusMod = (i, j, m) => (i - j < 0) ? m - (j - i) : i - j;
// const decMod = (i, m) => minusMod(i, 1, m);

// // class GameState {
// //   constructor(str) {
// //     this.cups = str.split('').map(n => Number.parseInt(n, 10));
// //     this.current = this.cups[0];
// //     this.idMod = this.cups.reduce((max, cur) => (cur > max) ? cur : max, 0) + 1;
// //     for (let i = this.idMod; i < 1000000; ++i) {
// //       this.cups.push(i);
// //     }
// //     this.idMod = 1000000 + 1;
// //     this.buffer = Array(3);
// //   }

// //   move() {
// //     // console.log(`cups: ${this.toString()}`);

// //     const currentId = this.cups.findIndex((cup) => cup === this.current);

// //     const rStart = plusMod(currentId, 1, this.cups.length);
// //     const rEnd = plusMod(currentId, 4, this.cups.length);
// //     for (let i = 0; i < 3; ++i) {
// //       this.buffer[i] = this.cups[plusMod(rStart, i, this.cups.length)];
// //     }
// //     // console.log(`pick up: ${this.buffer}`);

// //     let destination = minusMod(this.current, 1, this.idMod);
// //     if (destination === 0) {
// //       destination = this.idMod - 1;
// //     }
// //     while (this.buffer.includes(destination)) {
// //       destination = minusMod(destination, 1, this.idMod);
// //       if (destination === 0) {
// //         destination = this.idMod - 1;
// //       }
// //     }
// //     // console.log(`destination: ${destination}`);

// //     if (rStart < rEnd) {
// //       this.cups.copyWithin(rStart, rEnd);
// //     } else {
// //       this.cups.copyWithin(0, rEnd, rStart);
// //     }

// //     const destinationId = incMod(this.cups.findIndex((cup) => cup === destination), this.cups.length);

// //     this.cups.copyWithin(destinationId + 3, destinationId, this.cups.length - 3);
// //     for (let i = 0; i < 3; ++i) {
// //       this.cups[destinationId + i] = this.buffer[i];
// //     }

// //     const idx = incMod(this.cups.findIndex((cup) => cup === this.current) , this.cups.length);
// //     this.current = this.cups[idx];
// //   }

// //   toString() {
// //     return this.cups.map((cup) => (cup === this.current) ? `(${cup})` : `${cup}`).join();
// //   }

// //   finalOrder() {
// //     const idx = this.cups.findIndex((cup) => cup === 1);
// //     const start = incMod(idx, this.cups.length);
// //     return [...this.cups.slice(start), ...this.cups.slice(0, idx)].join('');
// //   }
// // }

// class GameState {
//   constructor(text) {
//     let ary = text.split('').map((ch) => Number.parseInt(ch, 10));
//     let max = ary.reduce((max, cur) => (cur > max) ? cur : max);
//     for (let i = max + 1; i < 1000001; ++i) {
//       ary.push(i);
//     }
//     this.current = ary[0];
//     this.max = ary[0];
//     this.map = {};
//     for (let i = 0; i < ary.length - 1; ++i) {
//       if (this.max < ary[i + 1]) {
//         this.max = ary[i + 1];
//       }
//       this.map[ary[i]] = ary[i + 1];
//     }
//     this.last = ary[ary.length - 1];
//     this.map[this.last] = 'X';
//   }

//   toString() {
//     const result = [`(${this.current})`];
//     for (let cur = this.map[this.current]; cur !== 'X'; cur = this.map[cur]) {
//       result.push(cur);
//     }
//     return result.join(' ');
//   }

//   move() {
//     // console.log(`cups: ${this.toString()}`);
//     const buffer = Array(3);
//     let cur = this.current;
//     for (let i = 0; i < 3; i++) {
//       cur = this.map[cur];
//       buffer[i] = cur;
//     }
//     this.map[this.current] = this.map[buffer[2]];
//     // console.log(`pick up: ${buffer}`);

//     let dest = this.current - 1;
//     if (dest < 1) { dest = this.max; }
//     while (buffer.includes(dest)) {
//       dest = dest - 1;
//       if (dest < 1) { dest = this.max; }
//     }
//     // console.log(`destination: ${dest}`);

//     this.map[buffer[2]] = this.map[dest];
//     const current = this.current;
//     this.current = this.map[current];
//     if (this.map[dest] === 'X') {
//       this.last = buffer[2];
//     }
//     this.map[dest] = buffer[0];
//     this.map[this.last] = current;
//     this.map[current] = 'X';
//     this.last = current;
// }

//   finalOrder() {
//     const result = [];
//     for (let i = 1; this.map[i] !== 'X'; i = this.map[i]) {
//       result.push(this.map[i].toString());
//     }
//     if (this.current !== 1) {
//       for (let i = this.current; i !== 1; i = this.map[i]) {
//         result.push(i.toString());
//       }
//     }
//     return result.join('');
//   }
// }

// function main() {
//   // const game = new GameState('389125467');
//   const game = new GameState('186524973');
//   for (let i = 0; i < 10000000; ++i) {
//     // console.log(`--- move ${i + 1} ---`);
//     game.move();
//   }
//   // console.log(game.toString());
//   // console.log(game.finalOrder());
//   const one = game.map[1];
//   const two = game.map[one];
//   console.log(`${one}, ${two}`);
//   console.log(BigInt(one) * BigInt(two));
// }

// ====================================

// See https://www.redblobgames.com/grids/hexagons/#coordinates
const CUBE_DIRECTIONS = {
  ne: [+1, -1, 0],
  e: [+1, 0, -1],
  se: [0, +1, -1],
  sw: [-1, +1, 0],
  w: [-1, 0, +1],
  nw: [0, -1, +1],
};

function addCoord(a, b) {
  return a.map((av, aidx) => av + b[aidx]);
}

function transform(direction, location) {
  return addCoord(CUBE_DIRECTIONS[direction], location);
}

function neighbors(location) {
  return Object.values(CUBE_DIRECTIONS)
    .map((dir) => addCoord(dir, location));
}

function locateTile(line) {
  let location = [0, 0, 0];
  while (line.length > 0) {
    if (line.startsWith('e') || line.startsWith('w')) {
      location = transform(line.substring(0, 1), location);
      line = line.substring(1);
    } else {
      location = transform(line.substring(0, 2), location);
      line = line.substring(2);
    }
  }
  return location;
}

function blackNeighbors(blackSet, location) {
  return neighbors(location)
    .filter((hex) => blackSet.has(hex.toString()))
    .length;
}

function main() {
  const input = fs.readFileSync('inputs/day24')
    .toString()
    .trim()
    .split('\r\n');

  const seen = {};
  let black = input.map(locateTile)
    .map(loc => {
      const locS = loc.toString();
      seen[locS] = loc;
      return locS;
    })
    .reduce((black, location) => {
      if (black.has(location)) {
        black.delete(location);
        return black;
      } else {
        return black.add(location);
      }
    }, new Set());

  console.log(black.size);

  for (let i = 0; i < 100; ++i) {
    const arena = Array.from(black.values())
      .map((locS) => seen[locS])
      .map(neighbors)
      .reduce((set, hexs) => {
        return hexs.reduce((set, hex) => {
          const locS = hex.toString();
          seen[locS] = hex;
          return set.add(locS);
        }, set);
      }, new Set([...black]));

    black = [...arena].map(str => [str, seen[str]])
      .filter(([str, loc]) => {
        const n = blackNeighbors(black, loc);
        if (black.has(str)) {
          return n !== 0 && n <= 2;
        } else {
          return n === 2;
        }
      })
      .reduce((black, [str, _]) => black.add(str), new Set());

    console.log(black.size);
  }

}

// ====================================

main();
