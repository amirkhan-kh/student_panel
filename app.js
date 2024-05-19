let inputSn = document.querySelector("#inputSurname");
let inputAge = document.querySelector("#inputAge");
let addedBtn = document.querySelector("#addBtn");
let stPanel = document.querySelector("#allStudentPanel");
let stPanelName = document.querySelector("#allSname");
let stPanelAge = document.querySelector("#allAge");
let section = document.querySelector("#section");



function NewStudent(n,sn,a){
    this.inputNameST = n
    this.inputSn = sn
    this.inputAge = a
}
NewStudent()

const ALL_Panel_Students = JSON.parse(localStorage.getItem("panel")) || [];
function showNewForm(e){
    e.preventDefault();
   
    let resname = stPanel.innerHTML += inputNameSt.value;
    let resSn =  stPanelName.innerHTML += inputSn.value;
    let resAge = stPanelAge.innerHTML += inputAge.value;
    
    let allresPanel = new NewStudent(resName,resSn,resAge);
    ALL_Panel_Students.push(allresPanel)
    localStorage.setItem("panel", JSON.stringify(ALL_Panel_Students));
    
    // let res = new (inputNameSt,inputSn,inputAge)
}
addedBtn.addEventListener("click",showNewForm);

function addPanel() {
    let inputNameSt = document.querySelector("#inputName");
    
    var todoList = document.getElementById("todo-list");

    if (inputNameST.value !== "") {
        var li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = todoInput.value + '<button onclick="removeTodo(this)">Delete</button>';
        todoList.appendChild(li);
        todoInput.value = "";
    } else {
        alert("Please enter a todo item!");
    }
}
function removeTodo(item) {
    var todoList = document.getElementById("todo-list");
    todoList.removeChild(item.parentNode);
}