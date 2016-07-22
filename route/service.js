var http=require("http");
var url=require("url");

function start(route){
   function onRequeat(request,response){
     var pathname=url.parse(request.url).pathname;
     console.log("Requeat for"+pathname+"received");

     route(pathname);

     response.writeHead(200,{"Content-Type":"text/plain"});
     response.write("Hello world");
     response.end();
   }
   http.createServer(onRequeat).listen(8888);
   console.log("Service has started");
}

exports.start=start;
