window.onload = function(){
    // var toDoList = [];
    document.getElementById("event").onclick = function() {
        // var exer = document.getElementById("todo").value;
        var done = document.getElementById("myTask");
        done.style.backgroundColor = "#50FF33";
        done.style.textDecoration = "line-through";
        // done.classList.add("done_green");
    }
    // по классу
    var event = document.getElementsByClassName("event");
    event.onclick = function(){
        var done = document.getElementById("myTask");
        done.style.backgroundColor = "#50FF33";
        done.style.textDecoration = "line-through";
        
    }
    // function toDoEdit(){

    // }
    // function toDoDone(){
    //     var done = document.getElementById("myTask");
    //     done.classList.add("done_green");
    // }
    // function toDoDelete(){
    
    // }
}
