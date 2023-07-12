class Usuario {
    constructor(firstName, lastName, email, profile){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.profile = profile;
    }
}

// showData
function showData() {
    let usersList;
    if (localStorage.getItem("usersList") === null) {
        usersList = []
    } else {
        usersList = JSON.parse(localStorage.getItem("usersList"))
    }
    let html = "";
    usersList.forEach((user, index) => {
        html += `
        <div class="row bg-new-user-table g-0" id="fila">
            <div class="col-sm-12 col-md-2 col-12 g-0">
                <p class="py-2">${user.firstName}</p>
            </div>
            <div class="col-sm-12 col-md-2 col-12 g-0">
                <p class="py-2">${user.lastName}</p>
            </div>
            <div class="col-sm-12 col-md col-12 g-0">
                <p class="py-2">${user.email}</p>
            </div>
            <div class="col-sm-12 col-md-2 col-12 g-0">
                <p class="py-2">${user.profile}</p>
            </div>
            <div class="col-sm-12 col-md-2 col-12 g-0 text-md-center">
                <button type="button" class="btn btn-link boton-link-red" onclick="deleteDataPrev(${index})"> <i class="bi bi-trash3"></i></button>
                <button type="button" class="btn btn-link boton-link-green" onclick="editData(${index})">Editar <i class="bi bi-pencil"></i> </button>
            </div>
        </div>`
    });
    document.querySelector('#respuesta').innerHTML = html;
}

document.onload = showData()

// addData
function addData(event) {
    event.preventDefault();
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let email = document.querySelector('#email').value;
    let profile = document.querySelector('#profile').value;

    if (firstName === "" || lastName === "" || email === "" || profile === "") return;

    const usuario = new Usuario(firstName, lastName, email, profile);
    console.log(usuario)
    let usersList;
    if (localStorage.getItem("usersList") === null) {
        usersList = []
    } else {
        usersList = JSON.parse(localStorage.getItem("usersList"))
    }
    usersList.push(usuario)
    localStorage.setItem("usersList", JSON.stringify(usersList))
    showData()

    document.querySelector('#firstName').value = ""
    document.querySelector('#lastName').value = ""
    document.querySelector('#email').value = ""
    document.querySelector('#profile').value = ""
}

// editData
function editData(index) {
    document.getElementById('add-btn').style.display = 'none';
    document.getElementById('edit-btn').style.display = 'block';
    document.getElementById('edit-btn').style.backgroundColor = '#ffa200';
    document.getElementById('edit-btn').style.borderColor = '#ffa200';

    let usersList;
    if (localStorage.getItem("usersList") === null) {
        usersList = []
    } else {
        usersList = JSON.parse(localStorage.getItem("usersList"))
    }
    document.querySelector('#firstName').value = usersList[index].firstName;
    document.querySelector('#lastName').value = usersList[index].lastName;
    document.querySelector('#email').value = usersList[index].email;
    document.querySelector('#profile').value = usersList[index].profile;

    document.getElementById('edit-btn').onclick = function () {
        usersList[index].firstName = document.querySelector('#firstName').value
        usersList[index].lastName = document.querySelector('#lastName').value
        usersList[index].email = document.querySelector('#email').value
        usersList[index].profile = document.querySelector('#profile').value

        localStorage.setItem("usersList", JSON.stringify(usersList));
        showData();
        document.querySelector('#firstName').value = ""
        document.querySelector('#lastName').value = ""
        document.querySelector('#email').value = ""
        document.querySelector('#profile').value = ""

        document.getElementById('add-btn').style.display = 'block';
        document.getElementById('edit-btn').style.display = 'none';
    }
}

// deleteData
function deleteDataPrev(){
    if (window.confirm("Realmente quieres borrar el item?")) 
    deleteData();
}

function deleteData(index) {  
    let usersList;
    if (localStorage.getItem("usersList") === null) {
        usersList = []
    }  else {
        usersList = JSON.parse(localStorage.getItem("usersList"))
    }
    usersList.splice(index, 1);
    localStorage.setItem("usersList", JSON.stringify(usersList));

    let node = document.querySelector("#fila");
    node.parentNode.removeChild(node);
}

// recargamos nuevamente la tabla
showData();













