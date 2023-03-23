function addUser(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let name = document.getElementById('full_name');
    let country = document.getElementById('country');
    let birth_date = document.getElementById('date');
    
    let key = email.value;
    let data = {
        email: email.value, 
        password: password.value,
        name: name.value, 
        country: country.value, 
        birth_date: birth_date.value
    }
    if (localStorage.getItem(key) === null){
        localStorage.setItem(key, JSON.stringify(data));
        email.value = "";
        password.value = "";
        name.value = "";
        country.value = "";
        data.value = "";
        alert("You are succesfull registrated")
    } else {
        alert("This email exists");
    }

}   

function checkUser(){
    let userLogin = document.getElementById('userLogin');  
    let userPassword = document.getElementById('userPassword');

    if (localStorage.getItem(userLogin.value) === null){
        userLogin.value = "";
        userPassword.value = "";
        alert("This email doesn't exists");
        return;
    }

    
    let data = JSON.parse(localStorage.getItem(userLogin.value));
    
    if (data.password == userPassword.value){
        let data = JSON.parse(localStorage.getItem(userLogin.value));
        location.href='loginSuc.html?'+ data.email
        window.open("loginSuc.html","_blank");     
    }
    
}


    
    



