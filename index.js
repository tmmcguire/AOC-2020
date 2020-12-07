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

function isValid(rec) {
  const keys = [
    'byr', // (Birth Year)
    'iyr', // (Issue Year)
    'eyr', // (Expiration Year)
    'hgt', // (Height)
    'hcl', // (Hair Color)
    'ecl', // (Eye Color)
    'pid', // (Passport ID)
    // 'cid', // (Country ID)
  ];
  return keys.every((k) => rec.hasOwnProperty(k));
}

function validYear(v, low, hi) {
  if (v.match(/^\d\d\d\d$/)) {
    const n = Number.parseInt(v, 10);
    return low <= n && n <= hi;
  }
  return false;
}

function validHgt(v) {
  const match = v.match(/^(\d+)(cm|in)$/);
  if (match) {
    const n = Number.parseInt(match[1], 10);
    switch (match[2]) {
      case 'cm':
        return 150 <= n && n <= 193;
      case 'in':
        return 59 <= n && n <= 76;
      default:
        return false;
    }
  }
  return false;
}

function validHcl(v) {
  const res = v.match(/^#[0-9a-f]{6}$/);
  return res;
}

function validEcl(v) {
  switch (v) {
    case 'amb':
    case 'blu':
    case 'brn':
    case 'gry':
    case 'grn':
    case 'hzl':
    case 'oth':
      return true;
    default:
      return false;
  }
}

function validPid(v) {
  const res = v.match(/^\d{9}$/);
  return res;
}

function isValid2(rec) {
  const keys = [
    ['byr', (byr) => validYear(byr, 1920, 2002)], // (Birth Year) - four digits; at least 1920 and at most 2002.
    ['iyr', (iyr) => validYear(iyr, 2010, 2020)], // (Issue Year) - four digits; at least 2010 and at most 2020.
    ['eyr', (eyr) => validYear(eyr, 2020, 2030)], // (Expiration Year) - four digits; at least 2020 and at most 2030.
    ['hgt', validHgt], // (Height) - a number followed by either cm or in:
    //  If cm, the number must be at least 150 and at most 193.
    //  If in, the number must be at least 59 and at most 76.
    ['hcl', validHcl], // (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    ['ecl', validEcl], // (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    ['pid', validPid], // (Passport ID) - a nine-digit number, including leading zeroes.
    // 'cid', // (Country ID) - ignored, missing or not.
  ];
  return keys.every(([k, p]) => rec.hasOwnProperty(k) && p(rec[k]));
}

function main() {
  const input = fs.readFileSync('inputs/7')
    .toString()
    .split('\r\n\r\n')
    .map((rec) => {
      const obj = {};
      rec.split(/\s+/).forEach((pr => {
        const [key, value] = pr.split(':');
        obj[key] = value;
      }));
      return obj;
    });
  // console.log(input);
  console.log(input.filter(isValid2).length);
}

// ====================================

main();
