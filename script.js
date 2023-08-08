let name = prompt('Enter your name please:');
let myText = document.getElementById("welcomeMessage");
	myText.insertAdjacentText("beforeend", name + "!");

document.getElementById("insta").addEventListener("click", instaRedirect);
function instaRedirect(){
  location.href = "https://www.instagram.com/"
}
document.getElementById("twitter").addEventListener("click", twitterRedirect);
function twitterRedirect(){
  location.href = "https://twitter.com/home"
}
document.getElementById("facebook").addEventListener("click", facebookRedirect);
function facebookRedirect(){
  location.href = "https://www.facebook.com/"
}
