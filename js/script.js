$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function (event) {
    $("#tab-contents .tab").hide();
    $("#tab-menu .active").removeClass('active');
    $(this).addClass('active');
    $($(this).attr('href')).show();
    evebt.preventDefault();
});

// $('#tab-contents .tab[id != "tab1"]').hide();
// $()関数では、特定の属性を持つ要素や属性値を絞り込むことができます。
// 特定の属性を持つ要素のみ取得したいときは、以下のように記述します。
// $('要素[属性]')
// 属性値が特定の値に等しい要素だけを取得したいときは、以下のように記述します。
// $('要素[属性 = "値"]')
// 今回は、初期設定で表示されるのはTAB1のコンテンツだけにして、それ以外の内容は非表示にしたいと思います。
// 属性値が特定の値に等しくない要素だけを取得したいときは、以下のように記述します。
// $('要素[属性 != "値"]')
// また、.hide();は、特定のHTML要素を非表示にするメソッドです。
// このため、$('#tab-contents .tab[id != "tab1"]').hide();と記述することで、id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示になります。

// $('#tab-menu a').on('click', function(event) {
//     // イベント発生時に行われる処理
//   });
//   ここでは、「id="tab-menu"のaタグがクリックされたときに、処理を実行してください」の意味になります。
  
//   $("#tab-contents .tab").hide();
//   id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示にしています。
  
//   $("#tab-menu .active").removeClass("active");
//   .removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッドです。
//   ここでは、activeが削除対象のクラスとして指定されています。
//   CSSの#tab-menu .activeの設定では、タブのクラスがactiveのときは背景色が白色／文字色が黒色になるように設定されています。
//   タブを切り替えるときは、このCSS設定もいったん削除しなければなりません。このため、.removeClass()にactiveクラスを指定しています。
  
//   $(this).addClass("active");
//   .addClass()は、任意のHTML要素にクラス属性を追加できるメソッドです。
//   ここでは、activeが追加対象のクラスとして指定されています。
//   どのときにactiveクラスが追加されるかというと、$(this)のとき、つまり、タブがクリックされたときです。
  
//   $($(this).attr("href")).show();
//   .attr()は、HTML要素の属性を取得したり設定できるメソッドです。
//   ここでは、href属性を取得するように指定しています。
//   さらに、.show()は要素を表示するメソッドなので、取得したhref属性の中身が表示されることになります。
//   どのときに表示されるかというと、$(this)のとき、つまり、タブがクリックされたときです。