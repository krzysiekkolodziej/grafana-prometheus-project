import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '15s', target: 500 }, 
        { duration: '15s', target: 5000 }, 
        { duration: '15s', target: 50000 }, 
        { duration: '15s', target: 0 },
    ],
};

export default function () {
    http.get('http://web_server/');
    sleep(1);
}