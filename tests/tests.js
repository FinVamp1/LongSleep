let chai = require('chai');
let expect = chai.expect;
var firstName = 'Finbar';

describe("Log running test", () => {
    it("Should be first name", async () => {
      
      expect(firstName).equal('Justin');
    }).timeout(230000); // Custom Timeout 
  });

  function delay(interval) 
  {
     return it('should delay', done => 
     {
        setTimeout(() => done(), interval)
  
     }).timeout(interval + 100) // The extra 100ms should guarantee the test will not fail due to exceeded timeout
  }

  delay(120000);
var lastName = 'Smith';


describe("Log running test 2", () => {
    it("Should be last name", async () => {
      expect(lastName).equal('Ryan');
    }).timeout(230000); // Custom Timeout 
  });

  delay(120000);

  var guitarName = 'Fender';


describe("Log running test 2", () => {
    it("Should be last name", async () => {
      expect(guitarName).equal('Gibson');
    }).timeout(230000); // Custom Timeout 
  });

