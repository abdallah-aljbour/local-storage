document.getElementById("info").addEventListener("submit", function (event) {
  event.preventDefault();
  const Person = {
    firstname: document.getElementById("name").value,
    password: document.getElementById("pass").value,
    dob: document.getElementById("date").value,
    gender: document.getElementById("gender").value,
    phone: document.getElementById("phone"),
    cd: document.getElementById("cd").value,
  };
  let patients = [];
  patients.push(Person);
  console.log(patients);
  let o = localStorage.setItem("arr", JSON.stringify(patients));
  let y = JSON.parse(localStorage.getItem("arr"));
  //   console.log(y);
  document.getElementById("information").innerHTML = "aaaaaaaaa" + "" + y;
  //
});

/////////////////////////////////////////////////////////////////////

// document
//   .getElementById("patient-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const patient = {
//       fullName: document.getElementById("full-name").value,
//       password: document.getElementById("password").value,
//       dob: document.getElementById("dob").value,
//       gender: document.getElementById("gender").value,
//       phone: document.getElementById("phone").value,
//       chronicDiseases: document.getElementById("chronic-diseases").value,
//     };

//     let patients = JSON.parse(localStorage.getItem("patients")) || [];
//     patients.push(patient);
//     localStorage.setItem("patients", JSON.stringify(patients));

//     alert("Patient information submitted successfully!");
//     document.getElementById("patient-form").reset();
//   });
