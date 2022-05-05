// Contains Dups
function containsDup(nums) {
  const set = new Set();
  for (let n of nums) {
    if (set.has(n)) return true;
    set.add(n);
  }
  return false;
}

console.log(containsDup([1, 2, 3, 1])); // true
console.log(containsDup([1, 2, 3, 4])); // false
console.log(containsDup([1, 1, 2, 2, 3, 3, 44, 44])); // true

/**
 Other options
 1 - sort then compare current and next O(n) - but slow
 2 - hash map (not as quick as set)
 */
