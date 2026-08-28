fetch("components/header.html")
.then(response=>response.text())
.then(data=>{

document.getElementById("header").innerHTML=data;

});


fetch("components/menu.html")
.then(response=>response.text())
.then(data=>{

document.getElementById("menu").innerHTML=data;

});



function openMenu(){

document.getElementById("sideMenu")
.classList.add("show");

}



function closeMenu(){

document.getElementById("sideMenu")
.classList.remove("show");

}



function toggleMember(){

let menu =
document.getElementById("memberSubmenu");


menu.classList.toggle("show");

}
