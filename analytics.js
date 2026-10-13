(function(){
 'use strict';
 // Local/offline previews are excluded from the visitor statistics.
 if(location.protocol!=='https:'&&location.protocol!=='http:')return;
 if(window.exhibitionRedirecting)return;
 (function(m,e,t,r,i,k,a){
   m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for(var j=0;j<e.scripts.length;j++){if(e.scripts[j].src===r)return;}
   k=e.createElement(t);a=e.getElementsByTagName(t)[0];k.async=1;k.src=r;a.parentNode.insertBefore(k,a);
 })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=112282657','ym');
 ym(112282657,'init',{ssr:true,clickmap:false,webvisor:false,referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
})();
