const hrefText = document.querySelector('#href-text');
hrefText.addEventListener('click', function(e) {
    hrefText.textContent = prompt('Введите текст ссылки');
    e.preventDefault();
});