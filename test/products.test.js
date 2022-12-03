const request = require('supertest');
const app = require('../server/index.js');


const rando = Math.floor(Math.random() * 1000010);

describe('All Products', () => {
  test('Should return 200 status for all products', async () => {
    try {
      const response = await request(app).get('/products');
      expect(response.statusCode).toBe(200);
    }
    catch (err) {
      console.log(err)
      throw err;
    }
  });
})

describe('Product Info', () => {
  test('Product 300 should have 4 features', async () => {
      try {
        const response = await request(app).get('/products/300');
        expect(response.body.features.length).toBe(4);
      }
      catch (err) {
        console.log(err)
        throw err;
      }
    });

    test('Should return 200 status for a random product', async () => {
      try {
        const response = await request(app).get(`/products/${rando}`);
        expect(response.statusCode).toBe(200);
      }
      catch (err) {
        console.log(err)
        throw err;
      }
    });
  });


describe('Related Products', () => {
  test('Product 62000 should have 6 related products', async () => {
      try {
        const response = await request(app).get(`/products/62000/related`);
        expect(response.body.length).toBe(6);
      }
      catch (err) {
        console.log(err)
        throw err;
      }
  });

  test('Should return 200 status for a random product', async () => {
      try {
        const response = await request(app).get(`/products/${rando}/related`);
        expect(response.statusCode).toBe(200);
      }
      catch (err) {
        console.log(err)
        throw err;
      }
  });
})

describe('Product Styles', () => {
  test('Product 125008 should have 4 styles', async () => {
      try {
        const response = await request(app).get(`/products/125008/styles`);
        expect(response.body.results.length).toBe(4);
      }
      catch (err) {
        console.log(err)
        throw err;
      }
  });

  test('Should return 200 status for a random product', async () => {
      try {
        const response = await request(app).get(`/products/${rando}/styles`);
        expect(response.statusCode).toBe(200);
      }
      catch (err) {
        console.log(err)
        throw err;
      }
  });
})
