var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('previous total starts at 0', function(){
    assert.equal(0, calculator.previousTotal);
  });

  it('running total starts at 0', function(){
    assert.strictEqual(0, calculator.runningTotal);
  });

  it('calculator can add', function(){
    calculator.add(10);
    assert.strictEqual(10, calculator.runningTotal);
  });

  it('calculator can subtract', function(){
    calculator.previousTotal = 10;
    calculator.subtract(5);
    assert.strictEqual(5, calculator.runningTotal);
  });

  it('calculator can multiply', function(){
    calculator.previousTotal = 10;
    calculator.multiply(10);
    assert.strictEqual(100, calculator.runningTotal);
  });

  it('calculator can divide', function(){
    calculator.previousTotal = 100;
    calculator.divide(10);
    assert.strictEqual(10, calculator.runningTotal);
    });

  it('numberClick resets newTotal if running total is 0', function(){
    calculator.runningTotal = 0;
    calculator.numberClick(5);
    assert.strictEqual(false, calculator.newTotal)
  });

  it('numberClick concatenates number if newTotal is false', function(){
    calculator.newTotal = false;
    calculator.runningTotal = 1;
    calculator.numberClick(5);
    assert.strictEqual(15, calculator.runningTotal)
  })

  it('numberClick does not concatenate if newTotal is true', function(){
    calculator.runningTotal = 1;
    calculator.numberClick(5)
    assert.strictEqual(5, calculator.runningTotal)
  })

  it('equals button clears previousOperator', function(){
    calculator.previousOperator = '+';
    calculator.operatorClick('=');
    assert.strictEqual(null, calculator.previousOperator)
  })

  it('equals button sets running total to previous total', function(){
    calculator.runningTotal = 10;
    calculator.operatorClick('=');
    assert.strictEqual(10, calculator.previousTotal)
  }) 

  it('+ button adds', function(){
    calculator.runningTotal = 10;
    calculator.operatorClick('+');
    calculator.runningTotal = 5;
    calculator.operatorClick('=')
    assert.strictEqual(15, calculator.runningTotal)
  })

  it('- button subtracts', function(){
    calculator.runningTotal = 10;
    calculator.operatorClick('-');
    calculator.runningTotal = 3;
    calculator.operatorClick('=')
    assert.strictEqual(7, calculator.runningTotal)
  })

  it('* button multiplies', function(){
    calculator.runningTotal = 10;
    calculator.operatorClick('*');
    calculator.runningTotal = 10;
    calculator.operatorClick('=');
    assert.strictEqual(100, calculator.runningTotal)
  })

  it('/ button divides', function(){
    calculator.runningTotal = 10;
    calculator.operatorClick('/');
    calculator.runningTotal = 10;
    calculator.operatorClick('=');
    assert.strictEqual(1, calculator.runningTotal);
  })

  it('clear button resets running total', function(){
    calculator.runningTotal = 10;
    calculator.clearClick();
    assert.strictEqual(0, calculator.runningTotal);
  })

  it('clear button resets previousOperator & previousTotal if runningTotal is 0', function () {
    calculator.previousTotal = 10;
    calculator.previousOperator = '+';
    calculator.clearClick();
    assert.strictEqual(null, calculator.previousTotal);
    assert.strictEqual(null, calculator.previousOperator);
    
  })



  

});
