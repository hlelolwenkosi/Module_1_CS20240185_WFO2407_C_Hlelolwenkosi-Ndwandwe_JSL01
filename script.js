// Function to validate the pet adoption syntax
function validateSyntax() {
    // Get the input value from the input field
    const petInput = document.getElementById("petInput").value;

    // Regular expression to match the syntax: "pet_" followed by a 4-digit year and letters only
    const regex = /^pet_\d{4}[a-zA-Z]+$/;

    // Reference to the result paragraph
    const resultElement = document.getElementById("result");

    // Check if the input matches the expected syntax
    if (regex.test(petInput)) {
        resultElement.textContent = "Valid Syntax";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Invalid Syntax";
        resultElement.style.color = "red";
    }
}

