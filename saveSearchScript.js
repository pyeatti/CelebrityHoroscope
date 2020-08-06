let actors = JSON.parse(localStorage.getItem("actors"));
if (actors === null) {
    actors = [];
} 

let saveNames = actors.map( actor => actor.name);
console.log(saveNames)
for (let i = 0; i < saveNames.length; i++) {
    const actor= actors[i];
    $("#savedSearch").append(`<ul class="list-group"><li class="loadActor list-group-item" data-sequence="${i}">${actor.name}</li></ul>`);
    
}
$(".loadActor").on("click" , function (event) {
    $(".card").css("visibility", "visible");
    let currentPerson = actors[this.getAttribute("data-sequence")];
    console.log(currentPerson)
        console.log(this.getAttribute("data-sequence"));
        render(currentPerson);
        console.log(currentPerson)
    })

      
  function findSignImg(sign) {

    switch (sign) {
      case "Aries":
        return "./signImages/aries.png" 
      case "Taurus":
        return "./signImages/taurus.png" 
      case "Gemini":
        return "./signImages/gemini.png" 
      case "Cancer":
        return "./signImages/cancer.png" 
      case "Leo":
        return "./signImages/leo.png" 
      case "Virgo":
        return "./signImages/virgo.png" 
      case "Libra":
        return "./signImages/libra.png" 
      case "Scorpio":
        return "./signImages/scorpio.png" 
      case "Sagittarius":
        return "./signImages/sagittarius.png" 
      case "Capricorn":
        return "./signImages/capricorn.png" 
      case "Aquarius":
        return "./signImages/aquarius.png" 
      case "Pisces":
        return "./signImages/pisces.png" 
        
 
      default:
        break;
    }
  }