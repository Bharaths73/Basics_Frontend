const navbar=document.getElementById('navbar_div');
const login_btn=document.getElementById('login_btn');
const signup_btn=document.getElementById('signup_btn');
console.log(signup_btn);

const navbarLoader=()=>{
    fetch('navbar.html').then(res=>res.text()).then(data=>navbar.innerHTML=data);
}

document.addEventListener("DOMContentLoaded",navbarLoader);

const navigateToSignup=(e)=>{
    e.preventDefault();
    console.log("Entering");
    window.location.href='SignUp.html'
}

const navigateToLogin=(e)=>{
    e.preventDefault();
    window.location.href='Login.html';
}
signup_btn.addEventListener('click',navigateToSignup);
login_btn.addEventListener('click',navigateToLogin);

