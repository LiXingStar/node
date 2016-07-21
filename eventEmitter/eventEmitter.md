##EventEmitter
 事件触发和事件监听器功能的封装<br>
 通过require("events")来访问该模块
##方法
#1、addListener(event,listener)
    为指定事件添加一个监听器到监听数组的尾部
#2 on(event,listener)
    为指定事件注册一个监听器,接受一个字符串和一个回调函数
    server.on("aa",function(){console.log("注册一个监听器 ")})
#3 once(event,listener)
    为指定的事件注册一个单侧监听器,该监听器只会触发一次,触发之后被立即移除。
#4 removeListener(event,listener)
   移除指定事件的某个监听器,该监听器是该事件已经注册过得监听器
#5 removerAllListeners([event])
   移除所有事件的所有监听器,如果指定事件,则移除指定事件的所有监听器