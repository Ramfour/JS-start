const button =  document.querySelector('button');
button.addEventListener('click', ()=>{
    
});

const duplicateField = document.querySelector('#duplicateField');
const input =  document.querySelector('input');
input.addEventListener('input', function(e){
   duplicateField.textContent =  this.value;
});

