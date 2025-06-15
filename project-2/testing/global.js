console.log(__filename, __dirname);
console.log(global);

const {platform, userInfo} = require('os');

console.log(platform(), userInfo());
