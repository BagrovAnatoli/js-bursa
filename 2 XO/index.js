//Ваш код будет здесь
window.addEventListener('load', function(){
	var cellsD = document.querySelectorAll('.cell');
	var newGame = document.querySelector('.startNewGame');
	var winnerMsg = document.querySelector('.winner-message');
	//console.log(newGame);
	newGame.addEventListener('click', function () {
		//alert('Новая игра');
		//alert(cellsD.length); // 9
		winnerMsg.innerHTML = '';
		var i;
		for(i = 0; i < cellsD.length; i++){
			//console.log(cellsD[i]);
			cellsD[i].className = 'cell';
		}
	});

});