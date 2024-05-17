# Full_Stack_Tech_Degree_Project_3
 Interactive Form

In this project, JavaScript  was used to enhance an interactive registration form for a fictional Full Stack conference.

    *   HTML and CSS project files were given to create the form and its styles while JavaScript was used to make the form more user-friendly.

    *   Customized and conditional behavior and interactivity was added using Javascript:
        -   The focus is initilly set on the Name Field to get the user started on filling out the form

        -   Some inputs/content are displayed only as needed based on previous inputs:
            -   Choice of job roles were given and if "Other" was chosen as a job choice, an input box appeares for the user to enter a job decription not part of the choices given.
            -   Only colors specific to the Tshirt design were shown based on the design selected
            -   Information about Types of Payment were given based on selection of Payment Option
            -   The total Cost of Activites selected was calculated and displayed based on the actual activities chosen
            -   To prevent Scheduling conflicts, only activities not occurring on the same day and time were allowed to be selected
   
    * Validation of user input was provided by displaying helpful error messages and visual icons:
        - If the user entered invalid information into the form fields, a red warning symbol and hint was displayed
        - If the user enters correct information, a green checkmark is provided for valid input and any hints to fix their inputs displayed are removed
            - Validation For User Name Input checks if the User Name Input: 
                - is left blank 
                - is in the correct format using a regex expression
            - Validation for Email Address Input checks if the Email Address:
                - is left blank 
                - is in the correct format using a regex expression
            - If a Credit Card is selected for Payment:
                - The credit card number, the zip code and CVV number are all checked and validated for correct format using regex expressions
        - Validation of Activies was checked to ensure that at least one activity was selected 

    * Validation was provided both with real-time input as well as before the form was submitted
