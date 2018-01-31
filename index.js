//Ваш код будет здесь
window.addEventListener('load', function(){
	var cellsD = document.querySelectorAll('.cell');
	console.log(cellsD);
	var cell;
	var newGame = document.querySelector('.startNewGame');
	var winnerMsg = document.querySelector('.winner-message');
	var i;
	var winner;
	//console.log(newGame);

	newGame.addEventListener('click', function () {
		//alert('Новая игра');
		//alert(cellsD.length); // 9
		winnerMsg.innerHTML = ''; // Убираем сообщение о победителе
		for(i = 0; i < cellsD.length; i++){
			//console.log(cellsD[i]);
			cellsD[i].className = 'cell'; // очищаем ячейки.
			//было 'cell o' или 'cell x'
		}
	});

	var simbol = 'x';
	cellsD.forEach(function(el,index){
		el.addEventListener('click', function(){
			//alert(index);
			console.log(simbol);
			if(!(el.classList.contains('x') || el.classList.contains('o'))){
				el.className = 'cell ' + simbol;
				simbol = simbol === 'x' ? 'o' : 'x';	
			}
			winner = getWinner();
			console.log(winner);
			if(winner == 'x'){
				winnerMsg.innerHTML = 'Победил крестик';
			}else
			if (winner == 'o'){
				winnerMsg.innerHTML = 'Победил нолик';
			}


		});
	});

	// Следующий вариант выводит всегда 9, если let заменить на var
	// for(let i = 0; i < cellsD.length; i++){
	// 	cellsD[i].addEventListener('click', function(){
	// 		alert(i);
	// 	});
	// }

});