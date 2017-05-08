var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons #1', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  })

  it('should have working number buttons #2', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have working number buttons #3', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('should have working number buttons #4', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  it('should have working number buttons #5', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })
  
  it('should have working number buttons #6', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })

  it('should have working number buttons #7', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  })

  it('buttons have working number buttons #8', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

  it('should have working number buttons #9', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  })

  it('should have working number buttons #10', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10')
  })

  it('+ operator updates display with result',
    function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number5')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number5')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('10')
    })

  it('- operator updates display with result',
    function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number9')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('5')
    })

  it('* operator update display with result',
    function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number5')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number5')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('25')
    })

  it('/ operator update display with result',
    function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number5')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number5')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('1')
    })

  it('can chain together operations',
    function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number5')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number3')).click();
      element(by.css('#operator_equals')).click();

      expect(running_total.getAttribute('value')).to.eventually.equal('5')
    })

  it('can calculate negative numbers', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number6')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();

      expect(running_total.getAttribute('value')).to.eventually.equal('-7')
    })

  it('can calculate decimals', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#operator_divide')).click()
      element(by.css('#number3')).click();
      element(by.css('#operator_equals')).click();

      expect(running_total.getAttribute('value')).to.eventually.equal('0.3333333333333333')
    })

  it('can calculate large numbers', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number1')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();

      expect(running_total.getAttribute('value')).to.eventually.equal('1000000000000')
    })

  // it('cannot divide by zero', function(){
  //     running_total = element(by.css('#running_total'))
  //     element(by.css('#number9')).click();
  //     element(by.css('#operator_divide')).click();
  //     element(by.css('#number0')).click();
  //     element(by.css('#operator_equals')).click();

  //     expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  //   })
  //
  // I quite like that dividing by 0 gives Infinity, but lets change the code to throw an alert instead



});