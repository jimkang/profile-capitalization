function profileCapitalization(word) {
  var profile = 'indeterminate';

  if (hasNoLowerCase(word)) {
    profile = 'allcaps';
  }
  else if (hasNoUpperCase(word)) {
    profile = 'lowercase';
  }
  else if (word.length > 1 &&
    hasNoLowerCase(word.substr(0, 1)) &&
    hasNoUpperCase(word.substr(1))) {

    profile = 'firstonly';
  }

  return profile;
}

function hasNoLowerCase(word) {
  return word.toUpperCase() === word;
}

function hasNoUpperCase(word) {
  return word.toLowerCase() === word;
}

module.exports = profileCapitalization;
