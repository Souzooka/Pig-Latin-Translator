window.onload = function() {

  var translator = pigLatinTranslator();

  document.getElementById("inputToPigSubmit").addEventListener("click", function() {
    var input = document.getElementById("inputToPig").value;
    var output;

    try {
      output = translator.toPigLatin(input);
    }
    catch (error) {
      alert("Cannot start a string with a hyphen.");
      return null;
    }

    document.getElementById("toPigLatinOutput").innerHTML = output;

  });

  document.getElementById("inputFromPigSubmit").addEventListener("click", function() {
    var input = document.getElementById("inputFromPig").value;
    var output;

    try {
      output = translator.fromPigLatin(input);
    }
    catch (error) {
      alert("Not a valid pig-latin string.");
      return null;
    }

    document.getElementById("fromPigLatinOutput").innerHTML = output;

  });
};