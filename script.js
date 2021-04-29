// Weather API 
var weatherAPIKey = "5bcec118bb17182a71f0f39b818f385b";

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

        store();
        function store() {
            localStorage.getItem("city");
            storedCity.push(cityName);
            localStorage.setItem("city",JSON.stringify(storedCity));
        }
    var QueryURL = "api.openweathermap.org/data/2.5/forecast?q" + cityName + "&units=imperial&cnt=40&appid=" + weatherAPIKey;
    console.log(QueryURL);

    $.ajax({
        url: QueryURL,
        method: "GET"
    })

    // Render city & information
    .then(function(response) {
        var lat = response.city.coord.lat;
        console.log(lat);
        var lon = response.city.coord.lon;
        console.log(lon);

        var uvIndex = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + weatherAPIKey;
        $.ajax({
            url: uvIndex,
            method: "GET"
        }).then(function (index) {
            console.log(index);
            
            var ivI = index.value;
            console.log(ivI);
            
            $("uvindex").text(ivI);

            if (ivI < 2) {
                $("uvindex").remove("yellow orange red purple");
                $("uvindex").addClass("green");
            }
            else if(ivI === 3) {
                $("uvindex").remove("green orange red purple");
                $("uvindex").addClass("yellow");
            }

            else if (ivI === 6 && 7) {
                $("uvindex").addClass("orange");
            }
            else if (ivI > 8 && 10) {
                $(uvindex).addClass("red"); 
            }
            else if (ivI === 11) {
                $("uvindex").addClass("purple");
            }
        })

        console.log(response);
        console.log(uvIndex);

        var cityList = response.city.name;
        console.log(cityList);
        var date = response.list[0].dt_txt;
        
        function renderCity() {
            // creating list 

            var 1 = $("<li>");
            1.addClass("list-group-item");
            1.text(cityList);
            $("searchList").append(1);

            // show container with city info


        }

    })
    }
})