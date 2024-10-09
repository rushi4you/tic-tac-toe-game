let user="O";
let arr=[null,null,null,null,null,null,null,null,null]      
j=0;
const click1=(x)=>
{

if(arr[x.id]!=null)
{
  return;
}

if(user=="O")
{
  arr[x.id]="X";
  document.getElementById(x.id).innerHTML="X";
  document.getElementById(x.id).style.color="yellow";
  user="X";
}
else{
  arr[x.id]="O";
  document.getElementById(x.id).innerHTML="O";
  user="O";
}
let y=arr.map((x)=>
{
  if(x!=null)
{
 return x; 
}
});
console.log(y);
console.log(arr) 


if(arr[0]=="X" && arr[1]=="X" && arr[2]=="X" || arr[3]=="X" && arr[4]=="X" && arr[5]=="X" || arr[6]=="X" && arr[7]=="X" && arr[8]=="X")
{
  alert("winner X")
  location.replace("index.html");

}   
else if(arr[0]=="X" && arr[3]=="X" && arr[6]=="X" || arr[1]=="X" && arr[4]=="X" && arr[7]=="X" || arr[2]=="X" && arr[5]=="X" && arr[8]=="X")
{
  alert("winner X")
  location.replace("index.html");

}
else if(arr[0]=="X" && arr[4]=="X" && arr[8]=="X" || arr[2]=="X" && arr[4]=="X" && arr[6]=="X") 
{
  setInterval(alert("winner X"),2000);
  location.replace("index.html");

}

if(arr[0]=="O" && arr[1]=="O" && arr[2]=="O" || arr[3]=="O" && arr[4]=="O" && arr[5]=="O" || arr[6]=="O" && arr[7]=="O" && arr[8]=="O")
{
  alert("winner O")
  location.replace("index.html");

}   
else if(arr[0]=="O" && arr[3]=="O" && arr[6]=="O" || arr[1]=="O" && arr[4]=="O" && arr[7]=="O" || arr[2]=="O" && arr[5]=="O" && arr[8]=="O")
{
  alert("winner O")
  location.replace("index.html");

}
else if(arr[0]=="O" && arr[4]=="O" && arr[8]=="O" || arr[2]=="O" && arr[4]=="O" && arr[6]=="O") 
{
  alert("winner O") 
  location.replace("index.html");

}
j++;
if(j==9)
{
  alert("match tied")
  location.replace("index.html");
}
}
