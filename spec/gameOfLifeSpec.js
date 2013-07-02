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
	  
	  var _board = new Board(8,8);
	  expect(_board.cellsAlive()).toEqual(0);
	});

	it("any live cell with more than three neighbors dies.", function() {
	  
	  var _board = new Board(10,2);
	  expect(_board.cellsAlive()).toEqual(0);
	});	
    it("Any dead cell with exactly three live neighbours becomes a live cell", function() {
	  
	  var _board = new Board(14,14);
	  expect(_board.cellsAlive()).toEqual(0);
	});
});
