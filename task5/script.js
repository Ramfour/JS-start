function updateInput (element){
   duplicateField.textContent =  this.value;
}


const duplicateField = document.querySelector('#duplicateField');
const input =  document.querySelector('input');
input.addEventListener('input', updateInput);

const button =  document.querySelector('button');
button.addEventListener('click', ()=>{
       console.log('Текст поля ввода: '+input.value);
       duplicateField.textContent =  input.value = '';
});



