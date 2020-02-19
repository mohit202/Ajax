
var person = fetch('https://jsonplaceholder.typicode.com')
//main link https://jsonplaceholder.typicode.com/comments
.then(response => response.json())
.then(json => table(json))
function table(person){
var table = document.getElementById("mytable");
//replace function
//document.getElementById('').remove();
//var slideIndex=0;
for(var i=0; i < 5; i++)
{
    var row =`<tr>
    <td>${person[i].name}</td>
    <td>${person[i].email}</td>
    <td>${person[i].body}</td>
    <td>${person[i].id}</td>
    </tr>`
    table.innerHTML+=row; 
}
}
function fdata(val){
    
    var person = fetch(`https://jsonplaceholder.typicode.com/comments?_start=${val}&_limit=5`)
    .then(response => response.json())
    .then(json => table(json))
   // 
   
}
fdata(10);
