var anyroute = require('anyroute');
var ar = new anyroute;

function handler_default () {};
function handler_post () {};
var ret;

ret = ar.set('/collection/:cid/tab/:tabID', handler_default);
console.log(ret);

ret = ar.set('/collection/:cid/tab/:tabID', handler_default, 'default');
console.log(ret);

ret = ar.set('/collection/:cid/tab/:tabID/', handler_post, 'post')
console.log(ret);

console.log('--------------------');

ret = ar.get('/collection/:cid/tab/:tabID');
console.log(ret);

ret = ar.get('/collection/123/tab/456', 'default');
console.log(ret);

ret = ar.get('/collection/CCC:ccc/tab/Tab:tabID', 'post');
console.log(ret);

ret = ar.get('/collection/foo/tab/bar', 'all');
console.log(ret);
