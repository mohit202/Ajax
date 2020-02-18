
var person = fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(json => table(json))

function table(person){
var table = document.getElementById("mytable");

//var slideIndex=0;

for(var i=0; i < person.length; i++)
{
    var row =`<tr>
    <td class="mySlide"> ${person[i].name}</td>
    <td class="mySlide"> ${person[i].email}</td>
    <td class="mySlide"> ${person[i].body}</td>
    <td class="mySlide"> ${person[i].id}</td>
    </tr>`
    table.innerHTML+=row;
    table.style.display="none";
    for(i=0; i<person.length; i++)
    {   
        table.innerHTML+=row;
        table.style.display="block";
    }
}
}
//slidetable
// slideIndex = 0;
// showSlide();
// function showSlide()
// {
//     var slide = document.getElementsByClassName("mySlide");
//     for(i=0; i < slide.length; i++)
//     {
//          slide[i].style.display="none";
//     }
//      slideIndex++;
//    // console.log(slide);

//    if(slideIndex > slide.length){slideIndex =1}
//    slide[slideIndex-1].style.display="block";
//    setTimeout(showslide,2000);
// }
//console.log("the person length is : "+person.length);