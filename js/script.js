//*** I am aiming for exceeds expectations and only want to receive a mar k of exceeds expectations ***//

//*******************************************//
//**  Declaration of Variables to be used **//
//******************************************//

// Variables for Name Field and Job Role
const form = document.querySelector('form');
const basicInfo = document.querySelector('.basic-info');
const otherJobRole = document.querySelector('#other-job-role');
const jobRole = document.querySelector('#title');

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Variables for Tshirt Design and Color
const tshirtColor = document.getElementById("color");
const tshirtDesign = document.getElementById("design");
const colorOptions = document.querySelectorAll("#color option");

// Variables for Costs of Activities
const workshopActivities = document.getElementById("activities");
const activitiesCost = document.getElementById("activities-cost");

// Variable for all Workshop Checkboxes 
const workshopCheckBoxes = document.querySelectorAll("input[type='checkbox']");
const activitiesBox = document.getElementById("activities-box");

// Variables for Methods of Payment
const paymentMethod = document.getElementById("payment");                                 // selects for payment options div
const creditCardPayment = document.getElementById("credit-card");                         // selects cc div
const payPalPayment = document.getElementById("paypal");                                  // selects paypal div
const bitcoinPayment  = document.getElementById("bitcoin");                              // selects bitcoin div
const creditCardInitial = paymentMethod.querySelector("option:nth-child(2)");            // selects the credit card option to display initially

// Variables for Credit Card Input
const ccInput = document.getElementById("cc-num");                              
const zipInput = document.getElementById("zip");
const cvvInput = document.getElementById("cvv");

// Variables for Input Hints
const nameHint1 = document.getElementById("name-hint-1");
const nameHint2 = document.getElementById("name-hint-2");
const emailHint1 = document.getElementById("email-hint-1");
const emailHint2 = document.getElementById("email-hint-2");
const activitiesHint = document.getElementById("activities-hint");
const ccHint = document.getElementById("cc-hint");
const zipHint = document.getElementById("zip-hint");
const cvvHint = document.getElementById("cvv-hint");



//*******************************//
//**  Basic Information Section *//
//*******************************//

//** Selection of the name input field and giving it initial focus **//
const nameField = document.querySelector("[type='text']").focus();

//** Initially hides the text box for Input of Other Job Type **//
otherJobRole.style.display = "none";

//** Event listener to display Input Text Box for Other Job Type if Other is selected as job role in the dropdown menu **//
jobRole.addEventListener('change', (e) => {
const jobChoice = e.target.value;
if(jobChoice === "other") {
  otherJobRole.style.display = "block";
} else {
  otherJobRole.style.display = "none";
} 
});


//***************************************//
//**  Tshirt Design & Color Selection **//
//**************************************//

// Initially diable the t-shirt color input //
tshirtColor.disabled = true;

// Selection of color of t-shirt based on design selection //
tshirtDesign.addEventListener('change', (e) => {
const selectedDesign = e.target.value;
tshirtColor.disabled = false;

colorOptions.forEach( (option) => {
  option.style.display = "none";                                                        // remove all color options from the selection menu
});
  
colorOptions.forEach( (option) => {
  let optionAttribute = option.getAttribute('data-theme');                              // get data-theme attribute of all color options
  if(selectedDesign === optionAttribute) {                                              // conditional to compare attribute of selected design to the attribute of all color options and only choose the colors for that design //
    option.style.display = "block";
  } else {
    option.style.display = "none";
  }
  colorOptions[0].selected = true;                                                      // put the Colors Available for Design Theme option back in as initial option
  });
});


//***********************************************//
//**  Selection and Cost of Activities Section **//
//***********************************************//

let totalActivityCost=0;                                                                  // variable to keep track of total cost of activities
let checkboxSelected = 0;                                                                 // counter to keep track of checkboxes selected

