//タブ選択時
chrome.tabs.onSelectionChanged.addListener(function(tabid){
	chrome.tabs.get(tabid, function(tab){
		//domainの取得
		var url = tab.url;
		// changeIcon
		checkURL(url);
	});
});

//タブフォーカス時
chrome.windows.onFocusChanged.addListener(function(winid){
	chrome.tabs.getSelected(winid, function(tab){
		//domainの取得
  		var url = tab.url;
		// changeIcon
		checkURL(url);
	});
});

//URLチェック
function checkURL(url){
	if(url == "http://www.dmm.com/netgame/social/-/gadgets/=/app_id=486104/"){
		//ON
		chrome.browserAction.enable();
	}
	else{
		//OFF
		chrome.browserAction.disable();
	}
}

//アイコンクリック時
chrome.browserAction.onClicked.addListener(function(){
	main();
});

//メイン処理
function main(){
	var tab_left;
	var tab_top;
	var scroll;
	var scroll_x;
	var scroll_y;
	var scroll_bar;
	const img_w = 1024;
	const img_h = 576;
	chrome.tabs.getSelected(null, function(tab) {  
		chrome.tabs.executeScript(tab.id
			, {file: "content.js"}
			, function(results){
				scroll = results[0]
				console.log(scroll);
				tab_left = scroll.left;
				tab_top = scroll.Top;
				scroll_bar = scroll.width - 1;
				scroll_x = scroll.scroll_x;
				scroll_y = scroll.scroll_y;
				chrome.tabs.getCurrent(function(tab) {
		
				// キャプチャー取得
				chrome.tabs.captureVisibleTab({ format: 'png' }, function(dataUrl){
					var img = new Image();
					img.src = dataUrl;
			
					var cvs = document.createElement('canvas'); 
					cvs.id = "gamecanvas";
					cvs.width = img_w;
					cvs.height = img_h;
					document.body.appendChild(cvs);
			        	var ctx = cvs.getContext("2d");
			
					img.onload = function(){
						var tab_x = Math.ceil(tab_left + 128);	//マージン128px
						var tab_y = Math.ceil(tab_top + 35);	//マージン35px
						ctx.drawImage(img, tab_x, tab_y, img_w, img_h, 0, 0, img_w, img_h);
				
						var now = new Date();
						var y = now.getFullYear();
						var m = now.getMonth() + 1;
						var d = now.getDate();
						var w = now.getDay();
						var h = now.getHours();
						var mi = now.getMinutes();
						var s = now.getSeconds();
						var ms = now.getMilliseconds();
						var mm = ("0" + m).slice(-2);
						var dd = ("0" + d).slice(-2);
						var hh = ("0" + h).slice(-2);
						var mmi = ("0" + mi).slice(-2);
						var ss = ("0" + s).slice(-2);
						var mss = ("0" + ms).slice(-3);
						chrome.downloads.download({
							url: cvs.toDataURL()
						,	filename: "バンケツ_" + y + mm + dd + hh + mmi + ss + mss + ".png"
						,	conflictAction: "uniquify"
						,	saveAs: false
						},e => console.log(e));
					}
			
				});
			});
		});
	});
};
