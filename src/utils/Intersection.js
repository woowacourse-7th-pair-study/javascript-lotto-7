export const Intersection = (arr1, arr2) => {
  let count = 0;

  arr1.forEach((number) => {
    if (arr2.includes(number)) {
      count += 1;
    }
  });

  return count;
};
