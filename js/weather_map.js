// $(document).ready(function () {

        // MapBox
            mapboxgl.accessToken = mapBoxToken;
            var map = new mapboxgl.Map({
                container: 'map',  // container id
                style: 'mapbox://styles/mapbox/streets-v9',
                // style: 'mapbox://styles/mapbox/streets-v11',
                zoom: 9,
                // center: [-122.420679, 37.772537] // San Francisco
                center: [-98.4916, 29.4252] // San Antonio
                // center: [-77.0369, 38.9072] // Washington D.C
                // center: [-97.7718784, 31.0810943] // Killeen, TX
            });
            // Draggable marker
            var marker = new mapboxgl.Marker({
                draggable: true
            })
                .setLngLat([-98.4916, 29.4252])
                .addTo(map);

            // Geocoder code:
            map.addControl(new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
            }));


            var lngLat = [];
            var mapInput = '29.4252, -98.4916'; //Set to San Antonio when it first loads
            var mapInputLong = '-98.4916'; // Set Longitude for San Antonio for reverse geo code function
            var mapInputLat = '29.4252'; // Set Latitude for San Antonio for reverse geo code function

            // Updates the lat and long after the search input moves the map.
            map.on("moveend", function () {
                // console.log(map.getCenter());
                marker.setLngLat(map.getCenter());
                lngLat = map.getCenter();
                mapInput = lngLat.lat + ',' + lngLat.lng;
                mapInputLong = lngLat.lng;
                mapInputLat = lngLat.lat;
                reverseGeocode(); // Call reverse Geocode function to return city and state names
                weatherUpdate(); // Sends the weather api the updated lat and long.
            });

            function onDragEnd() {
            // lngLat variable gets the long and lat values where the marker is.
            lngLat = marker.getLngLat();
            mapInput = lngLat.lat + ',' + lngLat.lng;
            mapInputLong = lngLat.lng;
            mapInputLat = lngLat.lat;
            // coordinates.style.display = 'block';
            // coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
                // console.log(lngLat);
                reverseGeocode(); // Call reverse Geocode function to return city and state names
                weatherUpdate(); // Call the darkSky api and update the weather based upon the markers location.
                console.log(mapInput);
            }
            marker.on('dragend', onDragEnd);
            // console.log(marker.on('dragend', onDragEnd));

            // Add zoom and rotation controls to the map.
            map.addControl(new mapboxgl.NavigationControl());

            // Map event listener
            // map.on("mouseup", function() {
            // // console.log(map.getCenter());
            // console.log(onDragEnd());
            //
            // });




//////////////////// End of MapBox code

//////////////////////////////////////////////Start Reverse Geocode
// console.log(mapInputLong);
// console.log(mapInputLat);
// console.log(mapInput);
var mapInputCityName = '';
var mapInputStateName = '';

// Reverse geocoding- Covert long and lat to address
function reverseGeocode(){
    $.ajax("https://api.mapbox.com/geocoding/v5/mapbox.places/" + mapInputLong + "," + mapInputLat + ".json?access_token=pk.eyJ1IjoibWF0dDM2MDciLCJhIjoiY2p6aWhjYWFyMTZucDNjcTZxYnhjaTRjNyJ9.RegX-B-HGNFCIAH3vShlyw").done(function (data) {
        console.log("Map BOX data: " + JSON.stringify(data));
        console.log(data);
        console.log(data.features[2].text); // Returns City name
        console.log(data.features[3].text); // Returns State name
        mapInputCityName = data.features[2].text;
        mapInputStateName = data.features[3].text;

    });

}

reverseGeocode(); // Calling function

//////////////////////////////////////////////// Start Update Weather Function

