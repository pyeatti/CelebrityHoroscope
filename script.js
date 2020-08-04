

$("#search-button").on("click" , function (event) {
    event.preventDefault()
    let $searchPerson = $("#search-text").val();
    let queryURL = "http://api.themoviedb.org/3/search/person?query=" + $searchPerson + "&api_key=8ab67037c3d435e037521d6507495432";



    console.log(event)
    

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        
    })
})

