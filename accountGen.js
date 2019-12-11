const md5 = require("md5");

let passwordToHash = "123456";
let salt = "there were 10 cows on the prairie!";

console.log( md5( md5(passwordToHash) + salt) );