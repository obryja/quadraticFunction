var num = document.getElementsByClassName("task__num")[0];
var points = document.getElementsByClassName("task__points")[0];
var when = document.getElementsByClassName("task__when")[0];
var content = document.getElementsByClassName("task__content")[0];
var answer = document.getElementsByClassName("task__answer")[0];

dataFetch("/get_task", { "id": taskId })
    .then(data => {
        num.innerHTML = "Zadanie " + data.num;
        points.innerHTML = data.points + " pkt";
        when.innerHTML =  data.when;
        content.innerHTML = data.content;
        answer.innerHTML =  data.answer;
    })


function show_answer(){
    answer.style.display = 'block'
    document.getElementsByClassName("btn")[0].style.display = "none";
}