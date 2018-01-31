console.log('Я начал выполняться');
window.addEventListener('load', function(){

	var listener = function () {
		alert('На До Же На Жа Ли !');
		c1.removeEventListener('click', listener, false);
		console.log('Функция');
	};

	console.log('Внутри ф-ии');
	var c1 = document.querySelector('.c1');

	c1.addEventListener('click', listener, false);

});
//MDN Mozills Developers Network - крутое описание событий

console.log('Я закончил выполняться');