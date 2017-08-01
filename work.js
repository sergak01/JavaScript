function MyFunc(){
    var textA = document.getElementsByClassName('dark video_upload_textarea video_upload_description');
    textA[0].value = "[club48928605|Мир Кино] - лучший паблик о кино. \n\n☝Заходи! Всегда есть, что посмотреть :) \n\nЕсли фильм изъят, ищите его тут [club90818758|Кино Империя]";
    var butt = document.getElementsByClassName('flat_button video_upload_ready_button');
    butt[0].onclick();
    VideoUpload.showBox();
    var count = document.getElementsByClassName("video_upload_item_panel");
    btn.textContent = "Добавить видеозапись " + count.length;
}
var li = document.getElementsByClassName("page_block_header_extra _header_extra");
var btn = document.createElement("BUTTON");
btn.id = "NewVideoScript";
btn.name = "NewVideo";
btn.classList.add('flat_button');
btn.style = "margin-right: 14px";
btn.addEventListener("click", MyFunc);
li[0].appendChild(btn);