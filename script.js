'use strict';


function PigLatinTranslator(str) {

  function toPigLatin(str) {
    if (str.search(/[aeiou]/gi) === 0) {
      str = str + "-ay";
    } else {
      var firstChar = str.substr(0, 1);
      str = str.slice(1);
      str = str + "-" + firstChar + "ay";
    }

    return str;
  }

  function fromPigLatin(str) {
    var hyphenIndex = str.search(/-/);
    console.log(hyphenIndex);

    if (str.slice(hyphenIndex + 1) === "ay") {
      console.log("test")

    } else {
      var firstChar = str[hyphenIndex + 1];
    }

  }

  return {
    toPigLatin,
    fromPigLatin
  }

}


console.log(PigLatinTranslator().fromPigLatin("eat-ay"));
