var http = require('http')
var console = require('console')

var game_list = ["Dota", "League of Legends", "Counter Strike"]

function findGame(game) {
  if (!game)
    return;
  game = game.toLowerCase()
  for (var i = 0; i < game_list.length; i++)
    if (game_list[i].toLowerCase().includes(game))
      return (game_list[i])
  return;
}

function buildSharedAssets(tmpResult, the_name) {
  var youtube_search = "https://www.youtube.com/results?search_query=" + tmpResult.league.slug;
  var ret = {
    league_name: tmpResult.league.slug.replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " "),
    image_URL: {
      url: tmpResult.league.image_url
    },
    start_date: tmpResult.begin_at.substring(0, 10).replace("-", "/").replace("-", "/"),
    end_date: tmpResult.end_at ? tmpResult.end_at.substring(0, 10).replace("-", "/").replace("-", "/") : 'TBA',
    youtube_link: youtube_search,
    name_of_the_game: the_name,
  }

  var teamImages = []; //all team images.       
  for (var j = 0; j < tmpResult.teams.length; j++) { //loop to save team images
    var imageTemplate = { caption: tmpResult.teams[j].name }
    if (tmpResult.teams[j].image_url)
      imageTemplate.url = tmpResult.teams[j].image_url
    else
      imageTemplate.url = "images/icons/game_icon.png" //CHANGE THIS FOR LATER!
    teamImages.push(imageTemplate);
  }
  ret.team_image_URL = teamImages
  return ret
}

function keyBuilder(game) {
  if (game == "League of Legends")
    return "LoL"
  if (game == "Dota")
    return "Dota 2"
  if (game == "Counter Strike")
    return "CS:GO"
}

module.exports.function = function my_search(game) {
  var apiURL = "https://api.pandascore.co/tournaments?token=4x5vC1weSK1XFRkBtMdt_m5LkZxit0PeQ2hvu5Go-63IRH5amj8";
  var tmpResults = http.getUrl(apiURL, { format: 'json' });
  var results = [];

  game = findGame(game)
  if (!game)
    game = game_list[Math.floor(Math.random() * 3)]
  for (var i = 0; i < tmpResults.length; i++) {
    if (tmpResults[i].videogame.name == keyBuilder(game)) { //checks json has "Dota 2"
      template = buildSharedAssets(tmpResults[i], game)
      results.push(template)
    }
  }

  return results;
}