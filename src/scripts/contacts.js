export default function SetupContacts(){
    const container = document.querySelector("#content");
    const div = document.createElement("div");
    div.setAttribute("class", "contact-div");
    const owner = document.createElement("div");
    const street = document.createElement("div");
    const city = document.createElement("div");
    const region = document.createElement("div");
    const country = document.createElement("div");
    owner.textContent = "Lucifer";
    street.textContent = "5-1 Ichigayahonmuracho";
    city.textContent = "Shinjuku City";
    region.textContent = "Tokyo 162-8801";
    country.textContent = "Japan";
    div.appendChild(owner);
    div.appendChild(street);
    div.appendChild(city);
    div.appendChild(region);
    div.appendChild(country);

    container.appendChild(div);
}