let ages = [20, 14, 65, 34, 8, 12, 23, 15, 24, 31, 21, 18, 17, 42, 9, 32];

forEach;
for (let i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}

ages.forEach(function (e) {
  console.log(e);
});

ages.forEach((e) => {
  console.log(e);
});

let sum = 0;
ages.forEach((age) => (sum += age));
console.log(sum);

// map

const minimum = ages.map(function (e) {
  if (e <= 18) {
    return 18;
  }
  return e;
});
console.log(minimum);

const minimum2 = ages.map((e) => (e <= 18 ? 18 : e));
console.log(minimum2);

const minimum3 = ages.filter((e, i) => i % 2 === 0);
console.log(minimum3);

ages.forEach((element, index, array) => {
  array[index] = element * 2;
});
console.log(ages);

const minimum4 = ages.every((e) => e > 20);
console.log(minimum4);

const minimum5 = ages.some((e) => e > 190);
console.log(minimum5);
