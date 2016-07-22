var fs=require("fs");
var readStream=fs.createReadStream("out.txt");
var writeStream=fs.createWriteStream("write.txt");
readStream.pipe(writeStream);
// 把一个文件夹里面的内容拷贝到另一个里面
console.log("执行完成");
