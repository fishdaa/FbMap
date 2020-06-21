
let jsonFiles = Object();

document.addEventListener("DOMContentLoaded", () => {

    toggleElementVisibility("#remove-file");
    
    document.querySelector('#add-json').onclick = () => {
        
        const li = document.querySelector("#file-list");
        if (hasUploadedFile()) {
            
            li.innerHTML = ""
            li.innerHTML = "No files selected!"

        } else {

            li.innerHTML = ""
            listUploaded();
            //addDelBtnToList();
            toggleElementVisibility("#remove-file");
            jsonFiles = document.querySelector("#select-json").files;
            

        }

    }

    document.querySelector("#remove-file").onclick = () => {
        removeCheckedJsonFiles();
        if (countFileList() < 1) {
            
            toggleElementVisibility("#remove-file");

        }

    }

});

function hasUploadedFile() {

    const list = document.querySelector("#select-json");
    if (list.files.length < 1) {

        return true;

    } else {

        return false;

    }

}

function listUploaded() {

    const jsonNames = getJsonFileNames();
    for (name of jsonNames) {

        const chk = createCheckboxElement(uuidv4());
        const lbl = createLabelElement(chk.id, name);
        const li = createListElement(uuidv4(), "");
        li.appendChild(chk);
        li.appendChild(lbl);
        document.querySelector("#file-list").appendChild(li);

    }

}

function getCurrentFileList() {

    //const lists = [...document.querySelectorAll('#file-list li')]; 
    const lists = document.querySelectorAll("#file-list li");
    let files = Array();
    for (list of lists) {

        var doc = new DOMParser().parseFromString(list.innerHTML, "text/xml");
        const inp = doc.firstChild;
        const lbls = findLableForControl(inp);
        files.push(lbls.innerText);

    };

    return files;

}

function findLableForControl(el) {

    var idVal = el.id;
    labels = document.getElementsByTagName('label');
    for( var i = 0; i < labels.length; i++ ) {

        if (labels[i].htmlFor == idVal) {

            return labels[i];

        }
            
    }

}

function getJsonFileNames() {

    //* gets names of added files in list
    let jsonFiles = Array();
    const uploaded = document.querySelector('#select-json');
    for (file of uploaded.files) {

        jsonFiles.push(file.name);

    }

    return jsonFiles;

}

function createListElement(id, content) {

    const li = document.createElement("li");
    li.innerHTML = content;
    li.setAttribute("id", `list-${id}`);
    return li;

}

function createLabelElement(htmlfor, content) {

    const lbl = document.createElement("label");
    lbl.htmlFor = htmlfor;
    lbl.innerHTML = content;
    return lbl;

}

function createCheckboxElement(id) {

    //* adds checkbox to each json files added to list
    const chkbox = document.createElement("input");
    chkbox.type = "checkbox";
    chkbox.setAttribute("id", `chk-${id}`);
    return chkbox;

}

function removeCheckedJsonFiles() {

    const lists = document.querySelectorAll("#file-list li");
    let files = Array();
    for (let item=0; item<lists.length; item++) {

        const input = lists.item(item).firstChild;
        if (input.checked) {

            lists.item(item).remove();

        }
        
    }

}

function addDelBtnToList() {

    const lists = document.querySelectorAll("#file-list li");
    for (const list of lists) {

        const btn = document.createElement("button");
        btn.setAttribute("class", "btn-del");
        btn.innerHTML = "delete";
        document.querySelector(`#${list.id}`).append(btn);
        
    }

}

function toggleElementVisibility(id) {
    
    var div = document.querySelector(id);
    div.style.display = div.style.display == "none" ? "block" : "none";

}

function countFileList() {

    const lists = document.querySelectorAll("#file-list li");
    return lists.length;

}

function searchKeywords() {




}



function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}