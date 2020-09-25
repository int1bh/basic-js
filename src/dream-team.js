const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
  let filtered = members.filter(function(name) {
    return typeof(name) === 'string';
    
  });
  let sortArr = filtered.join(',').toUpperCase().split(',');
console.log(sortArr);
  let dream = sortArr.map(function(name) {
    let trimName = name.trim();
    return trimName.slice(0,1);
  });
  return dream.sort().join('');
}
};
