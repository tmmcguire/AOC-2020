'use strict';

const { count } = require('console');
const fs = require('fs');
const { normalize } = require('path');
const { nextTick } = require('process');

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

// // State: {
// // loc: [<N coord>, <E coord>],
// // dir: <direction>,
// // }

// // Clockwise rotation
// const direction = {
//   0: [0, 1],  // East
//   1: [-1, 0], // South
//   2: [0, -1], // West
//   3: [1, 0],  // North
// };

// function state0() {
//   return {
//     loc: [0, 0],
//     dir: 0,
//   }
// }

// function update(state, [action, value]) {
//   switch (action) {
//     case 'N':
//       state.loc = [state.loc[0] + value, state.loc[1]];
//       return state;
//     case 'S':
//       state.loc = [state.loc[0] - value, state.loc[1]];
//       return state;
//     case 'E':
//       state.loc = [state.loc[0], state.loc[1] + value];
//       return state;
//     case 'W':
//       state.loc = [state.loc[0], state.loc[1] - value];
//       return state;
//     case 'L':
//       state.dir = (state.dir + 4 - (value / 90)) % 4;
//       return state;
//     case 'R':
//       state.dir = (state.dir + 4 + (value / 90)) % 4;
//       return state;
//     case 'F':
//       const [Nd, Ed] = direction[state.dir].map((d) => d * value);
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

// State: {
//  loc: [<N coord>, <E coord>],
//  way: [<N coord>, <E coord>],
// }

function state0() {
  return {
    loc: [0, 0],
    way: [1, 10],
  }
}

function rotateL([n, e]) {
  return [e, -1 * n];
}

function rotateR([n, e]) {
  return [-1 * e, n];
}

function update(state, [action, value]) {
  switch (action) {
    case 'N':
      state.way = [state.way[0] + value, state.way[1]];
      return state;
    case 'S':
      state.way = [state.way[0] - value, state.way[1]];
      return state;
    case 'E':
      state.way = [state.way[0], state.way[1] + value];
      return state;
    case 'W':
      state.way = [state.way[0], state.way[1] - value];
      return state;
    case 'L':
      switch (value) {
        case 270:
          state.way = rotateL(state.way);
        case 180:
          state.way = rotateL(state.way);
        case 90:
          state.way = rotateL(state.way);
      }
      return state;
    case 'R':
      switch (value) {
        case 270:
          state.way = rotateR(state.way);
        case 180:
          state.way = rotateR(state.way);
        case 90:
          state.way = rotateR(state.way);
      }
      return state;
    case 'F':
      const [Nd, Ed] = state.way.map((d) => d * value);
      state.loc = [state.loc[0] + Nd, state.loc[1] + Ed];
      return state;
    default:
      throw new Error(`update: ${action}?`);
  }
}

function main() {
  const input = fs.readFileSync('inputs/day12')
    .toString()
    .trim()
    .split('\r\n')
    .map((ln) => {
      const match = ln.match(/(\w)(\d+)/);
      if (match) {
        return [match[1], Number.parseInt(match[2], 10)];
      } else {
        throw new Error(`${ln}?`);
      }
    })
  const end = input.reduce(update, state0());
  const distance = Math.abs(end.loc[0]) + Math.abs(end.loc[1]);
  console.log(end);
  console.log(distance);
}

// ====================================

main();
