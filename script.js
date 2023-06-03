// function addTask() {
//     var taskInput = document.getElementById("taskInput");
//     var taskList = document.getElementById("taskList");
  
//     if (taskInput.value !== "") {
//       var taskItem = document.createElement("li");
//       taskItem.appendChild(document.createTextNode(taskInput.value));
//       taskList.appendChild(taskItem);
//       taskInput.value = "";
  
//       taskItem.addEventListener("click", function () {
//         this.classList.toggle("completed");
//       });
  
//       taskItem.addEventListener("dblclick", function () {
//         this.parentNode.removeChild(this);
//       });
    

//     }
// }

// Certainly! Here's an updated version of the code that includes a delete functionality for the tasks:

// HTML:

// html
// Copy code
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>To-Do List</title>
//   </head>
//   <body>
//     <h1>To-Do List</h1>
//     <input type="text" id="taskInput" placeholder="Enter a task" />
//     <button onclick="addTask()">Add Task</button>
//     <ul id="taskList"></ul>

//     <script src="script.js"></script>
//   </body>
// </html>
// JavaScript (script.js):

// javascript
// Copy code
function addvalue() {
  var task1 = document.getElementById("task1");
  var task2 = document.getElementById("task2");

  if (task1.value !== "") {
    var taskItem = document.createElement("li");
    taskItem.appendChild(document.createTextNode(task1.value));
    task2.appendChild(taskItem);
    task1.value = "";

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    taskItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      task2.removeChild(taskItem);
    });

    taskItem.addEventListener("click", function () {
      this.classList.toggle("completed");
    });

    taskItem.addEventListener("dblclick", function () {
      task1.removeChild(taskItem);
    }
    );
  }
}
var place=document.getElementsByClassName("place");
var place1=document.getElementsByClassName("place1");
var place2=document.getElementsByClassName("place2");
var place3=document.getElementsByClassName("place3");
var border7=document.getElementsByClassName("border7");
var border8=document.getElementsByClassName("border8");
var border9=document.getElementsByClassName("border9");
var budget=0;
 


    