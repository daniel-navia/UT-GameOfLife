var Board = (function(){

	return function(x, y){

		var _rows = isNaN(x) || x < 3 ? 3 : x;
		var _columns = isNaN(y) || y < 3 ? 3 : y;
		var _cell = _rows + _columns - 4;

		var _board = [];
		_board = initBoard();

		function initBoard(){

			var aux = [];
			for (var i = 0; i < _rows * _columns; i++) {
				
				aux.push(new Cell());
			}
			return aux;
		};

		this.cellAliveInTheEdge = function(){

			cont = 0;

			for (var i = 0; i < _columns; i++) {
				
				if (_board[i].alive() || _board[((_rows-1)*_columns) + i].alive()) {

					cont++;
				}
			}

			for (var i = 0; i < _rows; i++) {
				
				if (_board[i * _columns].alive() || _board[(i * _columns) + _columns - 1].alive()) {

					cont++;
				}
			}

			return cont;
		};
		
		this.cellsAlive = function () {

			var cont = 0;

			for (var i = 0; i < _rows * _columns; i++) {
				
				if (_board[i].alive()) {

					cont++;
				};
			};
			return cont;
		};

		function randomGenerator(limit){

			return parseInt(Math.random() * (limit - 1));
		};

		function genereteLife(){

			var coordX;
			var coordY;

			do{

				coordX = randomGenerator(_rows);
				coordY = randomGenerator(_columns);

				if (positionFree(coordX, coordY)) {

					_board[coordX*_columns + coordY].liveOn();
					_cell--;
					console.log('Row: ' + (coordX + 1) + ', Column: ' + (coordY + 1));
				}
				else{

					continue;
				};

			}while(_cell > 0);

		};
	
	};
})();

var Cell = (function(){

	return function(){

		var _life = false;

		this.alive = function(){

			return _life;
		};

		this.liveOn = function(){

			_life = true;
		};

		this.die = function(){

			_life = false;
		};
	};
})();
