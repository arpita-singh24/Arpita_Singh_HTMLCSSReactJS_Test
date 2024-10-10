const errorFirstName = document.getElementById('error-firstName');
const errorLastName = document.getElementById('error-lastName');
const errorEmail = document.getElementById('error-email');
const errorPhoneNumber = document.getElementById('error-phoneNumber');
const validationMessage = document.getElementsByClassName('validation-message');

document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Initially hides the error message
    for (let msg of validationMessage) {
        msg.style.display = 'none';
    }

    //Before Submit Checking for Validations
    if (validateForm()) {
      let formData = new FormData(this);
      // Creating an object to store the formatted data
      const dataObject = {
        first_name: formData.get("firstName"),
        last_name: formData.get("lastName"),
        phone_number: formData.get("phoneNumber"),
        email: formData.get("email"),
        password: formData.get("password"),
      };

      //console data 
      console.log(dataObject);
    }
  });

function validateForm() {
  // Getting all form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  //Comparing Validation
  const textInput = /^[a-zA-Z\s]+$/; // test for only letters and spaces
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // test for only letters and spaces

  if (!textInput.test(firstName)) {
    console.log("Wrong Input: " + firstName);  //Showing wrong input to user
    errorFirstName.style.display = 'block';
    return false; // Prevent form submission
  }

  if (!textInput.test(lastName)) {
    console.log("Wrong Input: " + lastName);  //Showing wrong input to user
    errorLastName.style.display = 'block';
    return false; // Prevent form submission
  }

  if (!emailPattern.test(email)) {
    console.log("Wrong Input: " + email);  //Showing wrong input to user
    errorEmail.style.display = 'block';
    return false; // Prevent form submission
  }

  if (phoneNumber === '' || isNaN(phoneNumber)) {
    console.log("Wrong Input: " + phoneNumber);  //Showing wrong input to user
    errorPhoneNumber.style.display = 'block';
    return false; // Prevent form submission
  }

  return true; // Allow form submission If all Validations are True
}
