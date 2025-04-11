
function addTask(){
    const taskInput=document.getElementById("taskInput");
    const taskList= document.getElementById("taskList");

    if(taskInput.value === "")
{
 alert("Please enter a task");
 return;
}

let li=document.createElement("li");
li.innerText=taskInput.value;

let doneButton=document.createElement("button");
doneButton.innerText="Done";
doneButton.style.marginLeft="10px";
doneButton.onlick=function(){
    li.classList.toggle("compleate");
};

let deleteButton=document.createElement("button");
deleteButton.innerText="Delete";
deleteButton.style.marginLeft="10px";
deleteButton.onlick=function(){
    taskList.removeChild(li);
};

li.appendChild(doneButton);
li.appendChild(deleteButton);
taskList.appendChild(li);

taskList.value="";
}


















































