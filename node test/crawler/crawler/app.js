var request = require('request');
var cheerio = require('cheerio');
var url = ' http://chanyouji.com/';
request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        $ = cheerio.load(body);
       $(".page-container a").each(function(a,b){
          if($(b).attr("class")!=="user"){



               console.log($(b).attr("href").substr(7,13));
             console.log();
          }

    });
    }
});


