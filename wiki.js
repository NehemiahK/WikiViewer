
function search(){
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?"
    $("#results").html("");
    displayResults(url);
}

$("#searchTerm").on("keydown",function(e){
    if (e.keyCode === 13){
        search();
    }
})

function displayResults(link){
    $.get(link, function(data){

        for (var i=0;i<data[1].length; i++){

            var a = $("<a/>");
            a.attr("href",data[3][i]);
            a.attr("target", "_blank");
            var div = $("<div/>");

            var h4 = $("<h4/>");
            h4.html(data[1][i]);
            div.append(h4);
            div.addClass('result');

            var p = $("<p/>");
            p.html(data[2][i]);
            div.append(p);

            a.append(div);
            $("#results").append(a);
        }

    },"JSON");
}
