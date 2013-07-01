describe("Game Of Life Kata", function() {

	it("need a two dimensional grid", function() {
	  
		var result = new Board(1,2);
		expect(result).toBeDefined();
	});

	it("in the edges of board no life can exists", function() {
	  	
	  	var _board = new Board(2, 2);
	  	expect(_board.cellAlive()).toBeEqual(0);
	});
});
