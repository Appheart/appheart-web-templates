const name = document.qu
const formTypes = ["contact-form", "Business Form"];

function createForm(firstname, lastname, email, phoneNumber) {
  this.name = {
    firstname : firstname,
    lastname : lastname
  }
  // this.birthDate = birthDate;

  this.contact = {
    email: email,
    phoneNumber: phoneNumber,
    // facebook: facebook,
    // instagram: instagram,

    displayContact : console.log(
      `${this.name.firstname} ${this.name.lastname} contact details 
      Email: ${email}
      Tel:${phoneNumber}`
    )
  }
  this.email = email;
  this.phoneNumber = phoneNumber;
}
let Paul = new createForm("Paul", "Ishaili", "paulishaili@gmail.com", "07047269316");

console.log(Paul.displayContact);

// function Person(name) {
//   this.name = name;
//   this.greeting = function() {
//     alert(`Hi! I am ${name}`)
//   };
// };
// let Paul = new Person("Paul")
// let Esther = new Person("Esther")

// Paul.greeting();
// Esther.greeting();
