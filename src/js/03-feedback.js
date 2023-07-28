import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
console.log(form);

const key = "feedback-form-state";
const value = {}

form.addEventListener('input', throttle(onFormInput,  500));
form.addEventListener('submit', onFormSubmit);

populalForm() 

function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();

    console.log(JSON.parse(localStorage.getItem(key)));
      localStorage.removeItem(key);
}

function onFormInput(event) {
     event.preventDefault();
  value[event.target.name] = event.target.value;
   localStorage.setItem(key, JSON.stringify(value));

}

function populalForm() {
    const saveValue = JSON.parse(localStorage.getItem(key));
    if (saveValue) {
        let { email, message } = form.elements;
        email.value = saveValue.email;
        message.value = saveValue.message;
        
    }

}