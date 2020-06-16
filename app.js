document.addEventListener("DOMContentLoaded", () => {
    
    //* detects click event to trigger json parsing
    document.querySelector('#add-json').onclick = () => {
        
        const list = document.querySelector("#select-json");
        const li = document.querySelector("#file-list");
        if (list.files.length < 1) {
            li.innerHTML = ""
            li.innerHTML = "No files selected!"
        } else {
            li.innerHTML = ""
            listUploaded();
            //addDelBtnToList();
        }

    }

});

function listUploaded() {

    const uploaded = document.querySelector('#select-json');

    //TODO add hasing(UUID) to list id's
    // for (file of uploaded.files) {

    //     const li = document.createElement("li");
    //     li.innerHTML = file.name;
    //     document.querySelector("#file-list").appendChild(li);
    // }

    //* lists added json to a created <li> element
    // needs refactoring for a cleaner code :)
    for (let file=0; file<uploaded.files.length; file++) {

        const li = document.createElement("li");
        li.innerHTML = uploaded.files.item(file).name;
        li.setAttribute("id", `json-file-${file}`);
        document.querySelector("#file-list").appendChild(li);

    }

}

function modifyAddedJsonFiles(id) {

    //* adds checkbox to each json files added to list

    const chkbox = document.createElement("input");
    chkbox.type = "checkbox";
    chkbox.name = `chkn-${id}`;
    chkbox.setAttribute("id", `chkn-${id}`);
    return chkbox;

}

function deleteAddedJsonFiles() {

    

}

function addDelBtnToList() {

    const lists = document.querySelectorAll("#file-list li");
    for (const list of lists) {

        const btn = document.createElement("button");
        btn.setAttribute("class", "btn-del");
        btn.innerHTML = "delete"
        document.querySelector(`#${list.id}`).append(btn);
        
    }

}

function searchKeywords() {




}