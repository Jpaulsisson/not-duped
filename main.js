/////// Every number in the array has a dupe except one of them //////////////
///////////////////// find it ////////////////////////////////////////////////

const example = [1, 1, 2, 2, 3, 3, 4]


function noDupe(arr) {
  let originals = new Set();
  let dupes = new Set();
  let answer;
  for (const item of arr) {                                               //////my solve is fine.... this weird solve underneath is blowing my mind though
    originals.has(item) ? dupes.add(item) : originals.add(item);
  }
  for (const item of arr) {
    if (!dupes.has(item)) {
      answer = item;
    }
  } return answer;
}


console.log(noDupe(example));


function WHATTTTTTTT(arr) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {                                //////////somebody explain this shit to me
    result ^= arr[i];                                   
  }
  return result
}

console.log(WHATTTTTTTT(example))