function weatherUpdate() {
    // GET request Dark Sky API 🤖⏬
    $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + mapInput).done(function (WeatherAPIData) {
        // icons array
        var icons =[
            {
                weather:"clear-day",
                url:'icon/SVG/Sun.svg'
            },
            {
                weather:"clear-night",
                url:'icon/SVG/Moon.svg'
            },
            {
                weather:"rain",
                url:'icon/SVG/Cloud-Rain.svg'
            },
            {
                weather:"snow",
                url:'icon/SVG/Cloud-Snow.svg'
            },
            {
                weather:"sleet",
                url:'icon/SVG/Cloud-Snow-Alt.svg'
            },
            {
                weather:"wind",
                url:'icon/SVG/Wind.svg'
            },
            {
                weather:"fog",
                url:'icon/SVG/Cloud-Fog.svg'
            },
            {
                weather:"cloudy",
                url:'icon/SVG/Cloud.svg'
            },
            {
                weather:"partly-cloudy-day",
                url:'icon/SVG/Cloud-Sun.svg'
            },
            {
                weather:"partly-cloudy-night",
                url:'icon/SVG/Cloud-Moon.svg'
            }

        ];


        function firstLookWeather(data) {
            // console.log(data);
            // Displays icon based upon the icon property from API
            function iconBasedOnWeather(weatherIcon, iconsArray){

                for (var a = 0; a < iconsArray.length; a++){
                    var iconDisplay = '';
                    if (weatherIcon === iconsArray[a].weather ){
                        // console.log(iconsArray[a].weather);
                        iconDisplay += iconsArray[a].url;
                        // console.log(iconDisplay, typeof iconDisplay);
                        return iconDisplay;
                    }
                }
            } // End iconBasedOnWeather

            var iconImg = '';
            // Grabs API icon value and sends it into function to return the icon image path.
            iconImg += iconBasedOnWeather(data.currently.icon, icons );
            // console.log(iconImg);

            var firstLookData = "";
            // Data in Jumbotron at top of page
            var firstLookData = '';
            firstLookData += '<h1 class="locationName display-3 text-center order-0">' + mapInputCityName + ', ' + mapInputStateName +  ' Weather' + '</h1>';
            firstLookData += '<img class="weatherIcon order-1" src="'+iconImg+'" alt="">';
            firstLookData += '<h4 class="currentSummary order-1">' + data.currently.summary + '</h4>';
            firstLookData += '<div class="currentTemp order-1">' + Math.round(data.currently.temperature) + '&#176;' + '</div>';
            $('.jumbotron1').html(firstLookData);


            // Foreach looping through array
            // data.currently.forEach(function (data) {
            //     console.log(data);
            //
            //     firstLookData += '<div>';
            //     firstLookData += '<h1 class="locationName display-3 text-center">' + 'San Antonio Weather' + '</h1>';
            //     firstLookData += '<img src="icon/SVG/Sun.svg" alt="">';
            //     firstLookData += '<div class="weatherIcon">' + temperature + '</div>';
            //     firstLookData += '</div>';
            //     $('.jumbotron1').html(firstLookData)
            //
            // }); //end of forEach()



        } // end of first Look Weather function

        function threeDayForcast(data) {
            var threeDayForcastData = ""; // Data inside the 3 day forecast cards
            var locationNameData = ""; // Location data
            // console.log(data.daily.data);
            // console.log(data.currently);
            // Current weather temp
            for(var i = 0; i < 3; i++){
                // console.log(data.daily.data[i]);




                // Data and time object
                var dateObject = new Date(data.daily.data[i].time * 1000);
                // console.log(dateObject.getUTCDay());

                // threeDayForcastData += '<h6 class="  text-center">' + dateObject.toDateString() + '</h6>';

                // Displays icon based upon the icon property from API
                function iconBasedOnWeather(weatherIcon, iconsArray){

                    for (var a = 0; a < iconsArray.length; a++){
                        var iconDisplay = '';
                        if (weatherIcon === iconsArray[a].weather ){
                            // console.log(iconsArray[a].weather);
                            iconDisplay += iconsArray[a].url;
                            // console.log(iconDisplay, typeof iconDisplay);
                            return iconDisplay;
                        }
                    }
                } // End iconBasedOnWeather

                var iconImg = '';
                // Grabs API icon value and sends it into function to return the icon image path.
                iconImg += iconBasedOnWeather(data.daily.data[i].icon, icons );
                // console.log(iconImg);


                // 3 Day Daily forecast data
                locationNameData    = '<div class="dailyHeading card-header bg-primary text-white">' + 'Daily Forecast: ' + mapInputCityName + ', ' + mapInputStateName + '</div>';
                threeDayForcastData += '<div class="jumbotron1-box1 card ">';
                threeDayForcastData += '<div class="card-header dailyHeader">' + '<h3>' + dateObject.toDateString() + '</h3>' + '</div>';
                threeDayForcastData += '<h3 class="highLowTemp  text-center mt-2">' + 'High: ' + Math.round(data.daily.data[i].apparentTemperatureHigh) + '&#176;' + ' / ' + 'Low: ' + Math.round(data.daily.data[i].apparentTemperatureLow) + '&#176;' + '</h3>';
                threeDayForcastData += '<img class="weatherIcon" src= "'+iconImg+'" alt=" Weather Icon">';
                threeDayForcastData += '<p class="dailyTemp">' + data.daily.data[i].summary  + '</p>';
                threeDayForcastData += '<p class="dailyHumidity">'+ 'Humidity: ' + Math.round((data.daily.data[i].humidity * 100 )) + '%' + '</p>';
                threeDayForcastData += '<p class="dailyWindSpeed">'+ 'Wind Speed: ' + Math.round(data.daily.data[i].windSpeed) + ' MPH' + '</p>';
                threeDayForcastData += '<p class="dailyPressure">'+ 'Pressure: ' + data.daily.data[i].pressure + '</p>';
                threeDayForcastData += '</div>'; // end jumbotron1-box1
                $('.dailyForecast').html(threeDayForcastData);
                $('.dailyLocationName').html(locationNameData);

            } // End of for loop 3 iterations
        } // end of three day forecast function



        firstLookWeather(WeatherAPIData, icons); // Calling the firstLookWeather function
        threeDayForcast(WeatherAPIData, icons); // Calling threeDayForcast function
    }); // end of GET request Dark Sky API

}



weatherUpdate();


// }); // End of document ready


