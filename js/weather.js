function weatherCallback() {
  $(document).ready(function () {
    $.ajax({
      method: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q=Lublin&units=metric&appid=88fcfe1ca88c2217199672c30ffd292a",
      dataType: "json",
      success: function (result) {
        var table = $("<table><tr><th>Weather Today</th></tr>");
        table.append("<tr><td>City:</td><td>" + result.name + "</td></tr>");
        table.append("<tr><td>Temperature:</td><td>" + result.main.temp + "°C</td></tr>");
        table.append("<tr><td>Wind:</td><td>" + result.wind.speed + "km/h</td></tr>");
        table.append("<tr><td>Clouds:</td><td>" + result.clouds.all + "%</td></tr>");
        table.append("<tr><td>Humidity:</td><td>" + result.main.humidity + "%</td></tr>");
        $("#weather").html(table);
      },
    });
  });
}



