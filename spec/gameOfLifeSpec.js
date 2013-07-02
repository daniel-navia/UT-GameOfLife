describe("Game Of Life Kata", function() {

	it("need a two dimensional grid", function() {
	  
		var result = new Board(1,2);
		expect(result).toBeDefined();
	});

	it("in the edges of board no life can exists", function() {
	  	
	  	var _board = new Board(2, 2);
	  	expect(_board.cellAliveInTheEdge()).toEqual(0);
	});

	it("any live cell with fewer than two neighbors dies.", function() {
	  
	  var _board = new Board(3,3);
	  _board.nextGeneration();
	  expect(_board.cellsAlive()).toEqual(0);
	});

	it("any live cell with more than three neighbors dies.", function() {
	  
	  var _board = new Board(5,5);
	  _board.setLife(2,2);
	  _board.setLife(2,3);
	  _board.setLife(2,4);
	  _board.setLife(3,3);
	  _board.setLife(3,4);
	  _board.nextGeneration();

	  var _result = new Board(5,5);
	  _result.setLife(2,2);
	  _result.setLife(2,4);
	  _result.setLife(3,2);
	  _result.setLife(3,4);

	  expect(_board.cellsAlive()).toEqual(_result.cellsAlive());
	});	
    
    	it("Any dead cell with exactly three live neighbours becomes a live cell", function() {
	  
	  var _board = new Board(4,4);
	  _board.setLife(2,2);
	  _board.setLife(2,3);
	  _board.setLife(3,3);
	  _board.nextGeneration();

	  var _result = new Board(4,4);
	  _result.setLife(2,2);
	  _result.setLife(2,3);
	  _result.setLife(3,2);
	  _result.setLife(3,3);

	  expect(_board.cellsAlive()).toEqual(_result.cellsAlive());
	});
});
