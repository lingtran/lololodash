var _ = require('lodash');

var towns = {
  Hamburg: { population: 1.698 },
  Strasbourg: { population: 0.272 },
  Rome: { population: 2.753 },
  Dublin: { population: 0.528 }
};

var addSize = function(towns){
  return _.forEach(
    towns,
    function(town){
      if (town.population > 1.58){
        town.size = 'big';
      } else if(town.population < 0.28){
        town.size:'small';
      } else {
        town.size: 'med';
      }
  }
);
};

module.exports = addSize;
