console.log('Я начал выполняться');
window.addEventListener('load', function(){
	console.log('Я поменял HTML');
	//document.querySelector('h2').innerHTML = 'Я поменял HTML';
	// Развлекуха с querySelectorAll // возвращает массив элементов, удовлетворяющих
	// нужному свойству
	document.querySelectorAll('.iknowcss')[1].innerHTML = 'Я поменял HTML с помощью \nquerySelectorAll';
});
console.log('Я закончил выполняться');