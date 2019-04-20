var theStagesOfJS = [
  "confidence",
  "sadness",
  "confusion",
  "realization",
  "debugging",
  "satisfaction"
];

var mapArrow1 = theStagesOfJS.map(item => {
  return item;
});
console.log(mapArrow1);
var mapArrow2 = theStagesOfJS.map((item, index) => {
  return `Stage ${index + 1}: ${item}`;
});
console.log(mapArrow2);
var mapArrow3 = theStagesOfJS.map((item, index) => `${index}: ${item}`);

console.log(mapArrow3);
