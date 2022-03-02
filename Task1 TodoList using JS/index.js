
function addTask() {
    var li = document.createElement("li");
    var inputText = document.getElementById("task_id").value;
    var textNode = document.createTextNode(inputText);
    li.append(textNode);
    if (inputText === ''){
        alert("Please Write Name of Task!");
    }
    else{
        const ul = document.getElementById("todo_list");
        const task = document.createElement("div");
        task.classList.add("task");
        ul.appendChild(task);
        const btn = document.createElement("button");
        btn.innerText=("Delete");
        task.appendChild(li);
        task.appendChild(btn);
        btn.addEventListener('click', () =>{
            ul.removeChild(task);
        });
        li.addEventListener('click', () =>{
            if(li.style.textDecoration === '' ){
                li.style.textDecoration='line-through';
                li.style.backgroundColor = 'green';
            }
            else{
                li.style.textDecoration='';
                li.style.backgroundColor = '';
            }
        });

    }
    document.getElementById("task_id").value = "";



}