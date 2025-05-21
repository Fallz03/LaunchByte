
 //Calling a function during form submission.

//     document.getElementById("form").addEventListener("submit", function(event) {
//     event.preventDefault();
// 	Swal.fire({
//      title: "Success!",
//      icon: "success",
//      draggable: true
//   });

// 	});
    let form = document.getElementById("form");
    form.addEventListener('submit', function(event){
        event.preventDefault();

    let nname = document.getElementById("name").value; 
    let surname = document.getElementById("surname").value;
    let birthdate = document.getElementById("birthdate").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let passwordsure = document.getElementById("passwordsure").value;
    
    
    if (localStorage.getItem(username)) {
    Swal.fire({
        icon: "error",
        title: "Username already exists!",
        text: "Please try username.",
    });
    return;
}

    if(password !== passwordsure){ 
        
        Swal.fire({
  icon: "error",
  title: "Passwords don't match!",
  text: "Check and try again.",
  
});
    return;
}


    if(password.length <6){
    
        Swal.fire({
  icon: "error",
  title: "Password too short!",
  text: "Password should be longer than 8 characters.",
  
});

        return;
    }
   const user = {
        name: nname, 
        surname: surname, 
        birthdate: birthdate, 
        username: username, 
        password: password
    };
    window.localStorage.setItem(username,JSON.stringify(user));
    // alert("registration complete !");
    Swal.fire({
  title: "Good Job!",
  text: "Registration Complete!",
  icon: "success"
      });
    
    setTimeout(() => {
         window.location.href = "launchbyte-login-page.html" ;
    } , 2000);
     
    

});