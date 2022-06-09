document.getElementById('login-button').addEventListener('click', function () {
      
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    // get password input


    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;
    

    if(userEmail == 'smjonayet@gmail.com' && userPassword == 'smjonayet') {
        window.location.href = 'banking.html';
    }
});