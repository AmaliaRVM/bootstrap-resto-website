window.onload = () => {
let name = prompt("Hello, can I have your name please");
let newName = name
if (newName) {
    document.getElementById("popUp").innerText = ("Welcome " + newName + " !");
} else {
    alert("You forgot to enter your name");
}



}