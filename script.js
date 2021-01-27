var todo=document.getElementById("todo");
function addTask(){
    var title=document.getElementById("title");
    var description=document.getElementById("description");
    if(title.value==""){
        var alert=document.getElementById("redText");
        alert.innerHTML="** Please Enter Title";
        return false;
    }
    // Above Code For Checking Filed is empty or not
    var createRow=document.createElement("div");
    createRow.setAttribute("class","row");
    todo.appendChild(createRow);
    // Above Code Create Row
    var titleColumn=document.createElement("div");
    titleColumn.setAttribute("class","col-lg-12");
    createRow.appendChild(titleColumn);
    // Above Code Create Column
    var delIcon=document.createElement("i");
    delIcon.setAttribute("class","fas fa-trash-alt");
    delIcon.setAttribute("id","delIcon");
    delIcon.setAttribute("onclick","del(this)")
    titleColumn.appendChild(delIcon);
    // Above Code For Delete Icon
    var editIcon=document.createElement("i");
    editIcon.setAttribute("class","fas fa-edit");
    editIcon.setAttribute("id","editIcon");
    editIcon.setAttribute("onclick","edit(this)");
    titleColumn.appendChild(editIcon);
    // Above Code For Edit Icon
    var tickIcon=document.createElement("input");
    tickIcon.setAttribute("type","checkbox");
    tickIcon.setAttribute("id","tickIcon");
    titleColumn.appendChild(tickIcon);
    // Above Code For checkbox
    var titleP=document.createElement("p");
    titleP.setAttribute("id","titlePara");
    var titleValue=document.createTextNode(title.value);
    titleP.appendChild(titleValue);
    titleColumn.appendChild(titleP);
    // Above Code For adding Title in TODO List
    var descriptionP=document.createElement("p");
    descriptionP.setAttribute("id","descriptionPara");
    var descriptionValue=document.createTextNode(description.value);
    descriptionP.appendChild(descriptionValue);
    titleColumn.appendChild(descriptionP);
    // Above Code For Writin description in TODO List
    title.value="";
    // For Erasing Title Input Field
    description.value="";
    // For Erasing description Input Field
    document.getElementById("redText").innerHTML="";
    // For Alert Text Erasing
}

function del(e){
    e.parentNode.remove();
}
// Above Function For Remove ONE Specific Row from list
function edit(e){
    var val = prompt("Edit Title", e.parentNode.childNodes[3].innerText);
   e.parentNode.childNodes[3].innerText = val;
   var val = prompt("Edit Description", e.parentNode.childNodes[4].innerText);
   e.parentNode.childNodes[4].innerText = val;  
}
// Above Function For Edit Any Specific TODO ROW

function deleteAll(){
    document.getElementById("todo").innerHTML="";
}

// Above Function for delete ALL Todo LIST
