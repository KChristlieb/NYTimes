var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=NSXcGQInZUdg7bUSwRV6pduG2NrYzePP";
$.ajax({
    url: queryURL
    method: "GET"
})
.then(function(response) {
console.log (response)
})