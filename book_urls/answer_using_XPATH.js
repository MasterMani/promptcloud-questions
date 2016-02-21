var xpath = require('xpath'),
  request = require('request'),
  dom = require('xmldom').DOMParser,
  mainUrl = "http://www.amazon.com/b?node=8192263011";

request(mainUrl, function(err, req, res){
  var xml = res.toString(),
    doc = new dom().parseFromString(xml),
    nodes = xpath.select("//a[@class='title']" , doc);
    nodes.forEach(function(e, i){
      console.log(e.getAttribute('href'))
    })
});