var url =location.search;
var kw = url.slice(4);
$.get('data/search.php?kw='+kw,function (response) {
    var html='';
    $.each(response,function (i,data) {
        html+=`
               <div class="items">
                <a href="detail.html?id=${data.pid}"><img src="${data.pimg}" alt=""></a>
                <div class="message">
                    <a href="detail.html?id=${data.pid}"><h3>${data.pname}</h3></a>
                    <p>影视歌全面发展的大型中国男团</p>
                    <p>【浅水湾艺术中心】</p>
                </div>
                <div class="items_r">
                    <span>预售</span>
                    <p><strong>${data.pprice}</strong>元起</p>
                    <a href="detail.html?id=${data.pid}">立即购买</a>
                </div>
            </div>
        `
    })
     $('.col-md-9').html(html);
})