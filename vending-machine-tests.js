var VendingMachine = require('./vending-machine.js')



var Tests = function(){

	this.displayTest(){
		var machine = new VendingMachine

		var expected = 'INSERT COIN'
		var actual = machine.display
		var result = expected == actual
		return result

	}

}

module.exports = Tests