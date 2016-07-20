var student=require("./student");
var teacth=require("./teacth");

teacth.add("lixing");

function add(teacthName,students){
  teacth.add(teacthName);
  students.forEach(function(item,index){
    student.add(item);
  })
}
exports.add=add;
// module.exports=add;
