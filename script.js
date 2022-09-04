let Listatarefas = []

function addTarefa(){
    let tarefa = document.getElementById('tarefa').value
    if(!tarefa)
        alert("Porfavor preencha os campos")
    else{
        if(Listatarefas.length > 7){
            alert("Porfavor delete uma tarefa para caber mais");
        }
        else if(tarefa.length > 17){
            alert(`
            "Porfavor apenas tarefas com menos de 17 caracteres, tarefa atual tem[${tarefa.length}]`)
        }
        else{
            Listatarefas.push(tarefa);
            showTarefa();
            cleanCampo();
        }
        
    }   
}

function showTarefa(){

    let tarefasLista = document.getElementById('tarefasLista')

    tarefasLista.innerHTML = '';

    for (let i = 0; i < Listatarefas.length; i++) {
        tarefasLista.innerHTML += 
        `
        <div class="tarefa">
            <input type="checkbox" id="checkTarefa" onchange="toggleLine(event)">
            <p>${Listatarefas[i]}</p>
            <div>
             <span class="edit" >
             <img id="editImg" onclick="editCampo(${i})">
             </span>
             <span class="delete">
             <img id="deleteImg" onclick="deleteCampo(${i})">
             </span>
             </div>
        </div>
        `        
    }
}

function toggleLine(e){
    let divPai = e.target.parentNode;
    let tarefaChecked = divPai.querySelector('p');    
    tarefaChecked.classList.toggle('lined')
}

function deleteCampo(index) {
    if(window.confirm("Tem certeza que deseja excluir? ")){
        Listatarefas.splice(index, 1);
    }
    showTarefa();
}

function editCampo(index){
    let tarefa = document.getElementById('tarefa').value
    if(tarefa) {
        if(window.confirm("deseja Editar tarefa ["+ Listatarefas[index] + "]?")){
            Listatarefas[index] = tarefa;
            showTarefa();
        }
    }
    else{
        alert("Para editar, insira alguma tarefa no campo de tarefa e clique em editar.")
    }
    cleanCampo();
}

function cleanCampo(){
    document.getElementById('tarefa').value = ""
}