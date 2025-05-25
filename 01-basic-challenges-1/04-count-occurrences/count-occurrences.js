function countOccurrences(str, char) {
  return str.split("").filter((c) => c === char).length;
}

// function countOccurrences(str, char) {
//   let resultStr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       resultStr.push(str[i]);
//     }
//   }
//   return resultStr.length;
// }

module.exports = countOccurrences;
