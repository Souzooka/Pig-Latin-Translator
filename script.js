'use strict';


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


console.log(toPigLatin("eat"));
console.log(toPigLatin("hello"));