function validateLogin(){

    let email =
    document.getElementById("email").value;

    let password =
    document.getElementById("password").value;

    if(email === "" || password === ""){

        alert("Please fill in all details.");

    }

    else{

        alert("Login Successful!");

    }

}