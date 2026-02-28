const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль');
});

const  alertEvent = document.querySelector('#alert');
alertEvent.addEventListener('click', () => {
    alert('Метод для вывода диалогового окна с сообщением и кнопкой ОК');
});

const  promptEvent = document.querySelector('#prompt');
promptEvent.addEventListener('click', () => {
    alert('Метод для вывода диалогового окна с запросом на ввод текста');
});