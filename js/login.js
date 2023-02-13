//Submit Button
document.getElementById('btn-submit').addEventListener('click', function(){
 
    let userEmail = document.getElementById('user-email').value; 
    let userPassword = document.getElementById('user-password').value;
    var passwordFormate=  /^[A-Za-z]\w{7,14}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(userEmail.match(mailformat) && userPassword.match(passwordFormate)){ 
        window.location.href = ("bank.html");
    }else {
        alert('Invalid username password');
    }
     

});