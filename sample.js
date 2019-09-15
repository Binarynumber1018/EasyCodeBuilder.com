// スクロールイベント
window.addEventListener( "scroll", function() {

  var headerElement = document.getElementById( "header" ) ; // `#header`セレクタを取得
  var rect = headerElement.getBoundingClientRect() ; // 
  var y = rect.top + window.pageYOffset ; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
  if (y > 0) { // 変数yの値が0よりも
    headerElement.classList.remove('hidden'); // 大きければhiddensセレクタを削除する
  } 
  else {
    headerElement.classList.add('hidden'); // そうでなければhiddensセレクタを追加する
      }

  if(1400 < y){
    headerElement.classList.remove('header2');//大きければヘッダーを黒くする
  }
  else{
    headerElement.classList.add('header2');//そうでなければヘッダーを白くする
  }
}
,function Scroll() {
  window.scrollBy( 0, 1500);
}
,function showAlert(){
  alert('gggggggggggggggggggggggggggggggggggg');
}
) ;