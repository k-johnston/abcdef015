/* variables */
var colorArray = [
  "booooo",
  "loaded",
  "loafed",
  "fooled",
  "beside",
  "coffee",
  "cicada",
  "efface",
  "deface",
  "salsas",
  "locale",
  "locals",
  "foible",
  "fables",
  "fabled",
  "boiled",
  "scalds",
  "office",
  "dolled",
  "called",
  "bodies",
  "bodied",
  "saddle",
  "beaded",
  "boards",
  "afield",
  "fiddle",
  "coifed",
  "ideals",
  "cabled",
  "ladled",
  "allied",
  "ladles",
  "ladies",
  "scaled",
  "defile",
  "leafed",
  "belied",
  "edible",
  "belief",
  "defied",
  "cables",
  "baffle",
  "decafs",
  "facial",
  "access",
  "ceases",
  "ceased",
  "scales",
  "scaled",
  "fossae",
  "social",
  "basils",
  "abbess",
  "solids",
  "fossil",
  "lassos",
  "aiolis",
  "lassie",
  "aisles",
  "salads",
  "scolds",
  "dossil",
  "oldies",
  "siloed",
  "slides",
  "babies",
  "bobble",
  "babble",
  "babied",
  "bolded"
];

var colorOne = document.getElementById("color1");
var valueOne = document.getElementById("value1");
var colorRandomValue = ""; // class name
var backgroundColorValue = ""; // CSS property background-color
var convertedColor = ""; //converted hex color

/* picks random color and adds to card */
function findRandomColor() {
  colorOne.className = "color";
  let colorRandom = colorArray[Math.floor(Math.random() * colorArray.length)];
  colorRandomValue = colorRandom.toString();
  colorOne.classList.add(colorRandomValue);

  let valueRandom = colorRandom;
  valueOne.innerHTML = valueRandom;
}

/* get the class name of the color as a hint*/
function getBackgroundColor() {
  let colorStyle = colorRandomValue;
  backgroundColorValue = colorStyle.toString();

  let backgroundColorValueArray = Array.from(backgroundColorValue).forEach(
    function() {
      for (var i = 0; i < backgroundColorValue.length; i++) {
        convertedColor = backgroundColorValue
          .replace(/o/gi, "0")
          .replace(/s/gi, "5")
          .replace(/\i/gi, "1")
          .replace(/l/gi, "1");
      }
    }
  );

  let hintPrompt = document.getElementById("hint");
  hintPrompt.innerHTML = convertedColor;
}

/* run functions */
colorOne.addEventListener("click", function() {
  findRandomColor();
  getBackgroundColor();
});
