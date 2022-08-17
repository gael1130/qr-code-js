list = [
  "193",
  "309",
  "458",
  "328",
  "183",
  "490",
  "479",
  "123",
  "174",
  "242",
  "132",
  "436",
  "342",
  "177",
  "455",
  "9",
  "350",
  "413",
  "172",
  "246",
  "204",
  "418",
  "159",
  "227",
  "429",
];
console.log(list);

let findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) != index);

console.log(findDuplicates(list)); // All duplicates
console.log([...new Set(findDuplicates(list))]); // Unique duplicates
