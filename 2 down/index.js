console.log('Я начал выполняться');
window.addEventListener('load', function(){
	//true третьим аргументом - установщик на погружение
	var c1 = document.querySelector('.c1');
	var c2 = document.querySelector('.c2');
	var c3 = document.querySelector('.c3');
	
	c1.addEventListener('click', function () {console.log('2')}, true);

	c2.addEventListener('click', function (e) {
		console.log('4');
		e.stopPropagation();
	}, true);
	
	c3.addEventListener('click', function () {console.log('6')}, true);
	
	c1.addEventListener('click', function () {console.log('1')});
	
	c2.addEventListener('click', function () {console.log('3')});
	
	c3.addEventListener('click', function () {console.log('5')});

});
//MDN Mozills Developers Network - крутое описание событий

console.log('Я закончил выполняться');