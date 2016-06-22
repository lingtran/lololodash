var _ = require("lodash");

var totalOrdersPerArticle = function(arr){
  var aggregator = [];
  var articles = _.groupBy(arr, "article");

  _.forEach(articles, function(item, key){
    var keyAsInt = parseInt(key);
    var total = _.reduce(item, function(sum, item){
      return sum + item.quantity;
    }, 0);

    aggregator.push({
      article: keyAsInt,
      total_orders: total
    })
  })

  _.sortBy(aggregator, "total_orders");
  return aggregator.reverse();
}

module.exports = totalOrdersPerArticle;
