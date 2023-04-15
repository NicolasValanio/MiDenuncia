const badWords = require("bad-words-es");

const customBadWords = {
  hijueputa: "hijo de puta",
  malparido: "mal nacido",
  marica: "homosexual",
};
// console.log(badWords); // Imprime el objeto badWords
// console.log(customBadWords); // Imprime el objeto customBadWords
module.exports = { badWords, customBadWords };
