$(document).ready(function() {

  $("#search-form").submit(function(event) {
    event.preventDefault();
    var search = $("#search-term").val();
    $("#search-term").val("");
    getVideos(search);
  });

  function getVideos(search) {
    var params = {
      part: 'snippet',
      q: search,
      key: 'AIzaSyAOlN6_KVX0PqPLsaA6raMgHhyA8DeX5Hw',
      maxResults: 10
    };
    var url = 'https://www.googleapis.com/youtube/v3/search';
    $.getJSON(url, params, function(data) { 
      showResults(data);
    });
  }

  function showResults(data) {
    console.log(data);
    $("#results").empty();
    var html = "";
    for (var i=0; i<data.items.length; i++) {
      html += "<li>" + data.items[i].snippet.channelTitle + "</li>";
    }
    $("#results").append(html);
  }

});