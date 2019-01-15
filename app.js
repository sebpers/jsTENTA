// JavaScript eller jQuery
src = "https://code.jquery.com/jquery-3.3.1.js"
integrity = "sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
crossorigin = "anonymous"


//Skapar en loginknapp
var button = document.createElement('button');
document.body.appendChild(button);

button.style.width = '100px';
button.style.height = '50px';
button.textContent = 'Login';
button.style.position = 'relative';


// Skapar en wrapper
var wrapper = document.createElement('div');
wrapper.style.display = 'none';
document.body.appendChild(wrapper);


// Skapar en Login h1 i wrappern
var loginText = document.createElement('h1');


// Skapar en br
var br = document.createElement('br');


// Lägger in Logintext i wrappern
wrapper.appendChild(loginText);


// Skapar inputs
var input1 = document.createElement("input");
var input2 = document.createElement("input");
input1.setAttribute('id', 'inputText1');
input2.setAttribute('id', 'inputText2');


// Skapar en submit knapp
var submitButton = document.createElement("INPUT");
submitButton.setAttribute("type", "submit")


/* Toggle för knapp */
button.addEventListener('click', function () {

    // Visar Login rutan
    if (wrapper.style.display === "none") {

        loginForm()

    } else {
        // Tar bort login rutan
        wrapper.style.display = "none";
    }
});


// Form utseende
function loginForm() {
    wrapper.style.display = "block";
    wrapper.style.position = 'absolute';
    wrapper.style.width = '600px';
    wrapper.style.height = '400px';
    wrapper.style.backgroundColor = 'pink';


    // H1 - Login
    loginText.style.fontSize = '42px';
    loginText.style.textAlign = 'center';
    loginText.textContent = 'Login';
    loginText.style.paddingTop = '70px';


    // Input1 
    input1.type = "text";
    input1.name = "user_name";
    input1.style.width = '90%';
    input1.style.height = '25px';
    input1.style.position = 'absolute';
    input1.style.marginTop = '30px';
    input1.style.left = '4%';
    input1.style.placeholder = 'Username';

    wrapper.appendChild(input1);


    // Mellanrum mellan raderna
    wrapper.appendChild(br);

    // Input 2
    input2.type = "text";
    input2.name = "user_name";
    input2.style.width = '90%';
    input2.style.height = '25px';
    input2.style.position = 'absolute';
    input2.style.left = '4%';
    input2.style.marginTop = '80px';


    wrapper.appendChild(input2);


    // Mellanrum mellan raderna
    wrapper.appendChild(br);


    // Submitknapp
    submitButton.style.width = '90.6%';
    submitButton.style.height = '25px';
    submitButton.style.position = 'absolute';
    submitButton.style.left = '4%';
    submitButton.style.marginTop = '120px';

    wrapper.appendChild(submitButton);

}


// Login check
submitButton.addEventListener('click', function () {
    userName = document.getElementById('inputText1').value;
    password = document.getElementById('inputText2').value;

    if (userName === 'Steve' && password === '123') {
        alert('Login succeeded');

        // JSON
        $.get("https://jsonplaceholder.typicode.com/users/1", function (result) {
            $(emailBox).append('Email: ' + result.email);
        });

    } else {
        alert('oops fel, try again');
    }
})


// Skapar en ny box med email
var emailHeadline = document.createElement('h1');
emailHeadline.setAttribute('id', 'emailh1');
emailHeadline.style.textAlign = 'center';
emailHeadline.textContent = 'Email';


var emailBox = document.createElement('div');
emailBox.style.width = '400px';
emailBox.style.height = '400px';
emailBox.style.backgroundColor = 'lightgrey';
emailBox.style.position = 'absolute';


emailBox.style.top = '50%';
document.body.appendChild(emailBox);
emailBox.appendChild(emailHeadline);