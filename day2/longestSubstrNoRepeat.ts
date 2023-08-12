// function lengthOfLongestSubstringDoesNotWork(s: string): number {
//   let left = 0,
//     right = 0;
//   let ans = 0;
//   let charMap = new Map();
//   while (right < s.length) {
//     if (charMap.get(s[right]) === undefined) {
//       charMap.set(s[right], right);
//     } else {
//       ans = Math.max(ans, right - left);
//       left = right;
//       charMap.clear();
//       charMap.set(s[right], right);
//     }
//     right++;
//   }

//   return ans;
// }

function lengthOfLongestSubstring(s: string): number {
  let ans = 0;
  let left = 0,
    right = 0;
  let charMap = new Map();

  if (s.length === 1) return 1;

  while (right < s.length) {
    while (charMap.has(s[right])) {
      charMap.delete(s[left]);
      left++;
    }
    if (!charMap.has(s[right])) {
      charMap.set(s[right], right);
      right++;
    }
    ans = Math.max(ans, right - left);
  }
  return ans;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("abaf"));
console.log(lengthOfLongestSubstring("a"));
console.log(lengthOfLongestSubstring("aaaaa"));
