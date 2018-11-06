function myFunction1() {
	reloadall();

	// document.getElementById("continer").style.display = "block";
    document.getElementById("continer").className = "";

    var menu =  document.getElementById("menun");
    ul1 = menu.children[0];
    ul1.children[0].className = "active";
    console.log(ul1.children[0].children[0].children[0].src="img/profile-icon-active.png");
    document.getElementById("menun").className="menuIndex";
}
function myFunction2() {
	reloadall();

    document.getElementById("continer2").style.display = "block";
    document.getElementById("continer2").className = "";
    var menu =  document.getElementById("menun");
    ul1 = menu.children[0];
    ul1.children[1].className = "active";
    console.log(ul1.children[1].children[0].children[0].src="img/resume-icon-active.png");
}
function myFunction3() {
	reloadall();

	document.getElementById("continer3").className = "";
    document.getElementById("continer3").style.display = "block";
    var menu =  document.getElementById("menun");
    ul1 = menu.children[0];
    ul1.children[2].className = "active";
    console.log(ul1.children[2].children[0].children[0].src="img/portfolio-icon-active.png");
}
function myFunction4() {
	reloadall();

	document.getElementById("continer4").className = "";
    document.getElementById("continer4").style.display = "block";
    var menu =  document.getElementById("menun");
    ul1 = menu.children[0];
    ul1.children[3].className = "active";
    console.log(ul1.children[3].children[0].children[0].src="img/contact-icon-active.png");

}
function reloadall(){
	// document.getElementById("continer").style.display = "none";
    // document.getElementById("continer2").style.display = "none";
    // document.getElementById("continer3").style.display = "none";
    // document.getElementById("continer4").style.display = "none";
    var menu =  document.getElementById("menun");
    // console.log(menu);
     // console.log(menu);
    	ul1 = menu.children[0];
    // console.log(ul1);
   for(var i=0; i<ul1.children.length; i++){
   		ul1.children[i].className = "";
   		// console.log(ul1.children[i].style);
   }
   console.log(ul1.children[0].children[0].children[0].src="img/profile-icon.png");
   console.log(ul1.children[1].children[0].children[0].src="img/resume-icon.png");
   console.log(ul1.children[2].children[0].children[0].src="img/portfolio-icon.png");
   console.log(ul1.children[3].children[0].children[0].src="img/contact-icon.png");
   document.getElementById("menun").className="menuOther";
   document.getElementById("continer").className = "classhide";
   document.getElementById("continer2").className = "classhide";
   document.getElementById("continer3").className = "classhide";
   document.getElementById("continer4").className = "classhide";
}