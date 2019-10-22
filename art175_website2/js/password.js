
//attributes
//https://stackoverflow.com/questions/42180103/how-do-i-make-a-simple-password-page 


 function Pswd() {
        var confirmPassword = "mary";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="../art175_website2/page2.html";
        }
        else{
            alert("she was innocent.");
        }
    }
 