/* Compression 2020-06-10 13:12:36 */ 
Cores.add("common/base64",function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(r&63|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(r&63|128))}return t},n=function(e){var t="",n=0,r=c1=c2=0;while(n<e.length)r=e.charCodeAt(n),r<128?(t+=String.fromCharCode(r),n++):r>191&&r<224?(c2=e.charCodeAt(n+1),t+=String.fromCharCode((r&31)<<6|c2&63),n+=2):(c2=e.charCodeAt(n+1),c3=e.charCodeAt(n+2),t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63),n+=3);return t};return{encoder:function(n,r){var i="",s,o,u,a,f,l,c,h=0;r=r||e,n=t(n);while(h<n.length)s=n.charCodeAt(h++),o=n.charCodeAt(h++),u=n.charCodeAt(h++),a=s>>2,f=(s&3)<<4|o>>4,l=(o&15)<<2|u>>6,c=u&63,isNaN(o)?l=c=64:isNaN(u)&&(c=64),i=i+r.charAt(a)+r.charAt(f)+r.charAt(l)+r.charAt(c);return i},decoder:function(t,r){r=r||e;var i="",s,o,u,a,f,l,c,h=0;t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(h<t.length)a=r.indexOf(t.charAt(h++)),f=r.indexOf(t.charAt(h++)),l=r.indexOf(t.charAt(h++)),c=r.indexOf(t.charAt(h++)),s=a<<2|f>>4,o=(f&15)<<4|l>>2,u=(l&3)<<6|c,i+=String.fromCharCode(s),l!=64&&(i+=String.fromCharCode(o)),c!=64&&(i+=String.fromCharCode(u));return i=n(i),i}}})