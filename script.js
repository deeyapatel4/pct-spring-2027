
/*
    IS 409 - University Event Registration
    Phi Chi Theta Spring 2027 Recruitment

    JavaScript Form Validation

    Features:
    1. Required field validation
    2. Email format validation
    3. Phone number validation
    4. Comments character limit
    5. Helpful error messages
    6. Success confirmation
    7. Live character counter
*/


// GET FORM ELEMENTS

const registrationForm = document.getElementById("registrationForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const eventChoice = document.getElementById("event");
const comments = document.getElementById("comments");

const feedback = document.getElementById("feedback");
const characterCount = document.getElementById("characterCount");


// FUNCTION TO DISPLAY ERROR MESSAGES

function showError(message, field) {
    feedback.textContent = message;
    feedback.className = "error";

    // Move keyboard focus to the field that needs correction
    field.focus();
}


// FUNCTION TO VALIDATE THE REGISTRATION FORM

function validateRegistration(event) {

    // Prevent the page from reloading
    event.preventDefault();

    // Read and clean up user input
    const first = firstName.value.trim();
    const last = lastName.value.trim();
    const emailText = email.value.trim();
    const phoneText = phone.value.trim();
    const chosenEvent = eventChoice.value;


    // CHECK 1: FIRST NAME

    if (first === "") {
        showError("Please enter your first name.", firstName);
        return;
    }


    // CHECK 2: LAST NAME

    if (last === "") {
        showError("Please enter your last name.", lastName);
        return;
    }


    // CHECK 3: EMAIL ADDRESS

    if (emailText === "") {
        showError("Please enter your email address.", email);
        return;
    }

    // Check that the email has a valid format
    if (!email.checkValidity()) {
        showError("Please enter a valid email address.", email);
        return;
    }


    // CHECK 4: PHONE NUMBER

    if (phoneText === "") {
        showError("Please enter your phone number.", phone);
        return;
    }

    // Allow common US phone number formats
    const phoneDigits = phoneText.replace(/\D/g, "");
    const phoneFormatOK = /^\+?[\d() .-]+$/.test(phoneText);

    if (!phoneFormatOK || phoneDigits.length !== 10) {
        showError(
            "Please enter a valid 10-digit phone number.",
            phone
        );
        return;
    }


    // CHECK 5: EVENT SELECTION

    if (chosenEvent === "") {
        showError(
            "Please select a recruitment event.",
            eventChoice
        );
        return;
    }


    // CHECK 6: COMMENTS CHARACTER LIMIT

    if (comments.value.length > 250) {
        showError(
            "Comments must be 250 characters or fewer.",
            comments
        );
        return;
    }


    // SUCCESS MESSAGE

    feedback.textContent =
        "Thank you, " + first +
        "! Your Spring 2027 Phi Chi Theta recruitment interest form " +
        "has been completed successfully. " +
        "This is a class demonstration, so no information was sent.";

    feedback.className = "success";

}


// CONNECT FORM SUBMISSION TO VALIDATION

registrationForm.addEventListener(
    "submit",
    validateRegistration
);


// LIVE CHARACTER COUNTER

function updateCharacterCount() {
    const currentLength = comments.value.length;

    characterCount.textContent =
        currentLength + " / 250 characters";
}

comments.addEventListener(
    "input",
    updateCharacterCount
);
