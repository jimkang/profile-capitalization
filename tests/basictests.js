var test = require('tape');
var profileCapitalization = require('../index');

var testCases = [
  {
    word: 'BONUS',
    profile: 'allcaps'
  },
  {
    word: 'BEef',
    profile: 'indeterminate'
  },
  {
    word: '1,000,000',
    profile: 'indeterminate'
  },
  {
    word: 'Smidgeo',
    profile: 'firstonly'
  },
  {
    word: 'cat',
    profile: 'lowercase'
  },
  {
    word: 'arpaBET',
    profile: 'indeterminate'
  },
  {
    word: 'Ronald',
    profile: 'firstonly'
  },
  {
    word: 'abc123',
    profile: 'lowercase'
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test('Test for ' + testCase.word, function basicTest(t) {
    t.equal(
      profileCapitalization(testCase.word),
      testCase.profile,
      'Profile is correct.'
    );
    t.end();
  });
}
