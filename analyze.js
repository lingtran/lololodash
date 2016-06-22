var _ = require("lodash");

var analysis = function(arr){
  var result = {
    "average": 0,
  };

  var totalIncome = _.reduce(arr, function(sum, item){
    return sum + item.income;
  }, 0);

  result.average = totalIncome/(arr.length);

  arr = _.sortBy(arr, "income");

  filterArr(arr, result, result.average);

  return result;

}

function filterArr (arr, result, average) {
  result.underperform = _.filter(arr, function(item){
    return item.income <= average;
  })

  result.overperform = _.filter(arr, function(item){
    return item.income > average;
  })
}

module.exports = analysis;
