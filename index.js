let email = document.getElementsByClassName('email')[0];
let confirm = document.getElementsByClassName('confirm')[0];
let password = document.getElementsByClassName('password')[0];
let emailerror = document.getElementsByClassName('email-error')[0];
let confirmerror = document.getElementsByClassName('confirm-error')[0];

let button = document.getElementsByClassName('create')[0];

email.addEventListener('input', () => {
    if (!email.value.includes('@')) {
        emailerror.style.display = 'block';
        email.style.border = '1px solid red';
    } else {
        emailerror.style.display = 'none';
        email.style.border = '';
    }
});

confirm.addEventListener('input', () => {
    if (confirm.value !== password.value) {
        confirmerror.style.display = 'block';
        confirm.style.border = '1px solid red';
    } else {
        confirmerror.style.display = 'none';
        confirm.style.border = '';
    }
});


