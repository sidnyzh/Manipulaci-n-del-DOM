// nombre del data type
const btn= document.querySelector("[data-form-btn]");

//(arrow function o función anónima)
const createTask = (evento)  => {
    evento.preventDefault(); 
    const input = document.querySelector("[data-form-input]")
    const value = input.value;
    const list = document.querySelector("[data-list]")
    //crear un elemento especificando el tipo de elemento 
    const task = document.createElement("li");
    //agregar una clase a este elemento 
    task.classList.add("card")
    input.value = "";  
    //Backticks  
    const content = ` <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i></li>`;
   task.innerHTML = content;   

   //agregarle un hijo 

   list.appendChild(task)
    console.log(content)
};

// listener. fuincion  que recibe la accion que quiero escuchar, que quiero que pase cuando el evento escuche esta acción 
btn.addEventListener("click", createTask);



