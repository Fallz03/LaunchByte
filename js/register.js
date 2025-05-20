"use strict"


let nname = document.getElementById("name").value; 
let surname = document.getElementById("surname").value;
let birthdate = document.getElementById("birthdate").value;
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let form = document.getElementById("form");


 
 //Calling a function during form submission.

//     document.getElementById("form").addEventListener("submit", function(event) {
//     event.preventDefault();
// 	Swal.fire({
//      title: "Success!",
//      icon: "success",
//      draggable: true
//   });



// 	});
 


 form.addEventListener('submit', register);



function register(event){
    console.log("Register successful");
    
    const user = {
        name: nname, 
        surname: surname, 
        birthdate: birthdate, 
        username: username, 
        password: password
    };
    window.localStorage.setItem("user",user);
    event.preventDefault()
}

