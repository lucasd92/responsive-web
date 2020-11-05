// Get form by ID
var form = document.getElementById("register-form");
// Array with form fields
var inputList = [{id:'name',type: 'text', name:'Name', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
                 {id:'email',type: 'email', name:'Email', onError:'Invalid email', pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},
                 {id:'pass1',type: 'password', name:'Password', onError:'Must have at least 8 characters with numbers and letters', pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/},
                 {id:'pass2',type: 'password', name:'Re-type Password', onError:'Must have at least 8 characters with numbers and letters', pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/},
                 {id:'age',type: 'number', name:'Age', onError:'Must be 18 years or older', pattern: /^([1][8-9])|^([2-9][0-9])$/},
                 {id:'phone',type: 'number', name:'Phone Number', onError:'Must have at least 8 digits', pattern: /^[0-9]{8,}$/},
                 {id:'addr',type: 'text', name:'Address', onError:'Must have at least 5 characters with numbers and letters', pattern: /^([a-z0-9]{2,}[\s]+)+([0-9]+)$/i},
                 {id:'city',type: 'text', name:'City', onError:'Must have at least 3 characters', pattern: /^[a-z]{3,}$/i},
                 {id:'zipcode',type: 'number', name:'Zip Code', onError:'Must have at least 3 digits', pattern: /^[0-9]{3,}$/},
                 {id:'idn',type: 'number', name:'ID Number', onError:'Must have 7 or 8 digits', pattern: /^[0-9]{7,8}?$/}];

// On load add each field with its event listeners
window.onload = function() {
    //Generate form
    for(var i=0; i < inputList.length; i++){
        form.innerHTML += `<div>
                                <label id="${inputList[i].id}-label"> ${inputList[i].name} </label>         
                                <input id="${inputList[i].id}-input" type="${inputList[i].type}"></input> 
                                <p id="${inputList[i].id}-error">${inputList[i].onError}</p>              
                           </div>`;
    }
    //Generate submit button
    form.innerHTML +=   `<div id="submit-container">        
                            <input value="Submit" type="submit"></input>
                        </div>`;
    //Add events for form fields
    for(var i=0; i < inputList.length; i++){
        var input = document.getElementById(inputList[i].id +'-input');
        input.addEventListener('focus',genericFocus);
        input.addEventListener('blur',genericBlur);                    
    }
    //Add events for submit button
    var submitButton =  document.querySelector('input[type="submit"]');
    submitButton.addEventListener('click',submitForm);
    //Add events for title
    var nameInput =  document.getElementById('name-input');
    nameInput.addEventListener('keyup',titleTransform);
};
// Validations
function genericFocus(e){
    console.log(e.target.id);
    clearError(e.target.id);
};
// Generic onBlur function
function genericBlur(e){
    //Get first part of the id
    var listId = e.target.id.split('-')[0];
    // Find index in the InputList array
    var index = inputList.findIndex(element => element.id === listId);
    // Validate by id and pattern
    if(!validateInput(e.target.id, inputList[index].pattern)){
        showError(e.target.id); 
    }
};
function validateInput(element_id, patt){
    var content = document.getElementById(element_id).value;
    return patt.test(content);
};
function showError(itemId){
    var errorMsg = document.getElementById(itemId).nextElementSibling;
    errorMsg.style.display = 'block'; 
}; 
function clearError(itemId){
    var errorMsg = document.getElementById(itemId).nextElementSibling;
    errorMsg.style.display = 'none';  
}; 
function submitForm(e){
    e.preventDefault();
    var inputMsg = '';
    var alertMsg = '';
    for(var i=0; i < inputList.length; i++){
        if(!validateInput(inputList[i].id+'-input', inputList[i].pattern)){
            showError(inputList[i].id+'-input'); 
            alertMsg += 'Error in ' +inputList[i].name + ' field: \n' + inputList[i].onError + '\n';
        }
        var item = document.getElementById(inputList[i].id+'-input');
        if(item.type != 'password'){
            inputMsg += inputList[i].name + ': ' + item.value + '\n';
        } 
    }
    if(alertMsg.length > 5){
        alert(alertMsg);
    }
    else{
        alert(inputMsg);
    }
}
function titleTransform(e){
    document.getElementById('form-title').innerText = 'Hello ' +  e.target.value;
};