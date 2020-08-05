let array = [];
$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  $(".card").css("visibility", "visible");
  let currentPerson = {};
  let $searchPerson = $("#search-text").val();
  let queryURL =
    "http://api.themoviedb.org/3/search/person?query=" +
    $searchPerson +
    "&api_key=8ab67037c3d435e037521d6507495432";

  console.log(event);

  $.ajax({
    url: queryURL,
    method: "GET",
  })
    .then(function (response) {
      // console.log(response);
      // console.log(response.results[0].id);
      $(".card-title").text(response.results[0].name);

      currentPerson.name = response.results[0].name;
      // console.log(response.results[0].profile_path);
      let imgURL =
        "https://image.tmdb.org/t/p/w300_and_h450_bestv2/" +
        response.results[0].profile_path;
      var img = $(".card-img").attr("src", imgURL);
      $(".card-img").append(img);

      let personId = response.results[0].id;
      currentPerson.id = personId;
      let birthDayURL =
        "https://api.themoviedb.org/3/person/" +
        personId +
        "?api_key=8ab67037c3d435e037521d6507495432";

      return $.ajax({
        url: birthDayURL,
        method: "GET",
      });
    })
    .then(function (response) {
      // console.log(response)
      console.log(response.birthday);
      $("#birthDate").text(`Date of Birth : ${response.birthday}`);

      let birthDay = response.birthday;
      currentPerson.birthday = response.birthday;
      var settings = {
        async: true,
        crossDomain: true,
        url: "https://zodiac-sign.p.rapidapi.com/sign?date=" + birthDay,
        method: "GET",
        headers: {
          "x-rapidapi-host": "zodiac-sign.p.rapidapi.com",
          "x-rapidapi-key":
            "8fe718dee2msh9f9d9237799dda0p140eedjsnb49d7ea7c41b",
        },
      };

      return $.ajax(settings);
    })

    .then(function (response) {
      console.log(response);
      $("#personSign").text(response);
      let sign = response;
      currentPerson.sign = sign;

      var horoScope = {
        async: true,
        crossDomain: true,
        url:
          "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" +
          sign +
          "&day=today",
        method: "POST",
        headers: {
          "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "8fe718dee2msh9f9d9237799dda0p140eedjsnb49d7ea7c41b",
          "content-type": "application/x-www-form-urlencoded",
        },
        data: {},
      };
      return $.ajax(horoScope);
    })
    .then(function (response) {
      // console.log(response);
      console.log(response.compatibility);
      $("#signCompatible").text(` Compatible with: ${response.compatibility}`);
      console.log(response.description);
      $(".card-text").text(`Daily Horoscope : ${response.description}`);

      currentPerson.compatibility = response.compatibility;
      currentPerson.description = response.description;

      array.push(currentPerson);
      localStorage.setItem("array", JSON.stringify(array));
    });
});
