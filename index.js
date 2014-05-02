// 判断是否为移动端运行环境

// wukong.name 20130716

if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){

if(window.location.href.indexOf("?mobile")<0){

try{

if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){

// 判断访问环境是 Android|webOS|iPhone|iPod|BlackBerry 则加载以下样式

setActiveStyleSheet("style_mobile_a.css");

}

else if(/iPad/i.test(navigator.userAgent)){

// 判断访问环境是 iPad 则加载以下样式

setActiveStyleSheet("style_mobile_iPad.css");

}

else{

// 判断访问环境是 其他移动设备 则加载以下样式

setActiveStyleSheet("style_mobile_other.css");

}

}

catch(e){}

}

}

else{

// 如果以上都不是，则加载以下样式

setActiveStyleSheet("style_mobile_no.css");

}

// 判断完毕后加载样式

function setActiveStyleSheet(filename){document.write("＜link href="+filename+" rel=stylesheet＞");}
