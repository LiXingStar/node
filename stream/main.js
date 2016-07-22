var fs=require("fs");
var data="www.lixing.com";
var writeStream=fs.createWriteStream("out.txt");
writeStream.write(data,"utf-8");
writeStream.end();
writeStream.on("finish",function(){
  console.log("写入完成");
})
writeStream.on('error',function(){
  console.log(err.stack);
})
console.log("程序执行完毕");
