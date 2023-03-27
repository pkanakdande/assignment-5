var http = require("http");
const fs =require("fs")
const httpServer = http.createServer(handleServer);


let data={
    phone: '18602100000', 
    email: 'guestcaredominos@jublfood.com' 
}

const objdata=JSON.stringify(data)

function handleServer(req, res) {
   if(req.url==="/welcome")
   {
    let output=fs.readFileSync("index.html")
    res.end(output)
   }

   else if(req.url==="/contact")
   {
    res.end(objdata)

       }
       else if(req.url==="*")
       {
        // res.end("404 not found")
        response.writeHead(200);
    response.write("404 not found");
       }

   }

    




httpServer.listen(8081,"localhost",()=>{
    console.log("run")
})
// module.exports = httpServer;