let contact_form = document.getElementById("contact_form");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let age = document.getElementById("age");
let email = document.getElementById("email");
let button = document.getElementById("contactus_button");
// let namevalid = false;
// let surnamevalid = false;
// let emailvalid = false;
// let agevalid = false;
// let valid = false;
button.addEventListener("click", function(myFunction) {
        myFunction.preventDefault();
        document.body.innerText = firstname.value + " " + lastname.value + "\n" + age.value + "\n" + email.value
    })
    //problem odur ki men ifin icinde preventdefault yazanda qebul etmir ve datalari gostermir. preventdefault isleyende ise sertleri qebul etmir.
    // if (firstname !== "" && firstname !== " " && firstname[0] === firstname[0].toUpperCase() && firstname.length > 3) {
    //     namevalid = true;
    // }
    // if (lastname !== "" && lastname !== " " && lastname[0] === lastname[0].toUpperCase() && lastname.length > 3) {
    //     surnamevalid = true;
    // }

// if (email !== "" && email !== " " && element === "@" && email === email.toLowerCase()) {
//     emailvalid = true;
// }


// if (age > 0) {
//     agevalid = true;
// }

// if (namevalid && surnamevalid && emailvalid && agevalid) {
//     valid = true;
// }
// if (valid) {
//     button.addEventListener("click", function(myFunction) {
//         myFunction.preventDefault();
//         document.body.innerText = firstname.value + " " + lastname.value + "\n" + age.value + "\n" + email.value
//     })
// }