var _ = require("lodash");

var arr = [ { name: "mike",  income: 2563 },
  { name: "kim",   income: 1587 },
  { name: "liz",   income: 3541 },
  { name: "tom",   income: 2475 },
  { name: "bello", income: 987  },
  { name: "frank", income: 2975 } ];

var analysis = function(arr){
  var result = {
    "average": 0,
  };

  var totalIncome = _.reduce(arr, function(sum, item){
    return sum + item.income;
  }, 0);

  result.average = totalIncome/(arr.length);

  arr = _.sortBy(arr, "income");

  result.underperform = _.filter(arr, function(item){
    return item.income <= result.average;
  })

  result.overperform = _.filter(arr, function(item){
    return item.income > result.average;
  })

  return result;

}

module.exports = analysis;
