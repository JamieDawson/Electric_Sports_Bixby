var http = require('http')
var console = require('console')

module.exports.function = function my_search (games) {
  var stuff = "not found";
  var template;
  var results = [];
  var apiURL = "https://api.pandascore.co/tournaments?token=4x5vC1weSK1XFRkBtMdt_m5LkZxit0PeQ2hvu5Go-63IRH5amj8"; 
  var tmpResults = http.getUrl(apiURL, {format: 'text'});
  tmpResults = JSON.parse(tmpResults) 
  var teamNum = 0;
  
  
if (games == "league of legends" || games == "League of Legends") //checks if human says dota 2
  {
    for (var i = 0; i < tmpResults.length; i++) {  
      if (tmpResults[i].videogame.name == "LoL"){ //checks json has "Dota 2"
        var date = tmpResults[i]
  
        template = {
          leauge_name: tmpResults[i].league.slug,
          image_URL: {
          url: tmpResults[i].league.image_url 
          },
           start_date: date.begin_at,
          team_image_URL: {
          url: tmpResults[i].teams[teamNum].image_url
         }      
       }
  
       console.log(tmpResults[i].teams[0].image_url)
     }  
        results.push(template)
      } 
    }
  return results;
}