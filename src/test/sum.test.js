// test('adds 1 + 2 to equal 3', () => {
  //  expect(1 + 2).toBe(3);
   // expect(1 + 2).toEqual(3);
    // toEqual
    //       expect(a + b).not.toBe(0);


    /**
     * 
toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matches anything that an if statement treats as false


  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);

  //  expect('team').not.toMatch(/I/);


  //   expect(shoppingList).toContain('beer');


    expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);






  test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});



describe('matching cities to foods', () => {


});


     */

 // });

  /*
test.only('this will be the only test that runs', () => {
expect(true).toBe(false);
}); */

// const requireDir = require('require-dir');
const supertest = require('supertest');

const application = require('../app/bootstrap');
application.init(false);
const app = application.getApp();


describe('Estando HTTP crud de contatos', () => {

    beforeAll( () => {
//        requireDir('../models')
    })

    test('this test will not run', async () => {

       // const res = await supertest(app).get('/contatos');
       // expect(res.statusCode).toBe(200)
       // expect(res.body).toHaveProperty('_id')

      /*  request('./api/v1/contacts')
            .then(function (response, body) {
                console.log(response);})
            .catch(function (err) {
                console.log("Error");
            }); */
    });

});


