function render(currentPerson) {
    $(".card-title").text(currentPerson.name);
    let img = $(".card-img").attr("src", currentPerson.imgURL);
    $(".card-img").append(img);
    $("#birthDate").text(`Date of Birth : ${currentPerson.birthday}`);
    $("#personSign").text(`Personal Sign : ${currentPerson.sign}`);
    $("#signCompatible").text(` Compatible with: ${currentPerson.compatibility}`);
    $(".card-text").text(`Daily Horoscope : ${currentPerson.description}`);
    $(".signImg").attr("src" , findSignImg(currentPerson.sign))
    $(".signCompatibleImg").attr("src" , findSignImg(currentPerson.compatibility))
  }