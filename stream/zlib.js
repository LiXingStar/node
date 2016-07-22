var fs=require("fs");
var zlib=require("zlib");
// 压缩文件 out.txt 为 out.txt.gz
fs.createReadStream("out.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("out.txt.gz"));
console.log("文件压缩完成");
