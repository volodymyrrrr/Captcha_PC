!function(){var e=/^([\s\S]*?)<(b|code|em|i|span)>(.+?)<\/\2>([\s\S]*)$/,t=/^([\s\S]*?)<(input type="[^"]+")>(.*?)([\s\S]*)$/,n=/^input type=(['"])([a-z]+)\1$/,r=/^([\s\S]*?)<(a href=['"]https:\/\/[^'" <>]+['"])>(.+?)<\/a>([\s\S]*)$/,l=/^a href=(['"])(https:\/\/[^'"]+)\1$/,a=function(e){return-1!==e.indexOf("&")&&(e=e.replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&lsquo;/g,"‘").replace(/&rsquo;/g,"’")),document.createTextNode(e)},i=function(u,c){if(""!==u){if(-1===u.indexOf("<"))return c.appendChild(a(u));u=u.replace(/^<p>|<\/p>/g,"").replace(/<p>/g,"\n\n");var o=e.exec(u);if(null!==o||null!==(o=r.exec(u))||null!==(o=t.exec(u))){i(o[1],c);var p=function(e){var t,r;if(0===e.lastIndexOf("a ",0))return null===(t=l.exec(e))?null:((r=document.createElement("a")).setAttribute("href",t[2]),r);if(0===e.lastIndexOf("input ",0))return null===(t=n.exec(e))?null:((r=document.createElement("input")).setAttribute("type",t[2]),r);switch(e){case"b":return document.createElement("b");case"code":return document.createElement("code");case"em":return document.createElement("em");case"i":return document.createElement("i");case"span":return document.createElement("span")}}(o[2])||c;i(o[3],p),c.appendChild(p),i(o[4],c)}else c.appendChild(a(u))}};vAPI.i18n.render=function(e){var t,n,r,l,a,u=document,c=e||u;for(n=(t=c.querySelectorAll("[data-i18n]")).length,r=0;r<n;r++)l=t[r],(a=vAPI.i18n(l.getAttribute("data-i18n")))&&(-1!==a.indexOf("{")&&(a=a.replace(/\{\{input:([^}]+)\}\}/g,'<input type="$1">')),i(a,l));for(n=(t=c.querySelectorAll("[title]")).length,r=0;r<n;r++)l=t[r],(a=vAPI.i18n(l.getAttribute("title")))&&l.setAttribute("title",a);for(n=(t=c.querySelectorAll("[placeholder]")).length,r=0;r<n;r++)(l=t[r]).setAttribute("placeholder",vAPI.i18n(l.getAttribute("placeholder")));for(n=(t=c.querySelectorAll("[data-i18n-tip]")).length,r=0;r<n;r++)(l=t[r]).setAttribute("data-tip",vAPI.i18n(l.getAttribute("data-i18n-tip")).replace(/<br>/g,"\n").replace(/\n{3,}/g,"\n\n"))},vAPI.i18n.render(),vAPI.i18n.renderElapsedTimeToString=function(e){var t=(Date.now()-e)/6e4;return t<2?vAPI.i18n("elapsedOneMinuteAgo"):t<60?vAPI.i18n("elapsedManyMinutesAgo").replace("{{value}}",Math.floor(t).toLocaleString()):(t/=60)<2?vAPI.i18n("elapsedOneHourAgo"):t<24?vAPI.i18n("elapsedManyHoursAgo").replace("{{value}}",Math.floor(t).toLocaleString()):(t/=24)<2?vAPI.i18n("elapsedOneDayAgo"):vAPI.i18n("elapsedManyDaysAgo").replace("{{value}}",Math.floor(t).toLocaleString())}}();