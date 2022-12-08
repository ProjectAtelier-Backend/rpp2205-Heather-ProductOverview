

import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 1000,
  duration: '2m',
  thresholds: {
    http_req_duration: ['max<2000'],
    http_req_failed: ['rate<.01'],
    http_reqs: ['count>=100'],
  }
};

export default function () {
  const response = http.get('http://localhost:3001/products');
  check(response, {
    'is status 200': (r) => r.status === 200,
    'transaction time < 200ms': (r) => r.timings.duration < 250,
    'transaction time < 500ms': (r) => r.timings.duration < 500,
    'transaction time < 1000ms': (r) => r.timings.duration < 1000,
    'transaction time < 2000ms': (r) => r.timings.duration < 2000,
  });
}