/*
Ищет элемент, удовлетворяющий CSS правилу
document.querySelector
*/
//document.querySelector('.iknowcss') // Вернёт элемент
//document.querySelector('.iknowcss').style // Вернёт
// CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
//var myDiv = document.querySelector('.iknowcss');
// можем менять свойства
//myDiv.style.backgroundColor = 'red';
//myDiv.style.width = '500px';
// даже те, которых не было в теге style
//myDiv.style.border = 'solid black 2px';

// поменяем содержимое с помощью .innerHTML Это то, что лежит внутри элемента 
//document.querySelector('h2');
document.querySelector('h2').innerHTML = 'Я поменял HTML';
//так не сработает, либо скрипт нужно размещать в самом конце страницы
// см след. файл