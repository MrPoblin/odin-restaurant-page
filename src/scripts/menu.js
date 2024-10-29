import burgerImg from "./../images/burger.jpg"
import jackImg from "./../images/jack-frost-cocktail.jpg"


export default function SetupMenu(){
    const container = document.querySelector("#content");
    
    const item1 = document.createElement("div");
    item1.setAttribute("class", "menu-item");
    const item1Title = document.createElement("h2");
    const item1Image = document.createElement("img");
    item1Title.textContent = "Nozuchi Burger";
    item1Image.src = burgerImg;
    item1.appendChild(item1Title);
    item1.appendChild(item1Image);

    const item2 = document.createElement("div");
    item2.setAttribute("class", "menu-item");
    const item2Title = document.createElement("h2");
    const item2Image = document.createElement("img");
    item2Title.textContent = "Jack Frost Cocktail";
    item2Image.src = jackImg;
    item2.appendChild(item2Title);
    item2.appendChild(item2Image);

    container.appendChild(item1);
    container.appendChild(item2);

}