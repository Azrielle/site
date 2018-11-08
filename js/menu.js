function myFunction1() {
	reloadall();
  document.getElementById("continer").className = "continer";
  var menu =  document.getElementById("menun");
  ul1 = menu.children[0];
  ul1.children[0].className = "active";
  ul1.children[0].children[0].children[0].src="img/profile-icon-active.png";
  document.getElementById("menun").className="menuIndex";
}
function myFunction2() {
	reloadall();
  document.getElementById("continer2").className = "continer";
  var menu =  document.getElementById("menun");
  ul1 = menu.children[0];
  ul1.children[1].className = "active";
  ul1.children[1].children[0].children[0].src="img/resume-icon-active.png";
}
function myFunction3() {
	reloadall();
	document.getElementById("continer3").className = "continer";
  var menu =  document.getElementById("menun");
  ul1 = menu.children[0];
  ul1.children[2].className = "active";
  ul1.children[2].children[0].children[0].src="img/portfolio-icon-active.png";
}
function myFunction4() {
	reloadall();
	document.getElementById("continer4").className = "continer";
    var menu =  document.getElementById("menun");
    ul1 = menu.children[0];
    ul1.children[3].className = "active";
    ul1.children[3].children[0].children[0].src="img/contact-icon-active.png";
}
function reloadall(){
  var menu =  document.getElementById("menun");
  ul1 = menu.children[0];
  for(var i=0; i<ul1.children.length; i++){
    ul1.children[i].className = "";
  }
  ul1.children[0].children[0].children[0].src="img/profile-icon.png";
  ul1.children[1].children[0].children[0].src="img/resume-icon.png";
  ul1.children[2].children[0].children[0].src="img/portfolio-icon.png";
  ul1.children[3].children[0].children[0].src="img/contact-icon.png";
  document.getElementById("menun").className="menuOther";
  document.getElementById("continer").className = "continer classhide";
  document.getElementById("continer2").className = "continer classhide";
  document.getElementById("continer3").className = "continer classhide";
  document.getElementById("continer4").className = "continer classhide";
}