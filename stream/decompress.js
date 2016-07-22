var fs=require("fs");
var zlib=require("zlib");
//解压
fs.createReadStream("out.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("out.txt"));
console.log("文件解压完成")
