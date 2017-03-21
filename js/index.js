window.onload = function() {

  var translator = pigLatinTranslator();
  var fromPigLatinInput = "";


  document.getElementById("inputToPigSubmit").addEventListener("click", function() {
    var input = document.getElementById("inputToPig").value;

    try {
      var output = translator.toPigLatin(input);
    }
    catch (error) {
      alert("Cannot start a string with a hyphen.");
      return null;
    }

    document.getElementById("toPigLatinOutput").innerHTML = output;

  });

  document.getElementById("inputFromPigSubmit").addEventListener("click", function() {
    var input = document.getElementById("inputFromPig").value;

    try {
      var output = translator.fromPigLatin(input);
    }
    catch (error) {
      alert("Not a valid pig-latin string.");
      return null;
    }

    document.getElementById("fromPigLatinOutput").innerHTML = output;

  });
};