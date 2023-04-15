const Filter = require("bad-words-es");
const { customBadWords } = require("./badWordsAll");

const customFilter = new Filter({ placeHolder: "*" }).addWords(
  ...Object.keys(customBadWords)
);

module.exports.customFilter = customFilter;
