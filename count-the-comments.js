var _ = require("lodash");

var countTheComments = function (arr) {
  return _.chain(arr)
  .groupBy("username")
  .map(function(arr, name){
    return {username: name, comment_count: _.size(arr)};
  })
  .sortBy(function(countedArr){
    return countedArr["comment_count"];
  }).reverse();
}


module.exports = countTheComments;
