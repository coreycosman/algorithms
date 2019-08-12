// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams1(stringA, stringB) {
  let countA = {};
  let countB = {};

  const countLetters = (string, count) => {
    string.split("").forEach((char, i) => {
      char = char.toLowerCase();
      if (!count[char]) {
        count[char] = 1;
      } else {
        count[char]++;
      }
    });
    return count;
  };
  const cleanUp = count => {
    for (key in count) {
      if (key === " " || key === "!") {
        delete count[key];
      }
    }
    return count;
  };
  countA = cleanUp(countLetters(stringA, countA));
  countB = cleanUp(countLetters(stringB, countB));
  const compareObjects = (count1, count2) => {
    const compared = {};

    for (letter in count1) {
      if (count1[letter] === count2[letter]) {
        compared[letter] = count1[letter];
      }
    }
    return Object.keys(compared).length === Object.keys(count2).length || false;
  };
  return compareObjects(countA, countB);
}
// _______________________________________________
function anagrams2(stringA, stringB) {
  const countLetters = (string, count) => {
    string.split("").forEach((char, i) => {
      char = char.toLowerCase();
      if (char === "" || char === "!") return;
      !count[char] ? (count[char] = 1) : count[char]++;
    });
    return count;
  };

  const compareObjects = (count1, count2) => {
    const compared = {};
    for (letter in count1) {
      if (count1[letter] === count2[letter]) {
        compared[letter] = count1[letter];
      }
    }
    return Object.keys(compared).length === Object.keys(count2).length || false;
  };
  return compareObjects(countLetters(stringA, {}), countLetters(stringB, {}));
}
// _______________________________________________
function charMap(string) {
  let letterCount = {};
  string
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .forEach((char, i) => {
      letterCount[char] = letterCount[char] + 1 || 1;
    });
  return letterCount;
}
// _______________________________________________
function compareObjects(count1, count2) {
  const compared = {};
  for (letter in count1) {
    if (count1[letter] === count2[letter]) {
      compared[letter] = count1[letter];
    }
  }
  return Object.keys(compared).length === Object.keys(count2).length;
}
// _______________________________________________
function anagrams(stringA, stringB) {
  return compareObjects(charMap(stringA), charMap(stringB));
}
// _______________________________________________
function cleanAndSort(string) {
  return string
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
// _______________________________________________

// _______________________________________________
function anagramsWithSort(stringA, stringB) {
  return cleanAndSort(stringA) === cleanAndSort(stringB);
}

module.exports = { anagrams, anagramsWithSort, anagrams1, anagrams2 };
