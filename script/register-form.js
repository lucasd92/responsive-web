// Get form by ID
var form = document.getElementById("register-form");

// Array with form fields
var inputList = [{id:'name',type: 'text', name:'Name', onFocus: nameFocus, onBlur: nameBlur, onError:'At least 6 characters. Ex: John Doe'},
                 {id:'email',type: 'email', name:'Email', onFocus: emailFocus, onBlur: emailBlur, onError:'Invalid email'},
                 {id:'pass1',type: 'password', name:'Password', onFocus: passFocus, onBlur: passBlur, onError:'Must have at least 8 characters with numbers and letters'},
                 {id:'pass2',type: 'password', name:'Re-type Password', onFocus: passFocus, onBlur: passBlur, onError:'Must have at least 8 characters with numbers and letters'},
                 {id:'age',type: 'number', name:'Age', onFocus: ageFocus, onBlur: ageBlur, onError:'Must be 18 years or older'},
                 {id:'phone',type: 'number', name:'Phone Number', onFocus: phoneFocus, onBlur: phoneBlur, onError:'Must have at least 8 digits '},
                 {id:'addr',type: 'text', name:'Address', onFocus: addrFocus, onBlur: addrBlur, onError:'Must have at least 5 characters with numbers and letters'},
                 {id:'city',type: 'text', name:'City', onFocus: cityFocus, onBlur: cityBlur, onError:'Must have at least 3 characters'},
                 {id:'zip-code',type: 'number', name:'Zip Code', onFocus: zipFocus, onBlur: zipBlur, onError:'Must have at least 3 digits'},
                 {id:'idn',type: 'number', name:'ID Number', onFocus: idnFocus, onBlur: idnBlur, onError:'Must have 7 or 8 digits'}];
                 

// On load add each field with its event listeners
window.onload = function() {
    for(var i=0; i < inputList.length; i++){
        form.innerHTML += '<div>\
                                <label id="'+ inputList[i].id +'-label">'+ inputList[i].name +'</label>         \
                                <input id="'+ inputList[i].id +'-input" type="'+ inputList[i].type +'"></input> \
                                <p id="'+ inputList[i].id +'-error">'+ inputList[i].onError +'</p>              \
                           </div>';
    }
    // Events are not working in the same loop
    for(var i=0; i < inputList.length; i++){
        var input = document.getElementById(inputList[i].id +'-input');
        input.addEventListener('focus',inputList[i].onFocus);
        input.addEventListener('blur',inputList[i].onBlur);                    
    }
};

// Validations
function nameFocus(){
    clearError(event);
};

function nameBlur(){
    if(!validateInput(event.target.id)){
        showError(event); 
    }
};

function emailFocus(){
    clearError(event);
};

function emailBlur(){
    showError(event)
};

function passFocus(){
    clearError(event);
};

function passBlur(){
    showError(event)
};

function ageFocus(){
    clearError(event);
};

function ageBlur(){
    showError(event)
};

function phoneFocus(){
    clearError(event);
};

function phoneBlur(){
    showError(event)
};

function addrFocus(){
    clearError(event);
};

function addrBlur(){
    showError(event)
};

function cityFocus(){
    clearError(event);
};

function cityBlur(){
    showError(event)
};

function zipFocus(){
    clearError(event);
};

function zipBlur(){
    showError(event)
};

function idnFocus(){
    clearError(event);
};

function idnBlur(){
    showError(event)
};

function validateInput(element_id){

    var content = document.getElementById(element_id).value;
    var patt;

    switch (element_id) {
        case 'name-input':
            patt = /^[a-zA-Z]+[\s]{1}[a-zA-Z]*/im;
            break;
    
        default:
            break;
    }

    return patt.test(content);
};
function showError(event){
    var errorMsg = document.getElementById(event.target.id).nextElementSibling;
    errorMsg.style.display = 'block'; 
}; 

function clearError(event){
    var errorMsg = document.getElementById(event.target.id).nextElementSibling;
    errorMsg.style.display = 'none';  
}; 