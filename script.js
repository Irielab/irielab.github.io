
//スクロール
$('#page-link a[href*="#"]').click(function () {
        var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        var pos = $(elmHash).offset().top;  //idの上部の距離を取得
        $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
        return false;
});

//先頭までスクロール
function PageTopAnime() {
var scroll = $(window).scrollTop();
if (scroll >= 400){//上から200pxスクロールしたら
    $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
    $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
}else{
    if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
    $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
    $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
    }
}
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});
// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});
// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

//文字が流れるように表示
function slideAnime(){
    //====左に動くアニメーションここから===
    $('.leftAnime').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        //左から右へ表示するクラスを付与
        //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
        $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    }else{
        //左から右へ表示するクラスを取り除く
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
    }
    });
}	
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述
// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// 浮き上がるような表示
function fadeAnime(){
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top-50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
        }
        else{
            $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
        }
    });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述
// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768){
    var responsiveImage = [//PC用の画像
        { src: 'images/home1.jpg'},
        { src: 'images/home6.jpg'},
        //{ src: 'images/home5.jpg'}
    ];
} else {
    var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: 'images/home1.jpg' },
        { src: 'images/home6.jpg' },
        //{ src: 'images/home5.jpg' }
    ];
}

//Vegas全体の設定

$('#slider').vegas({
overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
delay: 5000,//スライド間の遅延をミリ秒単位で。
animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
slides: responsiveImage,//画像設定を読む
//timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});

