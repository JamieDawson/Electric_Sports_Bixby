var http = require('http')
var console = require('console')

module.exports.function = function my_search (games) {
  var stuff = "not found";
  var template;
  var results = [];
  var apiURL = "https://api.pandascore.co/leagues?token=4x5vC1weSK1XFRkBtMdt_m5LkZxit0PeQ2hvu5Go-63IRH5amj8"; 
  var tmpResults = http.getUrl(apiURL, {format: 'text'});
  tmpResults = JSON.parse(tmpResults) 
  var j = 1;
  
  if (games == "overwatch")
    console.log("found overwatch")
  
  for (var i = 0; i < tmpResults.length; i++) {
    if (j == 5)
      break
    var date = tmpResults[i].series[0]
    template = {
       leauge_name: tmpResults[i].name,
      image_URL: {
        url: tmpResults[i].image_url 
      },
      start_date: date.begin_at
    }
    results.push(template)
    j++;
  }
  return results;
}