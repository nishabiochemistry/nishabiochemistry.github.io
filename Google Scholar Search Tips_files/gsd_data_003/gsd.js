(function(){if(typeof localStorage!="undefined"){var a=function(i){try{var i=i.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),c=RegExp("[\\?&]"+i+"=([^&#]*)").exec(window.location.href);return c==null?"":decodeURIComponent(c[1])}catch(a){}},b=decodeURIComponent(a("k")),h=decodeURIComponent(a("v")),e=decodeURIComponent(a("d"));b&&h?localStorage.setItem(b,h):b&&e&&top.postMessage(b,e);e&&(a=window.addEventListener?"addEventListener":"attachEvent",(0,window[a])(a=="attachEvent"?"onmessage":"message",function(a){try{if(a.origin==
e&&a.data){var c=a.data.split("^^^"),b,f;c.length>=2?(b=c[0],f=c[1].split(":::")):(b=null,f=c[0].split(":::"));if(f&&f.length>=2){var j=f[0],d=f[1];switch(j){case "get":var h=b+"^^^"+localStorage.getItem(d);top.postMessage(h,e);break;case "remove":localStorage.removeItem(j);break;case "increment":var g=localStorage.getItem(d);g?(g=parseInt(g),g++):g=1;localStorage.setItem(d,g);break;case "setifnull":var k=d.split("***");localStorage.getItem(k[0])==null&&localStorage.setItem(k[0],k[1]);break;case "getandremove":var l=
b+"^^^"+localStorage.getItem(d);top.postMessage(l,e);localStorage.removeItem(d);break;default:localStorage.setItem(j,d)}}}}catch(m){}},!1))}})();
