"use strict";var precacheConfig=[["/apiary-react/index.html","66cb1365677d3255fd70fffb1925aa8f"],["/apiary-react/static/css/main.f15fc52f.css","2617b5b4754250d881e1dc0d02c2d0bf"],["/apiary-react/static/js/0.c2aa6690.chunk.js","34d2e0d8180c7b469d995b5ada8da23f"],["/apiary-react/static/js/main.eec0891a.js","dd0abcad2715996a44566a597aa1b214"],["/apiary-react/static/media/PR-boost.51fc7095.png","51fc70951824ea4a8d23d63586f1b75d"],["/apiary-react/static/media/Professionalism.7344531b.png","7344531b4b00d029db469fe046be139e"],["/apiary-react/static/media/SuisseIntl-Regular.f6ed51fe.ttf","f6ed51fe44815528fbae88d0dd24afde"],["/apiary-react/static/media/ant.6d38838d.png","6d38838d97c879f59dcf353df901ddc7"],["/apiary-react/static/media/checklist.991171ae.svg","991171ae8e2901abc66e396ecd1b031a"],["/apiary-react/static/media/dataAnalysis.afbcc4db.svg","afbcc4db720413ca3a91a0fc69df5252"],["/apiary-react/static/media/dataanalysis.199b4544.png","199b4544453747eb4d71efbcf7d6a14d"],["/apiary-react/static/media/datasci.68e28352.svg","68e28352d0f18ebbf6cfb10395fa6c68"],["/apiary-react/static/media/datascience.d387ff25.png","d387ff25d0ca100f27b5fc3caf7811b5"],["/apiary-react/static/media/experience.caefa598.png","caefa5986da83c92aa89d4fc363686e7"],["/apiary-react/static/media/hamburger_toggle_button.bc56151c.svg","bc56151c4a85fafc77046f126d48f8e9"],["/apiary-react/static/media/image18.dd5c0307.svg","dd5c030701b50801dc294f2482170080"],["/apiary-react/static/media/image19.1e7b47fc.svg","1e7b47fce215a37ce0b15398a1404fd4"],["/apiary-react/static/media/logo-y.2dab15bb.svg","2dab15bbf483ba19f4d4ec50ffcc01e0"],["/apiary-react/static/media/meditate-girl.741d5642.png","741d56420812c5fc085c05099a477a45"],["/apiary-react/static/media/peopleWithLaptop.624770bb.png","624770bba1583786a59475f4eaff37f2"],["/apiary-react/static/media/prim-u.502314cb.png","502314cb4308dc679fee37ab5d0093c7"],["/apiary-react/static/media/publicize.4f7d8066.png","4f7d806662dc5c46cd4524e523a0fd7d"],["/apiary-react/static/media/quality.dbb570d0.png","dbb570d04ccb32795949a5f87e8f268f"],["/apiary-react/static/media/question.bb77e985.svg","bb77e9857a7d8fe3e701ab3ed40eadc1"],["/apiary-react/static/media/resource-saving.525fba4f.png","525fba4fa20bc466b15bdb5c35630f03"],["/apiary-react/static/media/web-dev.f4c21977.png","f4c219774d51d882a5a642f5ab7ea583"],["/apiary-react/static/media/webdev.b581ddbd.svg","b581ddbdb7459774fd35100615af9e29"],["/apiary-react/static/media/work.a4e0dcee.svg","a4e0dcee7d38a6c7c3d8aabfb2b74971"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),c=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var c="/apiary-react/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});