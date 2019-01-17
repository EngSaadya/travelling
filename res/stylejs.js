var images=new Array("./images1/slider/7.jpg","./images1/slider/24.jpg","./images1/slider/img1.jpeg");
var i=1;
function imagegallery()
{

       document.getElementById("img").src=images[i++];
       if(i==images.length)
        {
            i=0;
        }


}
var interv=setInterval(imagegallery,2000);



/*********jequery*********/
// $(document).ready(function(){
// $("restaurant").click(fnction()
// { $(this).preventDefault();
//      $("imgrestcontent")attr("src", $(this).);
// });
//
// });

var modbook=document.getElementById("themodelbook");
function showbook(e)
{


      var modimg=document.getElementById("modbook");


      modbook.style.display="block";


}


/********************************** show modal********************/
var mod=document.getElementById("themodel");

function show(e)
{


      var modimg=document.getElementById("mod");
      var capt=document.getElementById("caption");

      mod.style.display="block";
      modimg.src=e.target.src;
      capt.innerText=e.target.alt;
}

function closebtn(e)
{
  if (confirm("are you sure want to close!")) {
      mod.style.display="none";



    }
modbook.style.display="none";
alert(modbook);
}

function closebookbtn(e)
{
  if (confirm("are you sure want to close!")) {
      modbook.style.display="none";
    } else {

    }

}



/*********** show restaurants content********************/


var i=0
function change(e)
{
var s=e.target.src;

document.getElementById("imgrestcontent").src=s;
var element = document.getElementsByClassName('content')[i++];

document.getElementById("restcontent").innerHTML=element.innerText;

if(i==3)
    i=0;
}
