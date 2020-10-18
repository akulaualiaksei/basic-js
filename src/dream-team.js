const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  let DreamTeamName = '';
  // console.log(typeof members === 'array');
  if (!Array.isArray(members)) {return false; };
  for (let i=0; i<members.length;i++) {
    if (typeof members[i] === 'string') {
      //console.log(members[i].trim()[0]);
      DreamTeamName += members[i].trim()[0].toUpperCase();
    }
  }
  if (DreamTeamName.length>0) {
    return DreamTeamName.split('').sort().join('');//DreamTeamName;
  } else {
    return false;
  }
};
