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
  
  
  //If user request Overwatch Leagues!
  if (games == "Overwatch" || games == "overwatch")
  {
    for (var i = 0; i < tmpResults.length; i++) {
      if (j == 40)
        break
      if (tmpResults[i].videogame.name == "Overwatch"){   
      var date = tmpResults[i].series[0]
      
      if(tmpResults[i].series[0].hasOwnProperty('begin_at')) {
      template = {
         leauge_name: tmpResults[i].name,
        image_URL: {
          url: tmpResults[i].image_url 
        },
        start_date: date.begin_at
       }
      }
        
      if(typeof(tmpResults[i].series[0]) !== "undefined")     
       results.push(template)
      j++;
      }
    }
  }
  
  //If user request Dota 2
  else if (games == "dota 2" || games == "dota two") //checks if human says dota 2
  {
    for (var i = 0; i < tmpResults.length; i++) {
      if (j == 60)
        break
      if (tmpResults[i].videogame.name == "Dota 2"){ //checks json has "Dota 2"
      var date = tmpResults[i].series[0]
      
    if(typeof(tmpResults[i].series[0]) !== "undefined") { //Checks if it has a series object.
      template = {
         leauge_name: tmpResults[i].name,
        image_URL: {
          url: tmpResults[i].image_url 
        },
          start_date: date.begin_at
      }
     }
        
      if(typeof(tmpResults[i].series[0]) !== "undefined")
        results.push(template)
      j++;
      }
    }
  }
  
 
  //If user request counter strike
  else if (games == "counter strike" || games == "Counter Strike") //checks if human says dota 2
  {
    for (var i = 0; i < tmpResults.length; i++) {
      if (j == 60)
        break
      if (tmpResults[i].videogame.name == "CS:GO"){ //checks json has "Dota 2"
      var date = tmpResults[i].series[0]
      
    if(typeof(tmpResults[i].series[0]) !== "undefined") { //Checks if it has a series object.
      template = {
         leauge_name: tmpResults[i].name,
        image_URL: {
          url: tmpResults[i].image_url 
        },
          start_date: date.begin_at
      }
     }
        
      if(typeof(tmpResults[i].series[0]) !== "undefined")
        results.push(template)
      j++;
      }
    }
  }
  
  
  
  
  //if no video game is given!
  else {
        for (var i = 0; i < tmpResults.length; i++) {
      if (j == 200)
        break 
      var date = tmpResults[i].series[0]
      
       if(typeof(tmpResults[i].series[0]) !== "undefined"){
          template = {
           leauge_name: tmpResults[i].name,
           image_URL: {
           url: tmpResults[i].image_url 
        },
      start_date: date.begin_at
     } 
    }
          
      if(typeof(tmpResults[i].series[0]) !== "undefined")
        results.push(template)
      j++;
    }
  }
  
  
  return results;
}