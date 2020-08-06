let actors = JSON.parse(localStorage.getItem("actors"));
if (actors === null) {
    actors = [];
} 
console.log("hello World")
let saveNames = actors.map( actor => actor.name);
console.log(saveNames)
for (let i = 0; i < saveNames.length; i++) {
    const actor= actors[i];
    console.log(actor)
    $("#savedSearch").append(`<tr><td><button>${actor.name}</button></tr></td>`);
}
