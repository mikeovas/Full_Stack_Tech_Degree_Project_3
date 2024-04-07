const nameField = document.querySelector("[type='text']").focus();
const otherJobRole = document.querySelector('#other-job-role');
const jobRole = document.querySelector('#title');


//initially hides the text box for input of other job type
otherJobRole.style.display = "none";



//event listener to  display input text box for other job type if other is slected in the dropdown menu
jobRole.addEventListener('change', (e) => {
    const jobChoice = e.target.value;
      if(jobChoice === "other") {
        otherJobRole.style.display = "block";
        } 
    });
    
