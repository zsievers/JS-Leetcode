// 2 Sum

function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.hasOwnProperty(diff)) {
      return [map[diff], i];
    } else {
      map[nums[i]] = i;
    }
  }
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
console.log(twoSum([3, 3, 2, 5, 7, 22], 23)); // null
