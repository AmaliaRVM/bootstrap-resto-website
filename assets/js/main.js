window.onload = () => {
let name = prompt("Hello, can I have your name please");
let newName = name
if (newName) {
    document.getElementById("popUp").innerText = ("Welcome " + newName + " !");
} else {
    alert("You forgot to enter your name");
}

document.getElementById("mesa").addEventListener("click", function () {
    alert ("SOBRE LA MESA\nLorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in,\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum")
});

}