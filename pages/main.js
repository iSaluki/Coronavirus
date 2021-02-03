$(function () {
    var $stats = $("#stats");
    $.ajax({
        type: "GET",
        url: "https://covid19-api.org/api/status",
        success: function(stats){
        $.each(stats, function(i, stat)
        {
            $stats.append("<li>Country: "+ stat.country +", Cases: "+ stat.cases +" , Deaths: "+ stat.deaths + ", Recovered: "+ stat.recovered +", Last Updated:" + stat.last_update + "</li>");
        })
        }
    });
});