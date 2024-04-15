

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

const tshirtColor = document.getElementById("color");
const tshirtDesign = document.getElementById("design");
const colorOptions = document.querySelectorAll('#color option');

const jspFirsttoShow = document.querySelector(".jspFirstToShow");
const heartFirsttoShow = document.querySelector(".heartFirstToShow");

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

// Initially diable the t-shirt color input
tshirtColor.disabled = true;

// Selection of color of t-shirt based on design selection
tshirtDesign.addEventListener('change', (e) => {
    const selectedDesign = e.target.value;
    tshirtColor.disabled = false;
    
    tshirtColor.firstElementChild.remove();   // remove the element so doesnt show

    // Show color options specific to the selected design
    const colorOptionsToShow = document.querySelectorAll(`#color option[data-theme="${selectedDesign}"]`);

    console.log(colorOptionsToShow);
   
    colorOptionsToShow.forEach( (option) => {
      console.log(option)
        option.style.display = 'block';
    });
});





