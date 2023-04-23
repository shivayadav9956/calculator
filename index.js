function display(number){
    document.getElementById("result").value+=number;
}
function calculate(){
   var result= document.getElementById("result").value;
   var y=eval(result);
   document.getElementById("result").value=y;
}
function clearsrcr(){
    document.getElementById("result").value="";
}
