class Validator {

constructor() {
    this.validations = [

    ]
}

validate(form) {

    let inputs = form.getElementsByTagName('input');

    let inputsArrays = [...inputs];

    inputsArrays.forEach(function(input){
console.log(input);
    });
    


}

}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

submit.addEventListener('click', function(e) {

    e.preventDefault();

validator.validate(form);

});