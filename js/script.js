//*** I am aiming for exceeds expectations and only want to receive a mar k of exceeds expectations ***//


//**  Declaration of Variables to be used **//

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

// Variables for Methods of Payment
  const paymentMethod = document.getElementById("payment");                       // selects for payment options div
  const creditCardPayment = document.getElementById("credit-card");               // selects cc div
  const payPalPayment = document.getElementById("paypal");                        // selects paypal div
  const bitcoinPayment  = document.getElementById("bitcoin");                     // selects bitcoin div
  const creditCardInitial = paymentMethod.querySelector("option:nth-child(2)");   // selects the credit card option to display initially

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

// Selection of the name input field and giving it initial focus//
  const nameField = document.querySelector("[type='text']").focus();

//Initially hides the text box for Input of Other Job Type
  otherJobRole.style.display = "none";

//Event listener to  display Input Text Box for Other Job Type if Other is selected as job role in the dropdown menu
jobRole.addEventListener('change', (e) => {
  const jobChoice = e.target.value;
  if(jobChoice === "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  } 
});


//*** Tshirt Design & Color Selection ***/

// Initially diable the t-shirt color input //
tshirtColor.disabled = true;

// Selection of color of t-shirt based on design selection //

tshirtDesign.addEventListener('change', (e) => {
  const selectedDesign = e.target.value;
  tshirtColor.disabled = false;

  colorOptions.forEach( (option) => {
    option.style.display = "none";                                // remove all color options from the selection menu
  });
    
  colorOptions.forEach( (option) => {
    let optionAttribute = option.getAttribute('data-theme');      //get data-theme attribute of all color options
    if(selectedDesign === optionAttribute) {                      // conditional to compare attribute of selected design to the attribute of all color options and only choose the colors for that design //
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
    colorOptions[0].selected = true;                            // put the Colors Available for Design Theme option back in as initial option
    });
  });


//*** Selection of Activities Section ***/

let totalActivityCost=0;                                    // variable to keep track of total cost of activities
let checkboxSelected = 0;                                   // counter to keep track of checkboxes selected

workshopActivities.addEventListener("change", (e) => {

// Get the attribute for day and time of selected input
  const selectedActivity = e.target;
  const selectedDayAndTime = selectedActivity.getAttribute('data-day-and-time');

// Get the total cost of all selected workshops//
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
      

//*** Payment Section ***/

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


//** Form Validation Section **//

// Function Used to Validate the Form Inputs
  function validateForm() {
    let isValid = true;                                 //Variable to Store whether Validation is Correct(True) or Not(False)

    // Name Validation //
    const nameRegex = /^[a-z]+$/;                        // Valid usernames can only contain letters a-z in lowercase     
    if (!nameRegex.test(nameInput.value.trim())) {      // Checks Input valid against regex expression
    isValid = false;
    nameHint.style.display = 'block';                   // Makes Name Hint Visible
    nameInput.parentElement.classList.remove('valid');  // Removes Valid styles (checkmark) to parent element      
    nameInput.classList.add('error');                   // Applies error styles
    } else {
    nameHint.style.display = 'none';                    // Hides Name Hint
    nameInput.classList.remove('error');                // Remove error styles
    nameInput.parentElement.classList.add('valid');     // Add Valid styles (checkmark) to parent element
    }

    // Validate Email
    const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;       // Valid Email Addresses are in the correct form. ex. abc@somewhere.com
    if (!emailRegex.test(emailInput.value.trim())) {    // Checks Input valid against regex expression
    isValid = false;
    emailHint.style.display = 'block';                  // Make Email Hint Visible
    emailInput.parentElement.classList.remove('valid'); // Removes Valid styles (checkmark) to parent element    
    emailInput.classList.add('error');                  // Applies error styles
    } else {
    emailHint.style.display = 'none';                   // Hides Email Hint
    emailInput.classList.remove('error');               // Removes error styles
    emailInput.parentElement.classList.add('valid');     // Add Valid styles (checkmark) to parent element
    }

    // Validate Activities (at least one checkbox checked)
    const hasSelectedActivity = Array.from(workshopCheckBoxes).some((checkbox) => checkbox.checked);        // Creates an array from the workshopCheckBoxes variable and uses .some() to check that at least one box is checked
    if (!hasSelectedActivity) {
    isValid = false;
    activitiesHint.style.display = 'block';                   // Make Activities Hint Visible
    activitiesHint.parentElement.classList.remove('valid');   // Removes Valid styles (checkmark) to parent element    
    } else {
    activitiesHint.style.display = 'none';                    // Removes Activities Hint Visible
    activitiesHint.parentElement.classList.add('valid');      // Add Valid styles (checkmark) to parent element
    }

    // Validate Credit Card
    const ccRegex = /^\d{13,16}$/;                    // Credit Card must have 13 - 16 digits
    if (!ccRegex.test(ccInput.value.trim())) {        // Checks Input valid against regex expression
    isValid = false;
    ccHint.style.display = 'block';                   // Make Credit Card Hint Visible
    ccInput.parentElement.classList.remove('valid');  // Removes Valid styles (checkmark) to parent element    
    ccInput.classList.add('error');                  // Applies error styles
    } else {
    ccHint.style.display = 'none';                    // Removes Credit Card Hint Visible
    ccInput.classList.remove('error');               // Removes error styles
    ccInput.parentElement.classList.add('valid');     // Add Valid styles (checkmark) to parent element
    }

    // Validate Zip Code
    const zipRegex = /^\d{5}$/;                        // Valid Zip Code can only have five digits 
    if (!zipRegex.test(zipInput.value.trim())) {      // Checks Input valid against regex expression
    isValid = false;
    zipHint.style.display = 'block';                  // Makes Zip Code Hint visible
    zipInput.parentElement.classList.remove('valid');  // Removes Valid styles (checkmark) to parent element    
    zipInput.classList.add('error');                  // Applies error styles
    } else {
    zipHint.style.display = 'none';                   // Removes Zip Code Hint
    zipInput.classList.remove('error');               // Removes error styles
    zipInput.parentElement.classList.add('valid');     // Add Valid styles (checkmark) to parent element
    }

    // Validate CVV
    const cvvRegex = /^\d{3}$/;                       // Valid CVV can only have three digits
    if (!cvvRegex.test(cvvInput.value.trim())) {      // Checks Input valid against regex expression
    isValid = false;
    cvvHint.style.display = 'block';                  // Makes CVV Hint visible
    cvvInput.parentElement.classList.remove('valid');  // Removes Valid styles (checkmark) to parent element    
    cvvInput.classList.add('error');                  // Applies error styles
    } else {
    cvvHint.style.display = 'none';                   // Removes CVV Hint
    cvvInput.classList.remove('error');               // Removes error styles
    cvvInput.parentElement.classList.add('valid');     // Add Valid styles (checkmark) to parent element
    }

    return isValid;                                   // Returns Validation check 
  }

  // An Even Listener to Give Real Time Validation as Form Input Occurs
  form.addEventListener('change', (e) => {
    if (!validateForm()) {
      e.preventDefault();                             // Prevent form submission if validation fails
      }
    });
  
  // An Event Listerner to check for final Validation beofre Submission of Form Data
  form.addEventListener('submit', (e) => {
  if (!validateForm()) {
    e.preventDefault();                             // Prevent form submission if validation fails
    }
  });

