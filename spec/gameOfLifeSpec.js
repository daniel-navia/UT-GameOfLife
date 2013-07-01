describe("Game Of Life", function() {

	it("need a two dimensional grid", function() {
	  
		var result = new Board();
		expect(result).isDefined();
	});
});
