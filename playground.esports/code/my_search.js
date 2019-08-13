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
  
  if (games == "league of legends" || games == "League of Legends") { 
    for (var i = 0; i < tmpResults.length; i++) {  
      if (tmpResults[i].videogame.name == "LoL") { //checks json has "Dota 2"
        var date = tmpResults[i]
        var teamImages = []; //all team images.
        for (var j = 0; j < tmpResults[i].teams.length; j++)
          teamImages.push({
            url: tmpResults[i].teams[j].image_url,
            caption: tmpResults[i].teams[j].name
          });
        
        var youtube_search = "https://www.youtube.com/results?search_query=" + tmpResults[i].league.slug;
               
        template = {
          leauge_name: tmpResults[i].league.slug,
          image_URL: {
            url: tmpResults[i].league.image_url 
          },
          start_date: date.begin_at,
          team_image_URL: teamImages,
          youtube_link: youtube_search,
        }
        console.log(tmpResults[i].teams[0].image_url)
      }  
      results.push(template)
    } 
  }
  
  
  else if (games == "dota 2" || games == "dota") { 
    for (var i = 0; i < tmpResults.length; i++) {  
      if (tmpResults[i].videogame.name == "Dota 2") { //checks json has "Dota 2"
        console.log("DO I GET HERE!!!")
        var date = tmpResults[i]
        var teamImages = []; //all team images.
        for (var j = 0; j < tmpResults[i].teams.length; j++)
          teamImages.push({
            url: tmpResults[i].teams[j].image_url,
            caption: tmpResults[i].teams[j].name
          });
        
        var youtube_search = "https://www.youtube.com/results?search_query=" + tmpResults[i].league.slug;
               
        template = {
          leauge_name: tmpResults[i].league.slug,
          image_URL: {
            url: tmpResults[i].league.image_url 
          },
          start_date: date.begin_at,
          team_image_URL: teamImages,
          youtube_link: youtube_search,
        }
      }  
      results.push(template)
    } 
  }

    return results;
}