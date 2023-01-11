example = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
temp = [];
//prettier-ignore
const moveZeros = (array) => [...array.filter(e=>e!==0), ...array.filter(e=>e===0)]

console.log(moveZeros(example).join(", "));
