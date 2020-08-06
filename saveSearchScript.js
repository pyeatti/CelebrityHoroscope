let actors = JSON.parse(localStorage.getItem("actors"));
if (actors === null) {
    actors = [];
} 

let saveNames = actors.map( actor => actor.name);
console.log(saveNames)
for (let i = 0; i < saveNames.length; i++) {
    const actor= actors[i];
    $("#savedSearch").append(`<tr><td><button class="loadActor" data-sequence="${i}">${actor.name}</button></tr></td>`);
    
}
$(".loadActor").on("click" , function (event) {
    $(".card").css("visibility", "visible");
    let currentPerson = actors[this.getAttribute("data-sequence")];
    console.log(currentPerson)
        console.log(this.getAttribute("data-sequence"));
        render(currentPerson);
        console.log(currentPerson)
    })