var service=require("./service");
var router=require("./router");
service.start(router.route);
