let modal = document.querySelector('.modal');
let button = document.querySelector('.modal-button');
let close = document.querySelector('.close');
let body = document.querySelector('html');

let form = document.querySelector('form');

button.addEventListener('click', event => {
  modal.style.display = "block";
  modal.style.backgroundColor = "rgb(0,0,0)";
  modal.style.backgroundColor = "rgb(0,0,0,0.5)";
})

close.addEventListener('click', event => {
  modal.style.display = "none";
})

// validate textarea
function textarea(){
  let message = form.elements.message.value;
  let errorMessage = document.querySelector('.error-message');

  if (message === "") {
    errorMessage.innerHTML = "Message cannot be blank";
  }
}


form.addEventListener('submit', event => {
  textarea();

  alert('Submission accepted Successfully!!')
  event.preventDefault();
})
