var search = $(this).attr("data-search"); 
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=NSXcGQInZUdg7bUSwRV6pduG2NrYzePP";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
$("button").on("click", function(event){
    event.preventDefault();
var searchTerm = $("#searchTermInput").val();
console.log(searchTerm);
})

var start
var records
var startYear
var endYear


})