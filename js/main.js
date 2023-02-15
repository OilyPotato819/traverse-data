// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  let yes = 0;
  let no = 0;
  let maybe = 0;

  for (let n = 0; n < surveyData.length; n++) {
    const answer = surveyData[n];

    if (answer == "Yes") yes++;
    else if (answer == "No") no++;
    else maybe++;
  }

  outputEl.innerHTML = `
    Yes: ${yes}<br>
    No: ${no}<br>
    Maybe: ${maybe}<br>
  `;
}

function traverseAgeData() {
  let under18 = 0;
  let under36 = 0;
  let under66 = 0;
  let above65 = 0;

  for (let n = 0; n < ageData.length; n++) {
    const age = ageData[n];

    if (age < 18) under18++;
    else if (age < 36) under36++;
    else if (age < 66) under66++;
    else above65++;
  }

  outputEl.innerHTML = `
    Under 18: ${under18}<br>
    18 to 35: ${under36}<br>
    36 to 65: ${under66}<br>
    Above 65: ${above65}
  `;
}

function traverseNumberData() {
  let even = 0;
  let odd = 0;

  for (let n = 0; n < numberData.length; n++) {
    const num = numberData[n];

    if (num % 2 == 0) even++;
    else odd++;
  }

  outputEl.innerHTML = `
    Even Numbers: ${even}<br>
    Odd Numbers: ${odd}<br>
  `;
}
