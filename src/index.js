import "./styles/main.css";
import SetupMain from "./scripts/main";
import SetupMenu from "./scripts/menu";
import SetupContacts from "./scripts/contacts";

SetupMain();

function unloadPage(){
    const container = document.querySelector("#content");
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

const InputManager = (function () {
    const buttons = document.querySelectorAll("button");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", buttonClicked);
    }
  })();

function buttonClicked(e){
    unloadPage();
    const link = e.srcElement.dataset.link;
    loadPage(link)
}

function loadPage(link){
    if(link == "home"){
        SetupMain();
    }
    else if(link == "menu"){
        SetupMenu();
    }
    else if(link == "contacts"){
        SetupContacts();
    }
}