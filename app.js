"use strict";
function fetchWithAuth(url, method) {
    return 1;
}
fetchWithAuth('s', 'post');
let method = 'post';
// fetchWithAuth('s', method) // error
fetchWithAuth('s', method);
const method2 = 'post';
fetchWithAuth('s', method2);
let a = 'asdf';
// a = 'fdsa' // error
