let recruitList = [
    // [変更頻度：中]
    // 新歓情報はここに記載する

    /*【サンプル】(これをコピーして使用する)

    {
        name: "イベント名等",
        date: "日時",
        place: "場所",
        fee: 参加費用(半角で入力), （無料の場合は0と入力すると料金のタブごと消える）
        description: "説明orメッセージ"　（ない場合は""のみ）
    },

    コピーここまで
    */


    // 文中で改行する際は "<br>" を用いること！！！

    /*
    {
        name: "新歓ブース",
        date: "4/1(月)～4/4(木)",
        place: "16号館ラウンジ",
        fee: 0,
        description: "気軽にお越しください！"
    },

    {
        name: "新歓説明会",
        date: "4/6(土), 4/11(木), 4/13(土)",
        place: "学生会館1階和室",
        fee: 0,
        description: "13:00の回,14:45の回,16:30の回があります。"
    },

    {
        name: "新歓コンパ",
        date: "4/20(土)",
        place: "高田馬場 土風炉",
        fee: 1500,
        description: "気軽にお越しください！"
    },
    
    {
        name: "新歓ハイク",
        date: "5/12(日)",
        place: "自由(詳細は参加者に連絡)",
        fee: "約1000",
        description: "別途食事会1000円"
    }
    */

    // 【重要】
    // 最後の項目の　"}"　の後には "," を付けない！！！！

];

function echoRecruitInfo(){
    let html = "";
    for(i=0; i<recruitList.length; i++){
        content = recruitList[i];
        html +=
        '\
        <div class="col-lg-6">\
            <div class="fuda">\
                <span class="cmn-head">'
                    + content.name +
                '</span>\
                <div class="cmn-content">\
                    <div class="row">\
                        <div class="col recruit-box">\
                            <div class="recruit-title">\
                                日時\
                            </div>\
                            <div class="recruit-content">'
                                + content.date +
                            '</div>\
                        </div>\
                        <div class="col recruit-box">\
                            <div class="recruit-title">\
                                場所\
                            </div>\
                            <div class="recruit-content">'
                                + content.place +
                            '</div>\
                        </div>';
                        if(content.fee){
                            html +=
                            '<div class="col recruit-box">\
                                <div class="recruit-title">\
                                    料金\
                                </div>';
                                if("未定" != content.fee){
                                    html +=
                                    '<div class="recruit-content">'
                                        + content.fee +　'円\
                                    </div>'
                                }
                                else{
                                    html +=
                                    '<div class="recruit-content">\
                                        未定\
                                    </div>'
                                }
                                html +=
                            '</div>';
                        }
                        html += '\
                    </div>\
                    <p class="recruit-sentence">'
                        + content.description +
                    '</p>\
                </div>\
            </div>\
        </div>\
        ';
    }
    document.write(html);
}