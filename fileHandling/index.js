const http = require("http");
const fs =  require("fs");


const myServer = http.createServer((req, res)=>{
    // console.log(req.url);
    const logs = `${Date.now()} : new req recieved : ${req.url} \n` 
    fs.appendFile('./log.txt',logs,(err, data)=>{
        console.log(err);
    })
    res.end("server started");
})

// fs.writeFile('./log.txt', "Log Details -", (err, data)=>{
//     console.log(" error", err);
// });

myServer.listen( 3000, ()=>{
    console.log("server is running at port 3000");
})