
//attributes
//https://stackoverflow.com/questions/42180103/how-do-i-make-a-simple-password-page 
//attribute end

 function Pswd() {
        var confirmPassword = "mary"; //required password text
        var password = document.getElementById("pswd").value; //pswd ID value typed
        if (password == confirmPassword) { //if password typed is equal to required password
             window.location="../art175_website2/page2.html";//if password is equal, go to this page
        }
        else{
            alert("she was innocent."); //alert if wrong password is entered
        }
    }
 