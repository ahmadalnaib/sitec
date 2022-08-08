const button = document.querySelector('.btn-danger');
const form=document.querySelector('form');



const disableButton = () => {
 
    button.disabled = true;
   button.classList.add("spinner-grow")

};

form.addEventListener('submit', disableButton);

