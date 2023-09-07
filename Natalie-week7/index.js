const SYNONYMS_OF_APPRECIATE = [
  {
    word: "value",
  },
  {
    word: "cherish",
  },
  {
    word: "prize",
  },
  {
    word: "respect",
  },
];

const DEFINITIONS_OF_VALUE = [
  {
    partOfSpeech: "noun",
    definitions: [
      "The monetary worth of something : market price",
      "a fair return or equivalent in goods, services, or money for something exchanged",
      "of relative worth, utility, or importance",
    ],
  },
  {
    partOfSpeech: "verb",
    definitions: [
      "to consider or rate highly : prize, esteem",
      "to estimate or assign the monetary worth of : appraise",
      "to rate or scale in usefulness, importance, or general worth : evaluate",
    ],
  },
  {
    partOfSpeech: "adjective",
    definitions: [
      "of, relating to, or being a product whose value has been increased especially by special manufacturing, marketing, or processing",
    ],
  },
];

const getSynonyms = () => {
  console.log("synonym button called me");
  let synonymSection = document.getElementById("synonym-section");
  synonymSection.innerHTML = renderSynonyms(SYNONYMS_OF_APPRECIATE);
};

const renderSynonyms = (synonymArray) => {
  console.log(synonymArray);
  let htmlString =
    '<h3>Synonyms</h3><ul class="list-group my-3"><div class="row justify-content-around my-3">';
  for (let i = 0; i < synonymArray.length; i++) {
    htmlString += `<li class="list-group-item col-9 m-1">${synonymArray[i].word}</li><button class="btn btn-sm btn-outline-info col-2 m-1" id="definitionButton" onclick="getDefinitions()">Definition</button>`;
    console.log(synonymArray[i].word);
  }
  htmlString += "</div></ul>";
  return htmlString;
};

const getDefinitions = () => {
  console.log("definition button called me");
  //let definitionLabel = document.getElementById("definition-label");
  //definitionLabel.innerHTML = `<h3>Definition of: ${word}</h3>`;
  let definitionSection = document.getElementById("definition-section");
  definitionSection.innerHTML = renderDefinitions(DEFINITIONS_OF_VALUE);
};

const renderDefinitions = (definitionsArray) => {
  console.log(definitionsArray);
  let htmlString = '<h3>Definitions</h3><div class="row my-3">';
  for (let i = 0; i < definitionsArray.length; i++) {
    htmlString += renderDefinition(definitionsArray[i]);
  }
  htmlString += "</div>";
  return htmlString;
};

const renderDefinition = (definition) => {
  return `<div class="col "><h4>${
    definition.partOfSpeech
  }</h4>${renderEachDefinition(definition.definitions)}<hr/>`;
};

const renderEachDefinition = (arrOfDefinitions) => {
  let htmlString = "<p>";
  for (let i = 0; i < arrOfDefinitions.length; i++) {
    htmlString += `${arrOfDefinitions[i]}<br/><br/>`;
  }
  htmlString += "</p>";
  return htmlString;
};
