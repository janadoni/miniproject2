
/* searchbar section*/
var searchmani=document.querySelector("#searchmani");
var searchbar=document.querySelector(".searchinput");

searchmani.addEventListener('click',function(){
  if(searchbar.style.display==="none"){
    searchbar.style.display="block";
  } 
  else{
    searchbar.style.display="none";
  }
});
/*searchbar section end*/

/*category section start*/
var category=document.querySelector(".cat");
var dropdown=document.querySelector(".dropdown");
var menubar=document.querySelector(".menubar");
var dropdownContent=document.querySelector(".dropdown-content");
var a=document.querySelector(".a");

category.addEventListener('click',function(){

  if(menubar.style.left==="-400px"){
    menubar.style.left="0";
    menubar.style.marginTop="20px";

  }
  else{
    menubar.style.left="-400px";
    
    menubar.style.marginTop="20px";


    
  }
});
/*category section end*/


/*dropmenu content open code*/
var x=document.getElementById('list');
x.addEventListener('click',function(){
  document.getElementById('drop').classList.toggle("show");
})

/*dropmenu content open end */
