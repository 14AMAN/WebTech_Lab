const usernameE1 = document.querySelector('#username');
const emailE1 = document.querySelector('#email');
const passwordE1 = document.querySelector('#password');
const confirmpasswordE1 = document.querySelector('#confirmpassword');
const form = document.querySelector("#signup");

form.addEventListener('submit',function(e){
    // prevent the form from submitting on click of submit
    e.preventDefault();
    // vvalidate forms
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordSecure = checkPass(),
        isConfirmPasswordValid = confirmPass();

    let isFormValid = isUsernameValid && isEmailValid && isPasswordSecure && isConfirmPasswordValid;
    // submit to server if valid
    if(isFormValid){
        // lines of code
    }
});

// debounce to wait before poping
const debounce = (fn , delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null,args)
        },delay);
    };
};

// instant feedback
form.addEventListener('input',debounce(function(e){
    switch(e.target.id){
        case 'username' :
            checkUsername();
            break;
        case 'email' :
            checkEmail();
            break;
        case 'password' :
            checkPass();
            break;  
        case 'confirmpassword' :
            confirmPass();
            break;  
    }
}));
// we need to develop utility function 

const isRequired = value => value === '' ? false : true ;

const isBetween = (length,min,max) => length <min || length > max ? false : true ;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)* )|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement ;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');
    // show the error message
    const error = formField.querySelector('Small');
    error.textContent = message ;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');
    // hide the error msg

    const error = formField.querySelector('small');
    error.textContent='';
}

const checkUsername = () => {
    let valid = false;
    const min = 5, max = 20;
    const username = usernameE1.value.trim();
    if(!isRequired(username)){
        showError(usernameE1,'Username cannot be Blank.');
    }else if(!isBetween(username.length , min , max)){
        showError(usernameE1,'Username must be between ${min} and ${max} characters.')
    }else{
        showError(usernameE1);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailE1.value.trim();
  if(!isRequired(email)){
    showError(emailE1,'Email cannot be Blank.');
  }else if(!isEmailValid(email)){
    showError(emailE1,'Email is not Valid.');
  }else{
    showSuccess(emailE1);
    valid = true;
  }
  return valid;
};
const checkPass = () => {
    let valid = false;
    const password=passwordE1.value;
    if(!isRequired(password)){
        showError(passwordE1,"Password cannot be empty.")
    }
    else if(!isPasswordSecure(password)){
        showError(passwordE1,"Password is not Secure.");
    }else{
        valid=true;
        showSuccess(passwordE1);
    }
    return valid;
}
const confirmPass = () => {
    let valid = false;
    const confirmPass=confirmpasswordE1.value;
    const password=passwordE1.value;
    if(!isRequired(confirmPass)){
        showError(confirmpasswordE1,"Re-enter the password, it cannot be empty.");
    }else if(password!==confirmPass){
        showError(confirmpasswordE1,"Password Don't Match.");
    }else{
        valid=true;
        showSuccess(confirmpasswordE1);
    }
    return valid;
};