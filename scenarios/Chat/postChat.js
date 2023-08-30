import http from 'k6/http';
import { check, fail, sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

import { messages } from '../../constants/index.js';

export let postChatDurationTrend = new Trend('Post_Chat_Duration_Trend');
export let postChatFailRate = new Rate('Post_Chat_Fail_Rate');
export let postChatSuccessRate = new Rate('Post_Chat_Success_Rate');
export let postChatReqs = new Counter('Post_Chat_Reqs');
export let postChatCounter = new Counter('Post_Chat_Counter');

export default function () {
  const host = "https://doctorwise-backend.onrender.com"
  const url = `${host}/chat`;

  const payload = JSON.stringify({
    messages,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 123',
      'x-fingerprint': `test-${__VU}-${__ITER}`
    },
  };

  let response = http.post(url, payload, params);

  postChatDurationTrend.add(response.timings.duration);
  postChatReqs.add(1);
  postChatCounter.add(1);

  postChatFailRate.add(response.status === 0 || response.status >= 400);
  postChatSuccessRate.add(response.status < 400);

  check(response, {
    'is successfull': (r) => r.status < 400,
  }) || fail(`status code was not successfull: ${response.status}`);

  sleep(1);
}
