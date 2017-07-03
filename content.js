
var width = window.innerWidth - document.documentElement.clientWidth;
var scroll_x = window.pageXOffset;
var scroll_y = window.pageYOffset;
var gframe = document.getElementById("game_frame");
//var cmain = gframe.contentDocument;
//var cmain = gframe.contentWindow.document.getElementById("contents_main");
//var canvas = cmain.contentWindow.document.getElementById("game_canvas");
var frame = gframe.getBoundingClientRect();
var left = frame.left;
var Top = frame.top;

var obj = {width, left, Top, scroll_x, scroll_y};
obj;

//chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//alert("content.js");
//	sendResponse("goodbye");
//	return true;
//});
 

//chrome.runtime.onMessage.addListener(function() {
//     $('body').css('background', '#f0f');
//
//console.log("コンテンツスクリプトからのログ");
//{);
//chrome.runtime.sendMessage({time: "abcde"},
//	function(response){
//	console.log("message sent");
//});
