const fs = require("fs");
const os = require("os")

fs.writeFileSync('./test.txt', " hey my love");

console.log(os.cpus().length);