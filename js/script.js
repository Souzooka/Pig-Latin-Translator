'use strict';


function pigLatinTranslator() {

  function toPigLatin(str) {

    if (str.search(/-/) === 0) {
      throw new Error("Cannot start string with a hyphen.");
    }

    if (str.search(/[AEIOU]/gi) === 0) {
      str = str + "-ay";
    } else {
      var firstVowelIndex = str.search(/[AEIOU]/i);
      var firstHalf = str.slice(0, firstVowelIndex);
      var secondHalf = str.slice(firstVowelIndex);
      str = secondHalf + "-" + firstHalf + "ay";
    }

    return str;
  }

  function fromPigLatin(str) {
    var hyphenIndex = str.search(/-/);

    if (str.match(/-/g).length < 1) {
      throw new Error("Not a valid Pig-Latin string");
    }

    if (str.match(/-/g).length > 1) {
      var matches = str.match(/-/g).length;
      var tentativeIndex = 0;

      for (var i = 0; i < matches; i++) {
        tentativeIndex = str.indexOf("-", tentativeIndex+1);
      }
      hyphenIndex = tentativeIndex;
    }

    if (str.slice(hyphenIndex + 1) === "ay") {
      str = str.substr(0, hyphenIndex);
    } else {
      var firstChar = str[hyphenIndex + 1];
      var word = str.substr(0, hyphenIndex);
      str = firstChar + word;
    }

    return str;
  }

  return {
    toPigLatin,
    fromPigLatin
  };
}
