

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




// Initially hide the t-shirt color input and label
tshirtColor.parentElement.style.display = "none";



// Select color of t-shirt based on design
tshirtDesign.addEventListener('change', (e) => {
    const selectedDesign = e.target.value;

    console.log(selectedDesign);
    console.log(colorOptions);
    tshirtColor.parentElement.style.display = "block";
    tshirtColor.firstElementChild.style.display = "hidden";
  


    // Hide all color options before showing the selected options
    colorOptions.forEach( (option) => {
        option.style.display = 'none';
    });

    // Show color options specific to the selected design
    const colorOptionsToShow = document.querySelectorAll(`#color option[data-theme="${selectedDesign}"]`);

    console.log(colorOptionsToShow);

    colorOptionsToShow.forEach( (option) => {
        option.style.display = 'block';
    });
});







// // // Initially hide the t-shirt color input
// tshirtColor.parentElement.style.display = "none";


// // Initially hide all color options

// // colorOptions.forEach(option => {
// //     option.style.display = 'none';
// // });


// // Select color of t-shirt based on design
// tshirtDesign.addEventListener('change', (e) => {
//     const selectedDesign = e.target.value;

//     // // Hide all color options
//     // colorOptions.forEach(option => {
//     //     option.style.display = 'block';
//     // });

//     // Show color options specific to the selected design
//     const colorOptionsToShow = document.querySelectorAll(`#color option[data-theme="${selectedDesign}"]`);
//     console.log(colorOptionsToShow);
//     colorOptionsToShow.forEach(option => {
//         option.style.display = 'block';
//     });
// });






// // //**T-shirt color and design section **//

// // //Initially hides the tshirt color input
// // tshirtColor.parentElement.style.display = "none";



// // // Initially hide all color options

// // // colorOptions.forEach(option => {
// // //     option.style.display = 'none';
// // // });

// // // Select color of t-shirt based on design
// // tshirtDesign.addEventListener('change', (e) => {
// //     const selectedDesign = e.target.value;

//     // // Hide all color options
//     // colorOptions.forEach(option => {
//     //     option.style.display = 'none';
//     // });

//     // Show color options specific to the selected design
//     const colorOptionsToShow = document.querySelectorAll(`#color option[data-theme="${selectedDesign}"]`);
//     console.log(colorOptionsToShow);
//     colorOptionsToShow.forEach(option => {
//         option.style.display = 'block';
//     });
// });

























// //**T-shirt color and design section **//

// //Initially hides the tshirt color input
// tshirtColor.parentElement.style.display = "none";

// //Select color of tshirt based on design//
// tshirtDesign.addEventListener('change', (e) => {
//   const selectedDesign = e.target.value;

//   if(selectedDesign === "js puns") {
//     tshirtColor.parentElement.style.display = "block";
//   } else {
//     if(selectedDesign === "heart js") {
//       tshirtColor.parentElement.style.display = "block";
//     }}
// });




// // Select color of t-shirt based on design
// tshirtDesign.addEventListener('change', (e) => {
//   const selectedDesign = e.target.value;
//     // tshirtColor.parentElement.style.display = "block";
//     // heartJsOptions.style.display = "hidden";
//   jsPunsOptions.forEach(color => {
//     color.style.display = "block";
//   }) 

//   // Update color options based on selected design
//   if (selectedDesign === "js puns") {
//     // Show t-shirt color input
//     // tshirtColor.parentElement.style.display = "block";
//     // Update color options for "js puns" design


 
//     // updateColorOptions(["Cornflower Blue", "Dark Slate Grey", "Gold"]);
//   } else if (selectedDesign === "heart js") {
//     // Show t-shirt color input
//     // tshirtColor.parentElement.style.display = "block";
//     // Update color options for "heart js" design
//     heartJsOptions.style.display = "block";
//     jsPunsOptions.style.display = "hidden"; 
//     // updateColorOptions(["Tomato", "Steel Blue", "Dim Grey"]);
//   } else {
//     // Hide t-shirt color input for other designs
//     tshirtColor.parentElement.style.display = "none";
//   }
// });

// // // Function to update color options
// // function updateColorOptions(colors) {
// //   // Remove existing options
// //   while (tshirtColor.options.length > 0) {
// //     tshirtColor.remove(0);
// //   }

// //   // Add new options
// //   const option = document.querySelectorAll("option");
// //   colors.forEach(color => {
    
// //     option.text = color;
// //     tshirtColor.add(option);
// //   });
// // }











// // Select color of t-shirt based on design
// tshirtDesign.addEventListener('change', (e) => {
//   const selectedDesign = e.target.value;
  
//   // Update color options based on selected design
//   if (selectedDesign === "js puns") {
//     // Show t-shirt color input
//     tshirtColor.parentElement.style.display = "block";
//     // Update color options for "js puns" design
//     updateColorOptions(["Cornflower Blue", "Dark Slate Grey", "Gold"]);
//   } else if (selectedDesign === "heart js") {
//     // Show t-shirt color input
//     tshirtColor.parentElement.style.display = "block";
//     // Update color options for "heart js" design
//     updateColorOptions(["Tomato", "Steel Blue", "Dim Grey"]);
//   } else {
//     // Hide t-shirt color input for other designs
//     tshirtColor.parentElement.style.display = "none";
//   }
// });

// // Function to update color options
// function updateColorOptions(colors) {
//   // Remove existing options
//   while (tshirtColor.options.length > 0) {
//     tshirtColor.remove(0);
//   }
//   // Add new options
//   colors.forEach(color => {
//     const option = document.createElement("option");
//     option.text = color;
//     tshirtColor.add(option);
//   });
// }


