function Login() 
{
    document.getElementById("new_acc").style.display = "none";
    document.getElementById("existing_acc").style.display = "inline-block";
    document.getElementById("exist").style.backgroundColor = "#123C69";
    document.getElementById("newacc").style.backgroundColor = "transparent";
}

function Signup() 
{
    document.getElementById("existing_acc").style.display = "none";
    document.getElementById("new_acc").style.display = "inline-block";
    document.getElementById("exist").style.backgroundColor = "transparent";
    document.getElementById("newacc").style.backgroundColor = "#123C69";
}

function sign() {
    var pass = document.getElementById("password").value;
    var email = document.getElementById("mail").value;
    localStorage.setItem('password', pass);
    localStorage.setItem('email', email);
}

function sendddemail() 
{
    Email.send({
        Host: "smtp.elasticemail.com",
        Username : 'divya.chhoriya21@gmail.com',
        Password : "CDE9156908B7018A0AE60D24FCE82390F2BD",
        To: localStorage.getItem('email'),
        From: 'divya.chhoriya21@gmail.com',
        Subject: "Forgot password?",
        Body: "Your password is: " + localStorage.getItem('password'),
    })
        .then(function (message) { 
        alert("mail sent successfully");
        });
}

function logout() 
{
    window.localStorage.clear();
}