var _ = require("lodash");


var chainedWords = function (words) {
  return _.chain(words)
  .map(function (word) {
    return word + "Chained";
  })
  .map(function (word) {
    return word.toUpperCase();
  })
  .sortBy()
  .value();
};


module.exports = chainedWords;
