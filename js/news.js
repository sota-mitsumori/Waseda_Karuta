let WhatsNewList = [
    // [変更頻度：中]
    // 新着情報はここに記載する
    // 上に書くほど最新の項目になる

    /* 【サンプル】(これをコピーして使用する)
 
    {
        date: "日付",
        content: "内容",
        url: "参照先リンクがあれば入力(なければこの1行は削除する)"
    },
    
    コピーここまで
    */

    // 文中で改行する際は "<br>" を用いること！！！

    // ここに追加していく

    {
        date: "2020.04.03",
        content: "新歓情報を更新しました！",
        url: "/pages/recruit/"
    },

    {
        date: "2020.04.03",
        content: "大会記録を更新しました！",
        url: "/pages/record/"
    },

    {
        date: "2019.03.03",
        content: "新歓情報を更新しました！",
        url: "/pages/recruit/"
    },

    {
        date: "2019.02.13",
        content: "早稲田大学かるた会春合宿スタート！<br>公式Twitterにて様子がご覧いただけます。",
    },

    {
        date: "2019.02.11",
        content: "大会記録を更新しました！",
        url: "/pages/record/"
    },

    {
        date: "2019.02.08",
        content: "早稲田大学かるた会サイトリニューアル！"
    } 

    // 【重要】
    // 最後の項目の　"}"　の後には "," を付けない！！！！

];

function echoNewcontent(){
    let html = "";
    for(i=0; i<WhatsNewList.length; i++){
        content = WhatsNewList[i];
        html +=
        '<div class="card">\
            <div class="card-body">\
                <h6 class="card-subtitle">' + content.date + '</h6>\
                <p class="card-text">' + content.content + '</p>'
            if(content.url){
                html +=
                '<a href="' + content.url + '" class="card-text" style="text-decoration: underline;">詳しくはこちら！</a>'
            }
            html +=
            '</div>\
        </div>';
    }
    document.write(html);
}