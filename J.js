n =  new Date();
y = n.getFullYear();
d = n.getDate();
m = n.getMonth() + 1;
if(m+1===1){ m ="January";}
else if(m+1===2){m="February";}
else if(m+1===3){m="March";}
else if(m+1===4){m="April";}
else if(m+1===5){m="May";}
else if(m+1===6){m="June";}
else if(m+1===7){m="July";}
else if(m+1===8){m="August";}
else if(m+1===9){m="September";}
else if(m+1===10){m="October";}
else if(m+1===11){m="November";}
else {m="December";}
if(d<10){ d = "0"+d;}
var day = d + " " + m + " " + y;
document.getElementById("date").innerHTML = day;

function func(){
var input = document.getElementById("myInput");
var date = document.getElementById("due");
var datev = date.value;
var x = document.createElement("INPUT");
x.setAttribute("type","radio");
x.setAttribute("name","item-radio");
x.setAttribute("style","width: 15px;height: 15px");
x.setAttribute("value",input.value);
document.getElementById("items").appendChild(x);
var y = document.createElement("INPUT");
y.setAttribute("type","text");
y.setAttribute("value",input.value+"                                         Due: "+datev);
y.setAttribute("name","item-text");
y.setAttribute("style","width: 1330px;height: 30px");
document.getElementById("items").appendChild(y);
input.value="";
if(datev.slice(8,10)<n.getDate() && datev.slice(5,7)<=n.getMonth()+1){
y.setAttribute("style","width: 1330px;height: 30px;color: red");
}
}


function del(){
const collection = document.getElementsByName("item-radio");
const list = document.getElementsByName("item-text");
for (let i = 0; i < collection.length; i++) {
  if (collection[i].checked == true) {
var a = document.createElement("INPUT");
a.setAttribute("type","text");
a.setAttribute("value",list[i].value);
a.setAttribute("name","completed");
a.setAttribute("class","comp");
a.setAttribute("style","width: 1330px;height: 30px");
document.getElementById("completed").appendChild(a);
    collection[i].remove();
    list[i].remove();
  }
}
}