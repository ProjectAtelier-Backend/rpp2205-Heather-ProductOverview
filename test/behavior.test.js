const request = require('supertest');


const rando = Math.floor(Math.random() * 1000010);

describe('All Products', (done) => {
  test('Should return 200 status for all products', (done) => {
    request('http://localhost:3000')
      .get('/products')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
})

describe('Product Info', () => {
  test('Product 300 should have 4 features', (done) => {
    request('http://localhost:3000')
      .get('/products/300')
      .expect((res) => {
        res.body.features.length = 4;
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('Should return 200 status for a random product', (done) => {
    request('http://localhost:3000')
      .get(`/products/${rando}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
})

describe('Related Products', () => {
  test('Product 62000 should have 6 related products', (done) => {
    request('http://localhost:3000')
      .get('/products/62000/related')
      .expect((res) => {
        res.body.length = 6;
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('Should return 200 status for a random product', (done) => {
    request('http://localhost:3000')
      .get(`/products/${rando}/related`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
})

describe('Product Styles', () => {
  test('Product 125008 should have 4 styles', (done) => {
    request('http://localhost:3000')
      .get('/products/125008/styles')
      .expect((res) => {
        res.body.results.length = 4;
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('Should return 200 status for a random product', (done) => {
    request('http://localhost:3000')
      .get(`/products/${rando}/styles`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
})
