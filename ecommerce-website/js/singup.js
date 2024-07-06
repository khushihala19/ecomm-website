
function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const cpassword = document.getElementById('confirmpassword').value;

    if (username && password) {
        const user = {
            username: username,
            password: password,
            cpassword:cpassword
        };
       // window.location.href='home.html';
    } 
    
    else {
        alert('Please fill all fields.');
    }
    if(password == cpassword){
        window.localStorage.setItem("inppass", password);
        window.localStorage.setItem("inpconf", cpassword);
        window.location.href = "home.html";
    }
    else {
        alert("please enter vaild password...");
        localStorage.setItem(username, JSON.stringify(user));
        alert('Signup successful!');
    }
  
}