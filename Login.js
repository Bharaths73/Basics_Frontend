let myname='';
const navbar=document.getElementById('navbar_div');
const email=document.querySelector('#email');

const navbarLoader=()=>{
    fetch('navbar.html').then(res=>res.text()).then(data=>navbar.innerHTML=data);
    const params = new URLSearchParams(window.location.search);
    console.log(params.size!=0);
    if(params.size!=0){
        const email_address = params.get('email');
        myname=email_address;
        email.value=myname;
    }
}

document.addEventListener("DOMContentLoaded",navbarLoader);