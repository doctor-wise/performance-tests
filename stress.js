import postChat from './scenarios/Chat/postChat.js';
import { group, sleep } from 'k6';

export default () => {
  group('Endpoint Post Chat Answer', () => {
    postChat();
  });

  sleep(1);
}