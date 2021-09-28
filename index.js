// Write your code here!

const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "YOUR-NAME is the champion";
document.body.append(newHeader);