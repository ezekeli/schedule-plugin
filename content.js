function appendButton() {
    var button = document.createElement('div');
    button.type = "button";
    button.className = "route_stops_directions_buttons";
    button.id = "dwnld";
    button.innerText = "Скачать";
    button.onclick = () =>  { (new ScheduleToImage()).run(); }
    document.querySelector(".schedules_header").appendChild(button);
}

function nodeInsertedCallback(event) {
    var popup = document.querySelector("#schedule_popup") 
    var button = document.querySelector("#dwnld");
    if(popup !== null && button === null) appendButton();
};

document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
