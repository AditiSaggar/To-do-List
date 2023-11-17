let input = document.getElementById("textArea");
let list = document.getElementById("list");
let error = document.getElementById('validationMessage');

//Create a new task when click on the addTask
 
function addTask() {
    // alert("Write the task into the textBox !!!");

    // Get the value of the input field with id ="textArea"
    let a=document.getElementById("textArea").value;

    // when textArea is empty and we click on the addtask button
    if (textArea.value === "") {
      // error.innerHTML = "Write the task into the textBox !!!";
      error.innerHTML = "Input field must not be Empty !!!";
  }

  // Create a new list item when clicking on the addTask button
  else {
    // error.innerHTML = "Task is added";

    let b=document.querySelector("#list");
    b.insertAdjacentHTML('afterend',`
    
        <div class="list-item justify-content-between">
                  <h3 class="text">${
                    document.querySelector("#textArea").value
                  }</h3>
              <div class="btn1" >
                <button class="buttonA btn btn-success execute "><i class="fa-regular fa-circle-check fa-xl"></i></button>
                <button class="buttonA btn btn-danger delete"><i class="fa-regular fa-circle-xmark fa-xl"></i></button>
              </div>
            </div>
        `);
    //After adding the task it will empty the text area
    textArea.value = "";
    
    // Error message shuld disapear  when task is added
    // document.error.innerHTML=="";

    document.getElementById("validationMessage").innerHTML="";

    // Deletebutton will delete the added task
    let deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
      button.onclick = function () {
        this.parentElement.parentElement.remove();
      };
    });

    //executebutton when click on the button it will display the tastk is execute and line through the completedtask
    let executeButtons = document.querySelectorAll(".execute");
    executeButtons.forEach((button) => {
      button.onclick = function () {
        this.parentElement.parentElement
          .querySelector(".text")
          .classList.toggle("completedTask");
      };
    });
  }
}
