// cuz same folder -> ./ en zonder .js
const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  // syntax zo met de # voor de add
  describe('#add', () => {
    it('should add two numbers', () => {
        var res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
        // if (res !== 44) {
        //   throw new Error(`Expected 44, but got ${res}.`);
        // }
    });

    // done toevoegen voor async. -> done callen en dan weet mocha da da async is
    it('should add two numbers async', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      })
    });
  });

  describe('#square', () => {
    it('should square a number', () => {
      var res = utils.square(2);

      expect(res).toBe(4).toBeA('number');
      // if (res !== 4) {
      //   throw new Error(`Expected 4, but got ${res}`);
      // }
    });

    it('should square async', (done) => {
      utils.squareAsync(5, (square) => {
        expect(square).toBe(25).toBeA('number');
        done();
      });
    });
  });
});



it('should expect some values', () => {
  // expect(12).toNotBe(11);
  // expect({name: 'Dries'}).toBe({name: 'Dries'}); -> WERKT NIET
  // expect({name: 'Dries'}).toEqual({name: 'Dries'}); -> WERKT
  // expect(['Dries', 'Sup', 'Koning']).toInclude('Dries');
  expect({
    name: 'Dries',
    age: 22,
    location: 'Belgium'
  }).toInclude({
    age: 22
  });
  // to exclude ook -> zien of het er NIET inzit.
});

// should verify first and last names are set
it('should set firstname and lastname', () => {
  var user = utils.setName({}, "Sup Dawg");
  expect(user).toInclude({
    firstName: 'Sup',
    lastName: 'Dawg'
  })
});
