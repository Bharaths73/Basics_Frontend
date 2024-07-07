const signup_btn1=document.getElementById('signup_btn1');
const signup_form=document.querySelector('.signup_form');
console.log(signup_form);
console.log(signup_btn1);
const navbar=document.getElementById('navbar_div');

const navbarLoader=()=>{
    fetch('navbar.html').then(res=>res.text()).then(data=>navbar.innerHTML=data);
}

document.addEventListener("DOMContentLoaded",navbarLoader);

function formSubmission(e){
    e.preventDefault();
    console.log('Sign Up');
    const form=e.target;
    const password = form.querySelector('#password').value;
    const firstName=form.querySelector('#firstName').value;
    const lastName=form.querySelector('#lastName').value;
    const email=form.querySelector('#email').value;
    const confirm_password = form.querySelector('#confirmPassword').value;
    const error_message=form.querySelectorAll('.error');


    if(password===confirm_password){
        const path=`Login.html?email=${encodeURIComponent(email)}`;
        const url='';
        const data={
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
        }
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data),
        }).then(res=>{
            console.log("Response is ",res);
        }).catch(err=>{
            console.log("Error is ",err);
        })
        window.location.href=path;
    }
    else{
        window.alert('Password and confirm password not matching');
        error_message.forEach(element => {
            element.style.display='block';
        });
        return;
    }
    
}

signup_form.addEventListener('submit',formSubmission);

