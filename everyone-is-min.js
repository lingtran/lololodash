var _ = require("lodash");


var grouping = function(collection){
  var sortedCollection = { hot: [], warm: [] };

  function collectionTemp (collection) {
    return collection > 19;
  }

  _.forEach(collection, function (item, name) {
    if (_.every(item, collectionTemp)) {
      sortedCollection.hot.push(name);
    } else if (_.some(item, collectionTemp)) {
      sortedCollection.warm.push(name);
    }
  });

  return sortedCollection;

};

module.exports = grouping;
