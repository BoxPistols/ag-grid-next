(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{2945:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bk_index",function(){return a(3310)}])},8045:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(6495).Z,n=a(2648).Z,i=a(1598).Z,s=a(7273).Z,o=i(a(7294)),l=n(a(5443)),c=a(2730),d=a(9309),u=a(9977);a(5086);var m=n(a(1479));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,a,n,i,s,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===a&&s(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,i=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let _=o.forwardRef((e,t)=>{var{imgAttributes:a,heightInt:n,widthInt:i,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:m,fill:f,placeholder:p,loading:h,srcString:_,config:x,unoptimized:v,loader:b,onLoadRef:j,onLoadingCompleteRef:w,setBlurComplete:y,setShowAltText:N,onLoad:E,onError:S}=e,C=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=m?"lazy":h,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},C,{loading:h,width:i,height:n,decoding:"async","data-nimg":f?"fill":"1",className:c,style:r({},d,u)},a,{ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,_,p,j,w,y,v))},[_,p,j,w,y,S,v,t]),onLoad:e=>{let t=e.currentTarget;g(t,_,p,j,w,y,v)},onError:e=>{N(!0),"blur"===p&&y(!0),S&&S(e)}})))}),x=o.forwardRef((e,t)=>{let a,n;var i,{src:g,sizes:x,unoptimized:v=!1,priority:b=!1,loading:j,className:w,quality:y,width:N,height:E,fill:S,style:C,onLoad:k,onLoadingComplete:z,placeholder:L="empty",blurDataURL:I,layout:R,objectFit:P,objectPosition:O,lazyBoundary:H,lazyRoot:M}=e,A=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=o.useContext(u.ImageConfigContext),D=o.useMemo(()=>{let e=f||F||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),a=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:a})},[F]),B=A,T=B.loader||m.default;delete B.loader;let G="__next_img_default"in T;if(G){if("custom"===D.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=T;T=t=>{let{config:a}=t,r=s(t,["config"]);return e(r)}}if(R){"fill"===R&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(C=r({},C,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!x&&(x=t)}let W="",q=h(N),V=h(E);if("object"==typeof(i=g)&&(p(i)||void 0!==i.src)){let e=p(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(a=e.blurWidth,n=e.blurHeight,I=I||e.blurDataURL,W=e.src,!S){if(q||V){if(q&&!V){let t=q/e.width;V=Math.round(e.height*t)}else if(!q&&V){let t=V/e.height;q=Math.round(e.width*t)}}else q=e.width,V=e.height}}let X=!b&&("lazy"===j||void 0===j);((g="string"==typeof g?g:W).startsWith("data:")||g.startsWith("blob:"))&&(v=!0,X=!1),D.unoptimized&&(v=!0),G&&g.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(v=!0);let[Z,U]=o.useState(!1),[J,Q]=o.useState(!1),Y=h(y),$=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:O}:{},J?{}:{color:"transparent"},C),K="blur"===L&&I&&!Z?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:q,heightInt:V,blurWidth:a,blurHeight:n,blurDataURL:I,objectFit:$.objectFit}),'")')}:{},ee=function(e){let{config:t,src:a,unoptimized:r,width:n,quality:i,sizes:s,loader:o}=e;if(r)return{src:a,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,a){let{deviceSizes:r,allSizes:n}=e;if(a){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(a);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let i=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:i,kind:"x"}}(t,n,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,r)=>"".concat(o({config:t,src:a,quality:i,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:o({config:t,src:a,quality:i,width:l[d]})}}({config:D,src:g,unoptimized:v,width:q,quality:Y,sizes:x,loader:T}),et=g,ea={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},er=o.useRef(k);o.useEffect(()=>{er.current=k},[k]);let en=o.useRef(z);o.useEffect(()=>{en.current=z},[z]);let ei=r({isLazy:X,imgAttributes:ee,heightInt:V,widthInt:q,qualityInt:Y,className:w,imgStyle:$,blurStyle:K,loading:j,config:D,fill:S,unoptimized:v,placeholder:L,loader:T,srcString:et,onLoadRef:er,onLoadingCompleteRef:en,setBlurComplete:U,setShowAltText:Q},B);return o.default.createElement(o.default.Fragment,null,o.default.createElement(_,Object.assign({},ei,{ref:t})),b?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ea))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:a,blurWidth:r,blurHeight:n,blurDataURL:i,objectFit:s}=e,o=r||t,l=n||a,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}},1479:function(e,t){"use strict";function a(e){let{config:t,src:a,width:r,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(a),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a.__next_img_default=!0,t.default=a},3310:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var r=a(5893),n=a(8322),i=a.n(n),s=a(9008),o=a.n(s),l=a(5675),c=a.n(l),d=a(8122),u=a.n(d);function m(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:u().main,children:[(0,r.jsxs)("div",{className:u().description,children:[(0,r.jsxs)("p",{children:["Get started by editing\xa0",(0,r.jsx)("code",{className:u().code,children:"pages/index.tsx"})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,r.jsx)(c(),{src:"/vercel.svg",alt:"Vercel Logo",className:u().vercelLogo,width:100,height:24,priority:!0})]})})]}),(0,r.jsxs)("div",{className:u().center,children:[(0,r.jsx)(c(),{className:u().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0}),(0,r.jsx)("div",{className:u().thirteen,children:(0,r.jsx)(c(),{src:"/thirteen.svg",alt:"13",width:40,height:31,priority:!0})})]}),(0,r.jsxs)("div",{className:u().grid,children:[(0,r.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsxs)("h2",{className:i().className,children:["Docs ",(0,r.jsx)("span",{children:"->"})]}),(0,r.jsx)("p",{className:i().className,children:"Find in-depth information about Next.js features and\xa0API."})]}),(0,r.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsxs)("h2",{className:i().className,children:["Learn ",(0,r.jsx)("span",{children:"->"})]}),(0,r.jsx)("p",{className:i().className,children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,r.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsxs)("h2",{className:i().className,children:["Templates ",(0,r.jsx)("span",{children:"->"})]}),(0,r.jsx)("p",{className:i().className,children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,r.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsxs)("h2",{className:i().className,children:["Deploy ",(0,r.jsx)("span",{children:"->"})]}),(0,r.jsx)("p",{className:i().className,children:"Instantly deploy your Next.js site to a shareable URL with\xa0Vercel."})]})]})]})]})}},8322:function(e){e.exports={style:{fontFamily:"'__Inter_4b5723', '__Inter_Fallback_4b5723'",fontStyle:"normal"},className:"__className_4b5723"}},8122:function(e){e.exports={main:"Home_main__nLjiQ",grid:"Home_grid__GxQ85",box:"Home_box__v3E2f",title:"Home_title__T09hD",head_1:"Home_head_1__c_7Mp",head_2:"Home_head_2__PjXma",description:"Home_description__41Owk",code:"Home_code__suPER",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",thirteen:"Home_thirteen__cMI_k",rotate:"Home_rotate____XsI",content:"Home_content__Zy02X",vercelLogo:"Home_vercelLogo__dtSk9"}},9008:function(e,t,a){e.exports=a(5443)},5675:function(e,t,a){e.exports=a(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2945)}),_N_E=e.O()}]);