// Weather API 
var WeatherAPIKey = "5bcec118bb17182a71f0f39b818f385b";

// when you click search button it makes a call to the API
var storedCity = [];

searchBtn.on("click", function(event) {
    event.preventDefault();
    if (searchInput.val() === "") {
        alert("You must enter a city");
        return;

        var cityName = search.val();
        console.log(cityName);

        localStorage.setItem("city",JSON.stringify(cityName));
    }
})