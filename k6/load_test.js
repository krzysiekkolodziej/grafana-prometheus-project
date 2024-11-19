import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '15s', target: 500 }, 
        { duration: '15s', target: 5000 }, 
        { duration: '15s', target: 25000 }, 
        { duration: '2m', target: 7500 },
    ],
};

export default function () {
    http.get('http://web_server/');
    sleep(1);
}