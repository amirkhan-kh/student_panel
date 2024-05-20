let btn = document.querySelector("#Submit");
function inputDateForm(){
    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let age = document.querySelector("#age").value;
    

    //input to'ldirilmasa qatiy so'rashlig uchun
    if(name == ""){
        alert("Ismni kiriting!");
        return false;
    }
    if(surname == ""){
        alert("Familiyani kiriting!");
        return false;
    }
    if(age == ""){
        alert("Yoshingizni kiriting!");
        return false;
    }
    else if(age < 1){
        alert("Siz Unverstitemiz talabalik yoshiga to'lmagansiz");
        return false;
    }
    return true;

}
let res = document.querySelector("#studentTable");
function ShowPanel(){
    let peopleList;
    if(localStorage.getItem("peopleList") == null){
        panelStudentLS = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    let toHtml = ``;



    for (let i = 0; i < peopleList.length; i++) {
        let element = peopleList[i];
        res.innerHTML += `
        <div class="show">
            <h2>${peopleList.name}</h2>
            <span>${peopleList.surname}</span>
            <span>${peopleList.age}</span>
        </div>`;
    }
    
    
    

    document.querySelector("#studentTable tbody").innerHTML = peopleList;
}

ShowPanel()

function AddData(){
    if (inputDateForm() == true) {
        let name = document.querySelector("#name").value;
        let surname = document.querySelector("#surname").value;
        let age = document.querySelector("#age").value;

        let peopleList;
        if(localStorage.getItem("peopleList") == null){
            peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            name : name,
            surname : surname,
            age : age,
        });
        localStorage.setItem("peopleList", JSON.stringify("peopleList"));

        ShowPanel();
        document.querySelector("#name").value = "";
        document.querySelector("#surname").value = "";
        document.querySelector("#age").value = "";
    }
}
btn.addEventListener("click", AddData)
