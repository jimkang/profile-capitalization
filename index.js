// Warning: Matches only English characters.
var upperAlphaRegex = /[A-Z]/g;
var lowerAlphaRegex = /[a-z]/g;

function profileCapitalization(word) {
  var profile = 'indeterminate';

  if (hasNoLowerCase(word) && word.match(upperAlphaRegex)) {
    profile = 'allcaps';
  } else if (hasNoUpperCase(word) && word.match(lowerAlphaRegex)) {
    profile = 'lowercase';
  } else if (word.length > 1 &&
    word.charAt(0).match(upperAlphaRegex) &&
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
