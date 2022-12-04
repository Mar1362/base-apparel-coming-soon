const error = document.getElementById('error-messsage');
const input = document.querySelector('input[type="email"]');

input.onchange = function(){
    if(input.checkValidity()) error.className = "hide";
    else error.className = "show";
}