function isPhoto (linkData) {
    linkData = linkData.replace(/^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?! 0)(?:(?! 0[^.]|255)[ 0-9]{1,3}\.){3}(?! 0|255)[ 0-9]{1,3})(?:\/[a-zа-я0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i, "true");
    if (linkData == "true")
        return true;
    else
        return false;
}

var txt = document.getElementsByClassName('wall_post_text')[0] != null ? document.getElementsByClassName('wall_post_text')[0] : "!!!!!!!!!!!!!!!!!!!!!!";
txt = txt.innerHTML != null ? txt.innerHTML : txt;
txt = txt.replace(/<br>/g, "\n");
txt = txt.replace(/amp;/g, "");
txt = txt.replace(/&nbsp;/g, " ");
txt = txt.replace(/<[^>]+>(#[^<]+)[^>]+>/gi, "$1");
txt = txt.replace(/<img class="emoji_?c?s?s?" alt="([^\"]+)\"[^>]+>/gi, "$1");

var photoCount = 0;
var videoCount = 0;
var photo = [];
var video = [];

for(var i = 0; i < 10; i++){
    photo[i] = document.getElementsByClassName('page_post_thumb_wrap  image_cover')[i];
    if(photo[i] != null)
        if(photo[i].style != null){
            var temp;
            temp = photo[i].outerHTML.replace(/^[\s\S]+(https?:\/\/[\w\/.]+)[\s\S]+&quot;([\w\/\-]+)[\s\S]+$/i,"$1$2.jpg");
            if(isPhoto(temp) == true)
                photo[i] = temp;
            else
                photo[i] = false;
            photoCount++;
        }
    else break;
}

for(var i = 0; i < 10; i++){
    video[i] = document.getElementsByClassName('page_post_thumb_wrap  page_post_thumb_video fl_l')[i];
    if(video[i] != null)
        if(video[i].href != null){
            video[i] = video[i].href;
            videoCount++;
        }
    else break;
}

var str = txt + "\n";

for(var i = 0; i < photoCount; i++) {
    str = str + (photo[i] != false ? photo[i] + "\n" : "");
}
for(var i = 0; i < videoCount; i++)
    str = str + video[i] + "\n";

copy(str);