workshopActivities.addEventListener("change", (e) => {

// Get the attribute for day and time of selected input
const selectedActivity = e.target;
const selectedDayAndTime = selectedActivity.getAttribute('data-day-and-time');

// Get the total cost of all selected workshops
let activityCost = parseFloat(selectedActivity.getAttribute("data-cost")); 
if (selectedActivity.checked) {
  totalActivityCost += activityCost;
  checkboxSelected += 1;     
} else {
  totalActivityCost -= activityCost;
  checkboxSelected -= 1;
}; 

activitiesCost.innerText =`Total: $${totalActivityCost}`;                                 // Updates Total Cost to be displayed   

const dateOfActivity = workshopActivities.querySelectorAll('input[data-day-and-time]');   // Get the Day and Time of all activities

dateOfActivity.forEach((element) => {                                                     // Get the Attribute for the Day and Time of each activity 
const dayAndTime = element.getAttribute('data-day-and-time');       

if(selectedDayAndTime === dayAndTime && element !== selectedActivity) {                   // Disable all activities at the same day and time as selected activity  
  element.disabled = selectedActivity.checked;
}
        
if(element.disabled) {
  element.parentElement.classList.add("disabled");                                        // Adds the disabled class to all activities that have same day and time attributes
} else {
  element.parentElement.classList.remove("disabled");                                    // Adds the disabled class to all activities that have same day and time attributes
}
});
}); 

// Give checked checkboxes Focus and Remove focus from unchecked checkboxes      
workshopCheckBoxes.forEach( (box) => {
  box.addEventListener("focus", (e) => {
  box.parentElement.classList.add("focus");
  });
  box.addEventListener("blur", (e) => {
    box.parentElement.classList.remove("focus");
    });
});


    

//***********************//
//**  Payment Section **//
//**********************//

//initially hide Paypal and Bitcoin sections
creditCardInitial.selected = true;
payPalPayment.style.display ="none";
bitcoinPayment.style.display ="none";

// Event Listener to Select for Other Payment Options
paymentMethod.addEventListener("change", (e) => {
const selectedPayment = e.target.value;

// Show/Hide sections based on the selected payment method
creditCardPayment.style.display = selectedPayment === "credit-card" ? "block" : "none";
payPalPayment.style.display = selectedPayment === "paypal" ? "block" : "none";
bitcoinPayment.style.display = selectedPayment === "bitcoin" ? "block" : "none";
});


//********************************//
//**  Form Validation Section  **//
//*******************************//

//** Functions Used to Add Valid Styles to Inputs if Valid or Error Styles to the Inputs if Invalid **//

// Adds styles for Valid Inputs and Removes styles for Invalid Inputs //
function validInput(hint, input) {
    hint.style.display = 'none';                                                        // Removes input hint
    input.classList.remove('error');                                                    // Removes error styles from input box
    input.parentElement.classList.remove('not-valid');                                  // Remove Warning icon from the parent element of input box (Label)         
    input.parentElement.classList.add('valid');                                         // Add Valid styles (checkmark) to parent element of input box (Label)
};

// Adds styles for Invalid Inputs and Removes styles for Valid Inputs //
function invalidInput(hint, input) {
    hint.style.display = 'block';                                                       // Makes Input Hint visible
    input.classList.add('error');                                                       // Applies error styles to the input box
    input.parentElement.classList.remove('valid');                                      // Removes Valid styles (checkmark) from input's parent element of input box (Label)  
    input.parentElement.classList.add('not-valid');                                     // Add the warning icon to the parent element of input box (Label)            
};

// ** Functions Used to Validate Inputs **/

