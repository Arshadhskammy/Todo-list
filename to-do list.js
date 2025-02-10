function addTask() {
   var taskInput = document.getElementById("taskinput"); // Get input element
   var taskList = document.getElementById("tasklist");
   var taskValue = taskInput.value; // Store input value

   if (taskValue == "") {
       alert("Please enter the task");
       return;
   }

   var listItems = document.createElement('li');
   listItems.innerText = taskValue;
   taskList.appendChild(listItems);

   var buttonContainer = document.createElement('div');
   listItems.appendChild(buttonContainer);
   buttonContainer.className = "task-button";

   var deleteButton = document.createElement('button');
   buttonContainer.appendChild(deleteButton);
   deleteButton.innerText = "Delete";
   deleteButton.onclick = function() {
       taskList.removeChild(listItems);
   };

   var completeButton = document.createElement('button');
   buttonContainer.appendChild(completeButton);
   completeButton.innerText = "Complete";
   completeButton.onclick = function() {
       listItems.classList.toggle('Completed');
   };

   taskInput.value = ""; // ✅ Now it will properly clear the input field
}
