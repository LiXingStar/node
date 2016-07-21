var events=require("events");
var eventsEmitter=new events.EventEmitter;
eventsEmitter.on("events_lists",function(arg1,arg2){
console.log("listener1",arg1,arg2);
})
eventsEmitter.on("events_lists",function(arg1,arg2){
console.log("listener2",arg1,arg2);
})
eventsEmitter.emit("events_lists","arg1参数","arg2参数");
