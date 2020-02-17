
var person = [
    {"name":"rahul","email":"rahul@gmail.com","message":"xysd","date":"06/05/2016"},
    {"name":"rohit","email":"rohit@rgmail.com","message":"xysd","date":"08/06/2017"},
    {"name":"deepak","email":"deepak@gmail.com","message":"xysd","date":"04/05/2015"},
    {"name":"ashish","email":"ashish@gmail.com","message":"xysd","date":"02/05/2014"},  
    {"name":"arnav","email":"arnav@gmail.com","message":"xysd","date":"06/05/2014"},  
]
function table(person){
var table = document.getElementById("mytable")
for(var i=0; i < person.length; i++)
{
    var row =`<tr>
    <td> ${person[i].name}</td>
    <td> ${person[i].email}</td>
    <td> ${person[i].message}</td>
    <td> ${person[i].date}</td>
    </tr>`
    table.innerHTML+=row;
}
}
table(person);