// // Function used to Validate Name Input //
function validateName() {
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;                                         // Valid usernames can contain capital and small letters with a space between the first and last name  
    if(nameInput.value === "") {                                                       // Checks if name input is blank
      invalidInput(nameHint1, nameInput);                                              // Applies first name hint to enter a user name if name input blank
    return false; 
    } else if(!nameRegex.test(nameInput.value.trim())) {                               // Checks Name Input is valid against regex expression for correct format
      validInput(nameHint1, nameInput);                                                // Removes the name hint for a blank name input field
      invalidInput(nameHint2, nameInput);                                              // Applies a second name hint for incorrect format                           
    return false;       
    } else {
      validInput(nameHint1, nameInput);                                                // Removes the name hint for a blank name input field
      validInput(nameHint2, nameInput);                                                // Removes the name hint for correct formatting if name input is valid
    return true; 
    }
  };

 // Function used to Validate Email Input //
  function validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;            // Valid Email Addresses are in the correct form. ex. abc@somewhere.com
    if(emailInput.value === "") {                                                     // Checks if email input is blank
      invalidInput(emailHint1, emailInput);                                           // Applies first email hint to enter an email address if email input is blank
      return false; 
    } else if(!emailRegex.test(emailInput.value.trim())) {                            // Checks Input valid against regex expression for correct format 
      validInput(emailHint1, emailInput);                                             // Removes email hint for a blank email input field
      invalidInput(emailHint2, emailInput);                                           // Applies the second email hint for incorrect format
      return false;
    } else {
      validInput(emailHint1, emailInput);                                             // Removes email hint for a blank email input field
      validInput(emailHint2, emailInput);                                             // Removes the email hint for correct formatting if email input is valid
      return true;  
    }
  };

 // Function used to Validate Credit Card Input //
  function validateCC() {
    const ccRegex = /^\d{13,16}$/;                                                    // Credit Card must have 13 - 16 digits
    if (!ccRegex.test(ccInput.value.trim())) {                                        // Checks Input valid against regex expression
    invalidInput(ccHint, ccInput);
    return false;
    } else {
    validInput(ccHint, ccInput);
    return true;  
    }
  };

 // Function used to Validate Zip Code Input //
 function validateZip() {
    const zipRegex = /^\d{5}$/;                                                      // Valid Zip Code can only have five digits 
    if (!zipRegex.test(zipInput.value.trim())) {                                     // Checks Input valid against regex expression
    invalidInput(zipHint, zipInput);
    return false;
    } else {
    validInput(zipHint, zipInput);
    return true;  
    }
 };

 // Function used to Validate CVV Input //
  function validateCVV() {
    const cvvRegex = /^\d{3}$/;                                                     // Valid CVV can only have three digits
    if (!cvvRegex.test(cvvInput.value.trim())) {                                    // Checks Input valid against regex expression
    invalidInput(cvvHint, cvvInput);
    return false;
    } else {
    validInput(cvvHint, cvvInput);
    return true;  
    }
  };

// Function used to Validate Activities //
  function validateActivities() {
    const hasSelectedActivity = Array.from(workshopCheckBoxes).some((checkbox) => checkbox.checked);
    if (!hasSelectedActivity) {
    invalidInput(activitiesHint, activitiesBox);
    return false;
    } else {
    validInput(activitiesHint, activitiesBox);
    return true;
    }
};

// Function Used to Validate the Form Inputs Before Submissions //
  function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isActivitiesValid = validateActivities();
    let isCreditCardValid = true;
    let isZipValid = true;
    let isCVVValid = true;
    if (paymentMethod.value === "credit-card") {
      isCreditCardValid = validateCC();
      isZipValid = validateZip();
      isCVVValid = validateCVV();
    }
  return isNameValid && isEmailValid && isActivitiesValid && isCreditCardValid && isZipValid && isCVVValid;
};


//** Event Listeners to Check Form Validation in both Real Time and Upon Submission **//

// Event Listeners for the Validation of User Inputs in Real Time //
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
ccInput.addEventListener('input', validateCC);
zipInput.addEventListener('input', validateZip);
cvvInput.addEventListener('input', validateCVV);
workshopActivities.addEventListener('change', validateActivities);

// An Event Listener for the Final Validation Before Submission of Form Data //
  form.addEventListener('submit', (e) => {
      if (!validateForm()) {                                                      // Checks to ensure all functions that validate the fields all return true values in order to submit the form
      e.preventDefault();                                                         // Prevent form submission if validation fails for any of the functions checking validation
      }
  });


