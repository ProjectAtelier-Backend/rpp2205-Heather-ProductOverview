import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 90 },
    { duration: '1m30s', target: 100 },
    { duration: '20s', target: 70 },
    { duration: '1m', target: 200 },
    { duration: '2m', target: 300 },
  ]
};
const baseUrl = 'http://localhost:3001';
const rando = Math.floor(Math.random() * 1000011);

export default function () {
  http.batch([
    ['GET', `${baseUrl}/products`],
    ['GET', `${baseUrl}/products/${rando}`],
    ['GET', `${baseUrl}/products/${rando}/related`],
    ['GET', `${baseUrl}/products/${rando}/styles`],
  ]);
  // const result = http.get('http://localhost:3000/products');
  // check(result, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}