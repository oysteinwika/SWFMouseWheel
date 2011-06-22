/**
* SWFMouseWheel v1.0 alpha4 
* http://oysteinwika.com/swfmousewheel/
* Copyright (c) 2007 Øystein Wika
*
* This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var sp=document.getElementsByTagName('script'),cs=sp[sp.length-1],qs=cs.src.replace(/^[^\?]+\??/,''),parameters=parse(qs);function parse(a){var b=new Object();if(!a)return b;var c=a.split(/[;&]/);for(var i=0;i<c.length;i++){var d=c[i].split('=');if(!d||d.length!=2)continue;var k=unescape(d[0]);var v=unescape(d[1]);v=v.replace(/\+/g,' ');b[k]=v}return b}var id=parameters['id'];var jsReady=false;function isReady(){return jsReady}function pageInit(){jsReady=true}function handler(a){if(a<0)sendToAS(a);else sendToAS(a)}function wheel(a){var b=0;if(!a)a=window.event;if(a.wheelDelta){b=a.wheelDelta/120;if(window.opera)b=b}else if(a.detail){b=-a.detail/3}if(b)handler(b);if(a.preventDefault)a.preventDefault();a.returnValue=false}if(window.addEventListener)window.addEventListener('DOMMouseScroll',wheel,false);window.onmousewheel=document.onmousewheel=wheel;function callMovie(a){if(navigator.appName.indexOf("Microsoft")!=-1){return window[a]}else{return document[a]}}function sendToAS(a){if(a>0)callMovie(id).jsdelta(1);else if(a<0)callMovie(id).jsdelta(-1)}