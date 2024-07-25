const http = require("http");
 const url = require("url");


const myServer = http.createServer((req, res)=>{
const myurl = url.parse(req.url, true );

console.log(" url after parsing", myurl);



res.end(` my name is ${myurl.query.myname}`);
})


myServer.listen( 3000, ()=>{
    console.log("server is running at port 3000");
})