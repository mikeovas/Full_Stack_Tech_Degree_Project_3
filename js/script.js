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
const nameHint = document.getElementById("name-hint");
const emailHint = document.getElementById("email-hint");
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
    
// Give checked checkboxes Focus and Remove focus from unchecked checkboxes      
workshopCheckBoxes.forEach( (box) => {
  box.addEventListener("focus", (e) => {
  box.parentElement.classList.add("focus");
  });
});

workshopCheckBoxes.forEach( (box) => {
  box.addEventListener("blur", (e) => {
  box.parentElement.classList.remove("focus");
  });
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

let isValid = "";                                            //Variable to Store whether Validation is Correct(True) or Not(False)

//Functions Used to Add Valid Styles to Inputs if Valid or Error Styles to the Inputs if Invalid //

// Adds styles for Valid Inputs and Removes styles for Invalid Inputs //
function validInput(hint, input) {
    isValid = true;
    hint.style.display = 'none';                              // Removes input hint
    input.classList.remove('error');                          // Removes error styles from input box
    input.parentElement.classList.remove('not-valid');        // Remove warning icon from the parent Label            
    input.parentElement.classList.add('valid');               // Add Valid styles (checkmark) to parent element of input box
};

// Adds styles for Invalid Inputs and Removes styles for Valid Inputs //
function invalidInput(hint, input) {
    isValid = false;
    hint.style.display = 'block';                             // Makes Input Hint visible
    input.classList.add('error');                             // Applies error styles to the input box
    input.parentElement.classList.remove('valid');            // Removes Valid styles (checkmark) from input's parent Label   
    input.parentElement.classList.add('not-valid');           // Add the warning icon to the parent Label              
};

// Function used to Validate Name Input //
function validateName() {
    const nameRegex = /^[a-z]+$/;                             // Valid usernames can only contain letters a-z in lowercase     
    if (!nameRegex.test(nameInput.value.trim())) {            // Checks Input valid against regex expression
    invalidInput(nameHint, nameInput);  
    } else {
    validInput(nameHint, nameInput);  
    }
  };

 // Function used to Validate Email Input //
  function validateEmail() {
    const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;              // Valid Email Addresses are in the correct form. ex. abc@somewhere.com
    if (!emailRegex.test(emailInput.value.trim())) {          // Checks Input valid against regex expression
    invalidInput(emailHint, emailInput);
    } else {
    validInput(emailHint, emailInput);  
    }
  };

 // Function used to Validate Credit Card Input //
  function validateCC() {
    const ccRegex = /^\d{13,16}$/;                            // Credit Card must have 13 - 16 digits
    if (!ccRegex.test(ccInput.value.trim())) {                // Checks Input valid against regex expression
    invalidInput(ccHint, ccInput);
    } else {
    validInput(ccHint, ccInput);  
    }
  };

 // Function used to Validate Zip Code Input //
 function validateZip() {
    const zipRegex = /^\d{5}$/;                               // Valid Zip Code can only have five digits 
    if (!zipRegex.test(zipInput.value.trim())) {              // Checks Input valid against regex expression
    invalidInput(zipHint, zipInput);
    } else {
    validInput(zipHint, zipInput);  
    }
 };

 // Function used to Validate CVV Input //
  function validateCVV() {
    const cvvRegex = /^\d{3}$/;                               // Valid CVV can only have three digits
    if (!cvvRegex.test(cvvInput.value.trim())) {              // Checks Input valid against regex expression
    invalidInput(cvvHint, cvvInput);
    } else {
    validInput(cvvHint, cvvInput);  
    }
  };

// Function used to Validate Activities //
  function validateActivities() {
    const hasSelectedActivity = Array.from(workshopCheckBoxes).some((checkbox) => checkbox.checked);
    if (!hasSelectedActivity) {
    invalidInput(activitiesHint, activitiesBox);
    } else {
    validInput(activitiesHint, activitiesBox);
    }
};


// Validation of User Inputs in Real Time //
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
ccInput.addEventListener('input', validateCC);
zipInput.addEventListener('input', validateZip);
cvvInput.addEventListener('input', validateCVV);
workshopActivities.addEventListener('change', validateActivities);


// Function Used to Validate the Form Inputs before Submissions
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


// // An Event Listerner to check for final Validation beofre Submission of Form Data 
  form.addEventListener('submit', (e) => {
      if (!validateForm()) {
        console.log(validateForm());
      e.preventDefault();                                       // Prevent form submission if validation fails
      }
  });


