
let addButtons = document.getElementsByClassName("add");

let titles = document.getElementsByTagName("p");

let check = document.getElementsByClassName("check");

let supp = document.getElementsByClassName("btnclear");


let d = null;

let compt =0;

let arrTodo = localStorage.getItem("liste").split(",");

function init(){
    for (let i = 0; i < arrTodo.length ; i++) {
        let todoListe = arrTodo[i];
        document.querySelector(".liste").innerHTML =  todoListe
    }
}


function addElements(div) {
    let inputs = document.getElementsByClassName("titleTodo");
    for (let input of inputs) {

        if (inputs.length === 0) {
            return
        }
        for (let elements of titles) {
            let values = input.value.trim()
            if (values === elements.innerText.trim()) {
                alert("impossible")
                return
            }
        }

        div.parentNode.querySelector(".liste").innerHTML += `
                        <div class="todo" draggable="true" ondrag="d=this" ondragend="d=null" ">
                            <p onclick="changeColor(this.parentNode)">${input.value}</p>
                            <button class="edit" onclick="edit(this.parentNode)">
                                <img src="svg/edit.svg">
                            </button>
                            <button class="remove" onclick="remove(this)">
                                <img src="svg/trash.svg">
                            </button>
                        </div>`;
        compt ++;
        input.value = ""
        save_list();
    }
}

function addElementJson ( title,check){

}


function dragRemove() {
    if (d != null) {
        d.remove()
    }
}

function remove(btn) {
    let parent = btn.parentNode;
    parent.style.animation = "1s delete linear"
    setTimeout(function () {
        parent.remove()
    }, 1000)
    save_list();
}

function edit(div) {
    let p = div.querySelector("p").innerText;
    let response = prompt(`Voulez vous editez cette ligne qui est : ${p}`).trim()
    if (response != null) {
        div.querySelector("p").innerText = response;
    }
    save_list();
}

function changeColor(div) {
    if (div.classList.contains("check")) {
        div.classList.remove("check");
    } else {
        div.classList.add("check");
    }
    save_list();
}

function save_list() {

    let places = document.getElementsByClassName("liste")[0].getElementsByClassName("todo");
    let list = []
    for (let element of places) {
        console.log(element)
        const title = element.querySelector("p").innerText.trim();
        const valid = element.classList.contains("check");

        for (let  p of places) {
            list.push({
                title:title,
                check:valid
            })
        }
    }




    localStorage.setItem("liste", JSON.stringify(list));
}


function clearListe(div){
    localStorage.removeItem("liste");
    div.innerHTML = "";
}





