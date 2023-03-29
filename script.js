// nombre del data type
const btn= document.querySelector("[data-form-btn]");

//(arrow function o función anónima)
const createTask = (evento)  => {
    evento.preventDefault; 
    const input = document.querySelector("[data-form-input]")
    const value = input.value;
    input.value = "";
    console.log(value)};

// listener. fuincion  que recibe la accion que quiero escuchar, que quiero que pase cuando el evento escuche esta acción 
btn.addEventListener("click", createTask);



