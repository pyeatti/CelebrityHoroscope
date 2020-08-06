function render(currentPerson) {
    $(".card-title").text(currentPerson.name);
    let img = $(".card-img").attr("src", currentPerson.imgURL);
    $(".card-img").append(img);
    $("#birthDate").text(`Date of Birth : ${currentPerson.birthday}`);
    $("#signCompatible").text(` Compatible with: ${currentPerson.compatibility}`);
    $(".card-text").text(`Daily Horoscope : ${currentPerson.description}`);
    
  }