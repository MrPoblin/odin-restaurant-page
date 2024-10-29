export default function SetupMain(){
    const container = document.querySelector("#content");
    const mainText = document.createElement("h1");
    mainText.textContent = "SHIN BURGERS";
    container.appendChild(mainText);
}