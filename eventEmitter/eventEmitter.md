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
    为指定的事件注册一个单侧监听器,该监听器只会触发一次,触发之后被立即移除
#4 removeListener(event,listener)
   移除指定事件的某个监听器,该监听器是该事件已经注册过得监听器
#5 removerAllListeners([event])
   移除所有事件的所有监听器,如果指定事件,则移除指定事件的所有监听器
#6 setMaxListeners(n)
   默认情况下,如果你添加的监听器超过10个就会输出警告信息。该方法用来提高默认监听器的数量
#7 listeners(event)
   返回指定事件的监听器数组
#8 emit(event,[arg1],[arg2]) 
   执行监听器
##类方法
#1 listenerCount(emmitter,event)
   返回指定事件的监听器的数量
##事件
#1 newLitener
   event 字符串，事件名称
   listener 处理事件函数
   该事件在添加新监听器时被触发
#2 removerListener
   event 字符串,事件名称
   listener 处理事件函数
   从指定监听数组中删除一个监听器.需要注意的是,此操作会改变处于被删除监听器之后的那些监听器的索引
