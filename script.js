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

  }

  return {
    toPigLatin,
    fromPigLatin
  }

}


console.log(PigLatinTranslator().toPigLatin("eat"));
console.log(PigLatinTranslator().toPigLatin("hello"));