// https://leetcode.com/problems/roman-to-integer/

/**
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */

interface val {
  [key: string]: number;
}

const value: val = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let parsedInt = 0,
    count = 1,
    i = 1;
  while (i <= s.length) {
    if (i < s.length && s[i - 1] === s[i]) {
      count++;
    } else {
      if (
        (s[i - 1] === "I" && ["V", "X"].includes(s[i])) ||
        (s[i - 1] === "X" && ["L", "C"].includes(s[i])) ||
        (s[i - 1] === "C" && ["D", "M"].includes(s[i]))
      ) {
        parsedInt += value[s[i]] - value[s[i - 1]];
        count = 0;
      } else {
        parsedInt += count * value[s[i - 1]];
        count = 1;
      }
    }
    i++;
  }

  return parsedInt;
}

console.log(romanToInt("XL"));