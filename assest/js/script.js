let input = document.getElementById("textArea");
let list=document.getElementById("list");

 //Create a new task when click on the addTask 
 //warning message when textArea is empty and we click on the addtask button
 function addTask(){
  if(textArea.value ===""){
    alert("Write the task into the textBox !!!"); 
  }

 // Create a new list item when clicking on the addTask button
  else{
        document.querySelector('#list').innerHTML +=` 
        
        <div class="list-item justify-content-between">
                  <h3 class="text">${document.querySelector("#textArea").value}</h3>
              <div class="btn1" >
                <button class="buttonA btn btn-success execute "><i class="fa-regular fa-circle-check fa-2xl"></i></button>
                <button class="buttonA btn btn-danger delete"><i class="fa-regular fa-circle-xmark fa-2xl"></i></button>
              </div>
            </div>
        `;
    //After adding the task it will empty the text area
        textArea.value ="";

          // Deletebutton will delete the added task 
            let deleteButtons =document.querySelectorAll('.delete');
            deleteButtons.forEach(button =>{
                button.onclick =function(){
                this.parentElement.parentElement.remove();
                };
            });

            //executebutton when click on the button it will display the tastk is execute and line through the completedtask
            let executeButtons = document.querySelectorAll('.execute');
            executeButtons.forEach(button => {
                button.onclick = function() {
                this.parentElement.parentElement.querySelector('.text').classList.toggle('completedTask');
                };
            });
    }
}
