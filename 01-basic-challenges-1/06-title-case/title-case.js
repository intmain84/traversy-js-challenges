function titleCase(sent) {
  return sent
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// function titleCase(sent) {
//   let result = "";
//   for (let i = 0; i < sent.length; i++) {
//     if (i !== 0) {
//       if (sent[i - 1] == " ") {
//         result += sent[i].toUpperCase();
//       } else {
//         result += sent[i].toLowerCase();
//       }
//     } else {
//       result += sent[0].toUpperCase();
//     }
//   }
//   return result;
// }

module.exports = titleCase;
