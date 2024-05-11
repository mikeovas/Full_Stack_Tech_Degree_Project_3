# Full_Stack_Tech_Degree_Project_3
 Interactive Form

In this project, JavaScript  was used to enhance an interactive registration form for a fictional Full Stack conference.

    *   HTML and CSS project files were given to create the form and its styles while JavaScript was used to make the form more user-friendly.

    *   Customized and conditional behavior and interactivity was added using Javascript:
        -   The focus is initilly set on the Name Field to get the use started on filling out the form

        -   Some inputs/content are displayed on;y as needed based on previous inputs
            -   Choice of job role were given and if other was chosen as a job choice, an input box appeares for the user to enter a job decription not part of the choices given.
            -   Information about Types of Payment were given based on selection of Payment Option
            -   Only colors specific to the Tshirt design were shown based on the design selected

        -   The total Cost of Activites selected was calculated and displayed based on the actual activities chosen

        -   To prevent Scheduling conflicts, only activities not occurring on the same day and time were allowed to be selected

    
    * Validation of user input was provided by displaying helpful error messages if the user entered invalid information into the form fields or a green checkmark was provided for valid input.
        - This was done for User name, email and payment information inputs to check for correct formats using regex expressions
        - This was done for the selection of activies to ensure that at least one activity was selected

    * Validation was provided both with real-time input as well as before the form was submitted
