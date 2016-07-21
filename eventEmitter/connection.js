var events=require("events");
var eventsEmitter=new events.EventEmitter;

var listener1=function listener1(){
   console.log("listener1");
}
var listener2=function listener2(){
   console.log("listener2");
}

eventsEmitter.on("connection",listener1);
eventsEmitter.on("connection",listener2);
var listenerCount=require("events").EventEmitter.listenerCount(eventsEmitter,"connection");
console.log(listenerCount+"个监听器链接事件");

eventsEmitter.emit("connection");
eventsEmitter.removeListener("connection",listener1);
console.log("listener1不在受监听");

eventsEmitter.emit("connection");
listenerCount=require("events").EventEmitter.listenerCount(eventsEmitter,"connection");
console.log(listenerCount+"个监听器链接事件");
console.log("程序运行结束");
