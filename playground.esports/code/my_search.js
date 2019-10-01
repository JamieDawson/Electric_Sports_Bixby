var http = require('http')
var console = require('console')

var game_list = ["dota", "league of legends", "counter strike"]

function findGame(game) {
  if (!game)
    return ;
  game = game.toLowerCase(game)
  for (var i = 0; i < game_list.length; i++) {
    if (game_list[i].includes(game)) {
      return (game_list[i])
    }
  }
  return ;
}

module.exports.function = function my_search(games) {
  var stuff = "not found";
  var template;
  var results = [];
  var apiURL = "https://api.pandascore.co/tournaments?token=4x5vC1weSK1XFRkBtMdt_m5LkZxit0PeQ2hvu5Go-63IRH5amj8";
  var tmpResults = http.getUrl(apiURL, { format: 'json' });
  var teamNum = 0;
    
  games = findGame(games)
  if (!games)
    games = game_list[Math.floor(Math.random() * 3)]

  if (games == "league of legends") {
    for (var i = 0; i < tmpResults.length; i++) {
      var template = {}
      if (tmpResults[i].videogame.name == "LoL") { //checks json has "Dota 2"
        var teamImages = []; //all team images.       
        for (var j = 0; j < tmpResults[i].teams.length; j++) //loop to save team images
          teamImages.push({
            url: tmpResults[i].teams[j].image_url,
            caption: tmpResults[i].teams[j].name
          });
        var youtube_search = "https://www.youtube.com/results?search_query=" + tmpResults[i].league.slug;
        var the_name = "League of Legends";
        template = {
          leauge_name: tmpResults[i].league.slug.replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " "),
          image_URL: {
            url: tmpResults[i].league.image_url
          },
          start_date: tmpResults[i].begin_at.substring(0, 10).replace("-", "/").replace("-", "/"),
          end_date: tmpResults[i].end_at ? tmpResults[i].end_at.substring(0, 10).replace("-", "/").replace("-", "/") : 'TBA',
          team_image_URL: teamImages,
          youtube_link: youtube_search,
          name_of_the_game: the_name,
        }
        results.push(template)
      }
    }
  }
  else if (games == "dota") {
    for (var i = 0; i < tmpResults.length; i++) {
      var template = {}
      if (tmpResults[i].videogame.name == "Dota 2") { //checks json has "Dota 2"
        var date = tmpResults[i]
        var teamImages = []; //all team images.
        for (var j = 0; j < tmpResults[i].teams.length; j++)
          teamImages.push({
            url: tmpResults[i].teams[j].image_url,
            caption: tmpResults[i].teams[j].name
          });
        var the_name = "dota";
        var youtube_search = "https://www.youtube.com/results?search_query=" + tmpResults[i].league.slug;
        template = {
          leauge_name: tmpResults[i].league.slug.replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " "),
          image_URL: {
            url: tmpResults[i].league.image_url
          },
          start_date: tmpResults[i].begin_at.substring(0, 10).replace("-", "/").replace("-", "/"),
          end_date: tmpResults[i].end_at ? tmpResults[i].end_at.substring(0, 10).replace("-", "/").replace("-", "/") : 'TBA',
          team_image_URL: teamImages,
          youtube_link: youtube_search,
          name_of_the_game: the_name,
        }
        results.push(template)
      }
    }
  }
  else if (games == "counter strike") {
    for (var i = 0; i < tmpResults.length; i++) {
      var template = {}
      if (tmpResults[i].videogame.name == "CS:GO") { //checks json has "Dota 2"
        var date = tmpResults[i]
        var teamImages = []; //all team images.
        for (var j = 0; j < tmpResults[i].teams.length; j++)
          teamImages.push({
            url: tmpResults[i].teams[j].image_url,
            caption: tmpResults[i].teams[j].name
          });

        var youtube_search = "https://www.youtube.com/results?search_query=" + tmpResults[i].league.slug;
        var the_name = "counter strike"

        template = {
          leauge_name: tmpResults[i].league.slug.replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " "),
          image_URL: {
            url: tmpResults[i].league.image_url
          },
          start_date: tmpResults[i].begin_at.substring(0, 10).replace("-", "/").replace("-", "/"),
          end_date: tmpResults[i].end_at ? tmpResults[i].end_at.substring(0, 10).replace("-", "/").replace("-", "/") : 'TBA',
          team_image_URL: teamImages,
          youtube_link: youtube_search,
          name_of_the_game: the_name,
        }
      }
      results.push(template)
    }
  }
  return results;
}