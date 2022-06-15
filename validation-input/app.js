
// function myFunction() {
//   // Get the value of the input field with id="numb"
//   let x = document.getElementById("name").value;
//   // If x is Not a Number or less than one or greater than 10
//   let text;
//   if (x === "") {
//     text = "Input not valid";
//   } 
//   document.getElementById("demo").innerHTML = text;
// }





let username=document.querySelector('.username')
let btn =document.querySelector('button')
let form =document.querySelector('form')



// show input error message
function showError(input,message)
{
const formControl=input.parentElement;
formControl.className='form-control error';
const small=formControl.querySelector('small');
small.innerText=message
}



btn.addEventListener('click',function(e){
  
  e.preventDefault();

  if(username.value === '')
  {
    showError(username,'Username is required')
  } else{
 form.submit();
 alert();
  }
});
