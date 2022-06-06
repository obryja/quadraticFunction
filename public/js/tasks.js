var task = document.getElementsByClassName("tasks__list")[0];
var title = document.getElementsByClassName("tasks__title")[0];

if(abcd == true){
    title.innerHTML = "Zadania zamknięte"
    dataFetch("/get_all_tasks", {"closed": true})
    .then(data => {
        for(i = 0; i < data.length; i++){
            task.innerHTML += "<a href='/task/" + data[i]._id + "'><div class='tasks__list__item'><div class='tasks__list__item__info'><h4>" + data[i].when + "</h4><h2>Zadanie " + data[i].num + "</h2><h4>" + data[i].points + " pkt</h4></div></a><hr><div class='tasks__list__item__content'>" + data[i].content + "</div></div>";
        }
    })
} else{
    title.innerHTML = "Zadania otwarte"
    dataFetch("/get_all_tasks", {"closed": false})
    .then(data => {
        for(i = 0; i < data.length; i++){
            task.innerHTML += "<a href='/task/" + data[i]._id + "'><div class='tasks__list__item'><div class='tasks__list__item__info'><h4>" + data[i].when + "</h4><h2>Zadanie " + data[i].num + "</h2><h4>" + data[i].points + " pkt</h4></div></a><hr><div class='tasks__list__item__content'>" + data[i].content + "</div></div>";
        }
    })
}