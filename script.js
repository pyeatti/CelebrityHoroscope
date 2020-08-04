

$("#search-button").on("click", function (event) {
    event.preventDefault()
    let $searchPerson = $("#search-text").val();
    let queryURL = "http://api.themoviedb.org/3/search/person?query=" + $searchPerson + "&api_key=8ab67037c3d435e037521d6507495432";



    console.log(event)


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.results[0].id);
        $("#results").text(response.results[0].name)
        console.log(response.results[0].profile_path);
        let imgURL = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + response.results[0].profile_path;
        var img = $("<img>").attr("src" , imgURL); 
        $(".container").append(img);




            // let $personId = response.results[0].id;
            // let birthDayURL = "https://api.themoviedb.org/3/person/" + $personId + "?api_key=8ab67037c3d435e037521d6507495432";
        })
    })





