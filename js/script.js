

// Selection the name input field and giving it initial focus//
const nameField = document.querySelector("[type='text']").focus();

// Declaration of variables to be used//
const form = document.querySelector('form');
const otherJobRole = document.querySelector('#other-job-role');
const jobRole = document.querySelector('#title');

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameHint = document.getElementById("name-hint");
const emailHint = document.getElementById("email-hint");

let tshirtColor = document.getElementById("color");
const tshirtDesign = document.getElementById("design");
const colorOptions = document.querySelectorAll("#color option");

let registerActivities = document.getElementById("activities");
const activitiesCost = document.getElementById("activities-cost");
const activitiesHint = document.getElementById("activities-hint");

//Initially hides the text box for input of other job type
otherJobRole.style.display = "none";

//Event listener to  display input text box for other job type if other is selected as job role in the dropdown menu
jobRole.addEventListener('change', (e) => {
    const jobChoice = e.target.value;
      if(jobChoice === "other") {
        otherJobRole.style.display = "block";
        } 
    });

    
//**Text Box Input Validation Functions**//

// Valid usernames can only contain letters a-z in lowercase
const isValidUsername = () => /^[a-z]+$/.test(nameInput.value);

// Valid email must contain a name, an @ symbol and a domain name
const isValidEmail = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);

//Event Listener for name and email input for Validation
form.addEventListener("submit", (e) => {
  const validator = (validationFunction, inputHint) => {
    if(validationFunction()) {
      inputHint.style.display = 'none';
    } else {
      e.preventDefault();
      inputHint.classList.add('hint');
      inputHint.style.display = 'block';
    }};
    validator(isValidUsername, nameHint);
    validator(isValidEmail, emailHint);    
});


//*** Tshirt Design & Color Selection ***/

// Initially diable the t-shirt color input //
tshirtColor.disabled = true;

// Selection of color of t-shirt based on design selection //

tshirtDesign.addEventListener('change', (e) => {
  const selectedDesign = e.target.value;
  tshirtColor.disabled = false;

  colorOptions.forEach( (option) => {
    option.style.display = "none";   // remove all color options from the selection menu
    });
   
  colorOptions.forEach( (option) => {
    let optionAttribute = option.getAttribute('data-theme');   //get data-theme attribute of all color options

    if(selectedDesign === optionAttribute) {   // conditional to compare attribute of selected design to the attribute of all color options and only choose the colors for that design //
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
      colorOptions[0].selected = true;   // put the Colors Available for Design Theme option back in as initial option
    });
});





//*** Total Cost of Activities Section ***/

let totalActivityCost=0;

registerActivities.addEventListener("change", (e) => {

   // Retrieve the 'data-day-and-time' attribute value
  let dateOfActivity = registerActivities.querySelectorAll('[data-day-and-time]');

  dateOfActivity.forEach((element) => {
    const dayAndTime = element.getAttribute('data-day-and-time');
    
    // Output the value to the console
    console.log(dayAndTime); // Outputs: e.g., "Tuesday 9am-12pm"
  });

  let selectedActivity = e.target;
  console.log(selectedActivity);

  let sameDT = selectedActivity.getAttribute('data-day-and-time');
  console.log(sameDT);

  // const sameDateAndTime = registerActivities.querySelectorAll(`[data-day-and-time=${sameDT}]`);

  // get total cost of selected workshops//
  let activityCost = parseFloat(selectedActivity.getAttribute("data-cost")); 

  if (selectedActivity.checked) {
    totalActivityCost += activityCost;
  } else {
    totalActivityCost -= activityCost;
  } 

  activitiesCost.innerText =`Total: $${totalActivityCost}`;


});