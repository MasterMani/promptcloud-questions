//Question: Find the url of each of the books listed either on http://www.amazon.com/b?node=8192263011

// Dom Selector will be - "a.title" for first hundered books and ".a-row > a.s-access-detail-page" for bottom 12 books



/*
// Extract urls using DOM-CSS selector method

var request = require('request'),
  cheerio = require('cheerio'),
  mainUrl = "http://www.amazon.com/b?node=8192263011";

request(mainUrl, function(err, req, res){
  var $ = cheerio.load(res),
    book_urls = [];

  $('a.title, .a-row > a.s-access-detail-page').each(function(i,e){
    var url = $(e).attr('href');
      url = url.match(/http:\/\/www/) ? url : "http://www.amazon.com" + url;
    book_urls.push(url);
  });

  console.log(book_urls);
  console.log(book_urls.length);
});

*/