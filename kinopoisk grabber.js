var namefilm = document.getElementById('headerFilm').getElementsByClassName('moviename-big');
var namefilmeng = document.getElementById('headerFilm').children[1].textContent;
if(namefilmeng != "")
    namefilmeng = " / " + namefilmeng;
else
    namefilmeng = "";
var text = document.getElementsByClassName('brand_words');
var image = document.getElementsByClassName('popupBigImage cloud-zoom');
var year = "";
var genres = "";
var land = "";
var temp = "";
var ball = "";
$.each($('table.info').children().find('tr'), function(id,element){
    children = $(element).children();
    if($(children[0]).html().toLowerCase() === "год")
        year = $($(children[1]).find('a')[0]).html();
    if($(children[0]).html().toLowerCase() === "жанр")
        genres = $($(children[1]).find('span[itemprop=genre]')[0]).text();
    if($(children[0]).html().toLowerCase() === "страна"){
        temp = $($(children[1]).find('a'));
    var t = "";
    var num = temp.length;
    for(i = 0; i < num; i++){ 
    t = t + temp[i].text;
    if(i+1 < num) t = t + ", ";
    }
    land = t;
    }
});
image = image.item(0);
namefilm = namefilm.item(0).textContent;
namefilm = namefilm + namefilmeng;
if(text.item(0) != null)
    text = text.item(0).textContent; 
else
    text = "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
if(image == null) {
    image = document.getElementsByClassName('film-img-box');
    image = image[0].children[1].src;
}
else {
    image = image.children[0].getAttribute('src');
}
genres = genres.replace(/([^,^ ]+)/gi, "#$1");
var arr = [namefilm, year, genres, text, image];
if(document.getElementById("movie-trailer") != null) {
    var meta = document.getElementsByTagName("meta")
    var link = document.getElementById("trailers-title");
    var trailer_id = "";
    for (var i = meta.length - 1; i >= 0; i--) {
        if ( meta[i].getAttribute("property") != null ) {
            if ( meta[i].getAttribute("property") == "og:video" ) {
                trailer_id = meta[i].getAttribute("content").replace(/^[^=]+=[^=]+=/g,"");
                break;
            }
        }
    }

function isNumber(trailer_id) {
    var temp = trailer_id.replace(/\d+/g, "");
    if ( temp == "" )
        return true;
    else
        return false;
}
    if ( isNumber(trailer_id) )
        trailer = link + trailer_id;
    else
        trailer = ""
}
else trailer = "";
if(document.getElementsByClassName('rating_ball')[0] != null){
    ball = document.getElementsByClassName('rating_ball');
    ball = ball[0].textContent;
}
else ball = "-";
str = arr[0] + " (" + arr[1] + ")\nЖанры: " + arr[2] + "\nСтрана: " + land + "\nОценка кинопоиска: " + ball +"\n\n" + arr[3] + "\n" + arr[4] + "\n" + trailer;
str = str.replace(/\(ТВ\)\s/gi, "");
str = str.replace(/\(мини-сериал\)/gi, "");
str = str.replace(/\(видео\)/gi, "");
copy(str);