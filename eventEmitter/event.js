var eventEmitter=require("events").EventEmitter;
var events=new eventEmitter();
events.on("aa",function(){
   console.log("事件触发了");
})
setTimeout(function(){
  events.emit("aa");
},1000)
