function addNote(){

    let input = document.getElementById("noteInput");
    let note = input.value;

    if(note==""){
        alert("Please enter a note!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${note}
        <button class="delete" onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("noteList").appendChild(li);

    input.value="";
}