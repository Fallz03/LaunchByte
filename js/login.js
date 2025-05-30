document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;



    let user = localStorage.getItem(username);

    if (user) {
        let parsedUser = JSON.parse(user);
        if (parsedUser.password === password) {
            localStorage.setItem("user", JSON.stringify(parsedUser));

            Swal.fire({
                icon: "success",
                title: "Login successful!",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                window.location.href = "../LaunchByte/dist/pages/home.html"; // Replace with your homepage
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Incorrect password",
                text: "Please try again."
            });
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "User not found",
            text: "Please check your username or register."
        });
    }
});