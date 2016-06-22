var _ = require("lodash");

var template = function (variable) {
  var text = 'Hello <%= name %> (logins: <%= login.length %>)';
  return _.template(text)(variable);
}

module.exports = template;
