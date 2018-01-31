console.log('Я начал выполняться');
window.addEventListener('load', function(){
	document.querySelector('.c3').addEventListener('click', function(event){
		document.querySelector('.c3').style.backgroundColor = 'yellow';
		event.stopPropagation();// остановит распространение event на вышележащие элементы
		// это оназывается остановка всплытия
	});

	document.querySelector('.c2').addEventListener('click', function(){
		document.querySelector('.c2').style.backgroundColor = 'white';
	});

});
//MDN Mozills Developers Network - крутое описание событий

console.log('Я закончил выполняться');