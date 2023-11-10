let input = document.getElementById("textArea");
let list=document.getElementById("list");

 function addTask(){
  if(textArea.value ===""){
    alert("Write the task into the textBox !!!");
  }
  else{
        document.querySelector('#list').innerHTML +=`
        
        <div class="list-item justify-content-between">
                  <h3 class="text">${document.querySelector("#textArea").value}</h3>
              <div class="btn1" >
                <button class="buttonA btn btn-success" id='execute'><i class="fa-regular fa-circle-check fa-2xl"></i></button>
                <button class="buttonA btn btn-danger" id="delete" ><i class="fa-regular fa-circle-xmark fa-2xl"></i></button>
              </div>
            </div>
        `;
    
          let delete1= document.querySelectorAll('#delete')
              for(let i =0; i<=delete1.length;i++){
              delete1[i].onclick=function(){
                this.parentNode.parentNode.remove();
              }  
            }

            list.addEventListener('click', function (f) {
              if (f.target.classList.contains('execute')) {
                f.target.parentElement.classList.toggle('word');
              }
            
            });
    }
  }


 