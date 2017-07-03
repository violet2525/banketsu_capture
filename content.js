
var width = window.innerWidth - document.documentElement.clientWidth;
var scroll_x = window.pageXOffset;
var scroll_y = window.pageYOffset;
var gframe = document.getElementById("game_frame");
var frame = gframe.getBoundingClientRect();
var left = frame.left;
var Top = frame.top;

var obj = {width, left, Top, scroll_x, scroll_y};
obj;
