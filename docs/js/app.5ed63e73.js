(function(e){function t(t){for(var s,i,o=t[0],c=t[1],l=t[2],m=0,d=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},r={app:0},n=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/lalu/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0108":function(e,t,a){},"123e":function(e,t,a){},1623:function(e,t,a){},"19ea":function(e,t,a){"use strict";a("f22a")},"1b14":function(e,t,a){"use strict";a("2367")},2367:function(e,t,a){},"25a8":function(e,t,a){},"27df":function(e,t,a){"use strict";a("0108")},"2bdc":function(e,t,a){"use strict";a("6f98")},4391:function(e,t,a){"use strict";a("ff5f")},"51f3":function(e,t,a){"use strict";a("123e")},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("7a23");function r(e,t){const a=Object(s["A"])("router-view");return Object(s["t"])(),Object(s["d"])(a)}a("51f3");var n=a("6b0d"),i=a.n(n);const o={},c=i()(o,[["render",r]]);var l=c,u=a("6c02");const m=Object(s["g"])("div",{class:"bg-[url('/assets/login/hero-1.png')] bg-cover bg-center"},null,-1),d={class:"bg-gradient-to-br from-black to-neutral-800 w-full min-h-screen flex flex-column flex-center justify-center"},b={class:"mx-auto flex flex-column items-center p-8"},g=Object(s["g"])("span",{class:"text-white block mb-2 text-lg"},"Nice to see you again!",-1),h=Object(s["g"])("span",{class:"block text-white mb-2 text-center"},"Username*",-1),p=Object(s["g"])("span",{class:"block text-xs mt-2 text-neutral-400 text-center mb-4"},"* Only for the demo purposes",-1);function O(e,t,a,r,n,i){const o=Object(s["A"])("Logo"),c=Object(s["A"])("PillButton");return Object(s["t"])(),Object(s["f"])("div",null,[Object(s["g"])("main",null,[m,Object(s["g"])("section",d,[Object(s["g"])("div",b,[Object(s["i"])(o,{class:"ml-6",width:"280"}),g,Object(s["g"])("form",{onSubmit:t[1]||(t[1]=Object(s["I"])((...e)=>i.simulateLogin&&i.simulateLogin(...e),["prevent"])),class:"w-72 my-8"},[h,Object(s["H"])(Object(s["g"])("input",{class:"appearance-none block w-full border rounded p-2 leading-tight focus:outline-none bg-transparent font-thin text-white","onUpdate:modelValue":t[0]||(t[0]=e=>this.username=e),required:""},null,512),[[s["E"],this.username]]),p,Object(s["i"])(c,{text:"Jump In!",onClick:i.simulateLogin,colorMode:"primary",class:"mt-2 py-2 w-full text-sm",type:"submit"},null,8,["onClick"])],32)])])])])}const f={src:"assets/laluLogo.png"};function j(e,t,a,r,n,i){return Object(s["t"])(),Object(s["f"])("img",f)}const v={PRIMARY:"#D72EC6",PRIMARY_LIGHTER:"#FF78F2",WHITE:"#FFFFFF"};function S(e){switch(e){case"primary":return{dark:v.PRIMARY,light:v.PRIMARY_LIGHTER};default:return{dark:e,light:e}}}var y={data(){return{primaryColor:v.PRIMARY_LIGHTER}}};const x=i()(y,[["render",j]]);var w=x;function A(e,t,a,r,n,i){return Object(s["t"])(),Object(s["f"])("button",{class:Object(s["o"])(["rounded-full bg-gradient-to-r text-white font-medium transition-transform hover:scale-105 duration-300 focus:outline-none focus:ring-1 focus:ring-white",`from-[${this.resolvedColorMode.dark}] to-[${this.resolvedColorMode.light}]`])},Object(s["C"])(a.text),3)}var k={props:["text","colorMode"],data(){const e=S(this.$props.colorMode);return{resolvedColorMode:e}}};const C=i()(k,[["render",A]]);var T=C;const P={class:"text-white uppercase font-semibold"};function B(e,t,a,r,n,i){return Object(s["t"])(),Object(s["f"])("h1",P,Object(s["C"])(a.text),1)}var _={props:["text"]};const I=i()(_,[["render",B]]);var R=I;const L=["src","alt","width","height"],M={class:"p-2 overflow-clip"},F={class:"text-sm text-white block truncate text-ellipsis"};function z(e,t,a,r,n,i){return Object(s["t"])(),Object(s["f"])("div",{onClick:t[0]||(t[0]=(...e)=>i.setSong&&i.setSong(...e)),class:Object(s["o"])(["bg-neutral-900 ronded rounded-2xl shrink-0 h-fit hover:shadow cursor-pointer select-none",`hover:shadow-[${n.shadowColor}] ${a.horizontal?"flex flex-row w-80 max-w-80 items-center max-w-[320px]":"w-44 max-w-[176px]"}`])},[Object(s["g"])("img",{src:n.fImgSrc,alt:a.name,class:Object(s["o"])(["rounded-2xl grow-0",""+(a.horizontal?"max-w-24 max-h-24":"w-100")]),width:a.horizontal?96:176,height:a.horizontal?96:176},null,10,L),Object(s["g"])("section",M,[Object(s["g"])("span",F,Object(s["C"])(a.name),1),Object(s["g"])("span",{class:Object(s["o"])(["text-xs block truncate text-ellipsis",`text-[${n.artistColor}]`])},Object(s["C"])(a.artist),3)])],2)}const $=[{id:10,name:"Panic Room",src:"Au_Ra & CamelPhat - Panic Room",artist:1,artists:"Au_Ra, Camelphat"},{id:11,name:"Without You Audio ft. Sandro Cavazza",src:"Avicii - Without You Audio ft. Sandro Cavazza",artist:3,artists:"Avicci, Sandro Cavazza"},{id:12,name:"Baian (Jack Back Remix)",src:"Barbatuques - Baian (Jack Back Remix)",artist:5,artists:"Barbatuques, Jack Back"},{id:13,name:"The Sign",src:"CamelPhat & Anyma - The Sign",artist:1,artists:"Camelphat, Anyma"},{id:14,name:"Breathe (ft. Jem Cooke)",src:"CamelPhat & Cristoph - Breathe (ft. Jem Cooke)",artist:1,artists:"Camelphat, Cristoph, Jem Cooke"},{id:15,name:"Cola",src:"Camelphat & Elderbrook - Cola",artist:1,artists:"Camelphat, Elderbrook"},{id:16,name:"For a Feeling",src:"CamelPhat x ARTBAT - For A Feeling (ft. Rhodes)",artist:1,artists:"Camelphat, ARTBAT, Rhodes"},{id:17,name:"Just a Little More Love (feat. Chris Willis) (Jack Back 2018 Remix)",src:"David Guetta - Just a Little More Love (feat. Chris Willis) (Jack Back 2018 Remix)",artist:5,artists:"David Guetta, Chriss Willis, Jack Back"},{id:18,name:"All For Love ft. Sandro Cavazza",src:"Felix Jaehn - All For Love ft. Sandro Cavazza",artist:3,artists:"Felix Jaehn, Sandro Cavazza"},{id:19,name:"Delilah (pull me out of this)",src:"Fred again.. - Delilah (pull me out of this)",artist:0,artists:"Fred again.."},{id:20,name:"Marea (We’ve Lost Dancing)",src:"Fred again.. feat. The Blessed Madonna - Marea (We’ve Lost Dancing)",artist:0,artists:"Fred again.., The Blessed Madonna"},{id:21,name:"Turn On The Lights again.. (feat. Future)",src:"Fred again.. x Swedish House Mafia - Turn On The Lights again.. (feat. Future)",artist:0,artists:"Fred again.., Swedish House Mafia, Future"},{id:22,name:"Baby again",src:"Fred again.., Skrillex, Four Tet - Baby again",artist:0,artists:"Fred again.., Skrillex, Four Tet"},{id:23,name:"(It Happens) Sometimes",src:"Jack Back - (It Happens) Sometimes",artist:5,artists:"Jack Back"},{id:24,name:"Survivor",src:"Jack Back - Survivor",artist:5,artists:"Jack Back"},{id:25,name:"Case Of The Ex feat. Mya Francis",src:"Jack Back & NFI - Case Of The Ex feat. Mya Francis",artist:5,artists:"Jack Back, NFI, Mya Francis"},{id:26,name:"Happy Now ft. Sandro Cavazza",src:"Kygo - Happy Now ft. Sandro Cavazza",artist:3,artists:"Kygo, Sandro Cavazza"},{id:27,name:"Forever Yours (Avicii Tribute)",src:"Kygo, Avicii, Sandro Cavazza - Forever Yours (Avicii Tribute)",artist:3,artists:"Kygo, Avicci, Sandro Cavazza"},{id:28,name:"I'll Wait",src:"Kygo, Sasha Alex Sloan - I'll Wait",artist:2,artists:"Kygo, Sasha Alex Sloan"},{id:29,name:"Lean On Me",src:"Sandro Cavazza - Lean On Me",artist:3,artists:"Sandro Cavazza"},{id:30,name:"Dancing With Your Ghost",src:"Sasha Alex Sloan - Dancing With Your Ghost",artist:2,artists:"Sasha Alex Sloan"},{id:31,name:"Is It Just Me ft. Charlie Puth",src:"Sasha Alex Sloan - Is It Just Me ft. Charlie Puth",artist:2,artists:"Sasha Alex Sloan, Charlie Puth"},{id:32,name:"Older",src:"Sasha Alex Sloan - Older",artist:2,artists:"Sasha Alex Sloan"},{id:33,name:"when was it over ft. Sam Hunt",src:"Sasha Alex Sloan - when was it over ft. Sam Hunt",artist:2,artists:"Sasha Alex Sloan, Sam Hunt"},{id:34,name:"Rumble",src:"Skrillex, Fred again.. & Flowdan - Rumble",artist:0,artists:"Skrillex, Fred again.., Flowdan"},{id:35,name:"Come Together",src:"The Beatles - Come Together",artist:4,artists:"The Beatles"},{id:36,name:"Here Comes The Sun",src:"The Beatles - Here Comes The Sun",artist:4,artists:"The Beatles"},{id:37,name:"Let It Be",src:"The Beatles - Let It Be",artist:4,artists:"The Beatles"},{id:38,name:"Twist And Shout",src:"The Beatles - Twist And Shout",artist:4,artists:"The Beatles"},{id:39,name:"Yesterday",src:"The Beatles - Yesterday",artist:4,artists:"The Beatles"}],H=$.filter(e=>[11,16,20,22,23,28,31,33,34,36,37,39].includes(e.id)),E=[{name:"Electronic Dance Music",number:18,duration:1.1,imgSrc:"/audio/Felix Jaehn - All For Love ft. Sandro Cavazza/img.jpg",songs:$.filter(e=>1===e.artist||0===e.artist||5===e.artist)},{name:"Best of: CamelPhat",number:6,duration:.3,imgSrc:"/images/artists/camelphat.jpg",songs:$.filter(e=>1===e.artist)},{name:"Acoustic",number:18,duration:1.3,imgSrc:"/audio/Sasha Alex Sloan - Is It Just Me ft. Charlie Puth/img.jpg",songs:$.filter(e=>2===e.artist||3===e.artist||4===e.artist)},{name:"Best of: Fred Again..",number:6,duration:.4,imgSrc:"/images/artists/fred_again...jpg",songs:$.filter(e=>0===e.artist)},{name:"Best of: Jack Back",number:6,duration:.4,imgSrc:"/images/artists/jack_back.jpg",songs:$.filter(e=>5===e.artist)},{name:"Best of: Sandro Cavazza",number:6,duration:.4,imgSrc:"/images/artists/sandro_cavazza.jpg",songs:$.filter(e=>3===e.artist)},{name:"Best of: Sasha Alex Sloan",number:6,duration:.3,imgSrc:"/images/artists/sasha_alex_sloan.jpg",songs:$.filter(e=>2===e.artist)},{name:"Best of: The Beatles",number:6,duration:.3,imgSrc:"/images/artists/the_beatles.jpg",songs:$.filter(e=>4===e.artist)}],J=[{id:0,name:"Fred Again..",imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/fred_again...jpg",description:"Fred describes his music as ‘Actual Life’, a trademark sound that features vocals uncovered from the unlikeliest of sources; from obscure YouTube clips to personal FaceTime conversations, random Instagram accounts and iPhone video footage of half-remembered nights out. The end results – often made on the move wherever Fred has his laptop – shift between dancefloor-inspired euphoria and yearning melancholy and you’ll hear the likes of The Blessed Madonna, Mr Eazi and Headie One among lesser known voices."},{id:1,name:"CamelPhat",imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/camelphat.jpg",description:"Grammy Nominated, Ivor Novello Nominated, Triple platinum selling Artists."},{id:2,name:"Sasha Alex Sloan",imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/sasha_alex_sloan.jpg",description:"life is a scam<3"},{id:3,name:"Sandro Cavazza",imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/sandro_cavazza.jpg",description:"Hailing from Sweden, Sandro Cavazza is a pop singer and songwriter who has made a name for himself collaborating with some of the biggest names in the electronic music scene. His songs & collaborations with Avicii, Kygo, and Lost Frequencies have garnered over 4 billion streams, making him a force to be reckoned with."},{id:4,name:"The Beatles",imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/the_beatles.jpg",description:"The Beatles recorded together for a little over seven years. Between October 1962 and May 1970, they released thirteen albums and a number of tracks issued on standalone singles. The catalogue created in that short period has sold more than that of any other group in history and its commercial success continues - the world’s best selling album during the first decade of the 21st century was a collection of The Beatles’ chart-topping singles called 1. But the group’s significance stems not just from huge sales figures. Their music has inspired generation upon generation of musicians, songwriters and producers. As Mark Ronson put it: ‘Everything we take for granted - they absolutely invented it.’ Tom Petty was a teenager during the years The Beatles’ records appeared in quick succession: ‘They were just out in front. There was The Beatles …and then there was everyone else. And everyone else could be great, but The Beatles were leading the way and that’s just irrefutably true.’"},{id:5,name:"Jack Back",imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/jack_back.jpg",description:'Jack Back has enabled EDM superstar David Guetta to revert to his roots in progressive house, fully explored with the full-length Jack Back Mixtape (2018).\n\n        The alias dates back to 2012, the year it was attributed to "Wild One Two" -- a collaboration with Nicky Romero and Sia -- and also became the name of a Guetta-operated subsidiary of Spinnin\' Records. Through 2017, the Jack Back label issued over a dozen singles, including several credited to Guetta by name, but the tag didn\'t reappear as a headlining artist name until September 2018, when Jack Back Mixtape became available for streaming and download. Presented as a DJ mix, the full-length was issued through Parlophone with singles such as "Pelican" and "Overtone" incorporated with previously unreleased material. ~ Andy Kellman, Rovi'}],N=[];for(let ws=0;ws<J.length;ws++){const e=J[ws];N.push({...e,songs:$.filter(t=>t.artist===e.id)})}var Y={props:["name","artist","src","horizontal","id"],data(){return{fImgSrc:`https://github.com/saacostam/lalu_fe/raw/master/public/audio/${this.$props["src"]}/img.jpg`||"https://picsum.photos/200",artistColor:v.PRIMARY_LIGHTER,shadowColor:v.PRIMARY}},methods:{setSong(){const e=[...$.filter(e=>e.id==this.$props["id"]),...$.filter(e=>e.id!=this.$props["id"])];this.$store.state.songQueue.setQueue(e)}}};const D=i()(Y,[["render",z]]);var G=D;const U={class:"flex flex-row overflow-x-auto p-1 pb-3"};function q(e,t,a,r,n,i){const o=Object(s["A"])("SongCard");return Object(s["t"])(),Object(s["f"])("section",U,[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(a.songs,e=>(Object(s["t"])(),Object(s["d"])(o,{name:e.name,artist:e.artists,imgSrc:e.imgSrc,src:e.src,id:e.id,class:"mr-8"},null,8,["name","artist","imgSrc","src","id"]))),256))])}var Q={components:{SongCard:G},props:["songs"]};const W=i()(Q,[["render",q]]);var K=W;const V=["src","alt"],X={class:"p-2"},Z={class:"text-sm text-white block text-center"};function ee(e,t,a,r,n,i){const o=Object(s["A"])("router-link");return Object(s["t"])(),Object(s["d"])(o,{class:"w-48 shrink-0 cursor-pointer hover:no-underline select-none",to:"/app/artist/"+a.name},{default:Object(s["G"])(()=>[Object(s["g"])("img",{src:n.fImgSrc,class:Object(s["o"])(["w-100 rounded-full hover:shadow hover:bg-neutral-900",`hover:shadow-[${n.shadowColor}]`]),alt:a.name,width:"112",height:"112"},null,10,V),Object(s["g"])("section",X,[Object(s["g"])("span",Z,Object(s["C"])(a.name),1)])]),_:1},8,["to"])}var te={props:["name","imgSrc","src"],data(){return{fImgSrc:this.$props["imgSrc"]||"https://picsum.photos/120",shadowColor:v.PRIMARY}}};const ae=i()(te,[["render",ee]]);var se=ae;const re={class:"flex flex-row overflow-x-auto pb-3"};function ne(e,t,a,r,n,i){const o=Object(s["A"])("ArtistBlob");return Object(s["t"])(),Object(s["f"])("section",re,[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(a.artists,e=>(Object(s["t"])(),Object(s["d"])(o,{name:e.name,imgSrc:e.imgSrc,src:e.src,class:"mr-8"},null,8,["name","imgSrc","src"]))),256))])}var ie={components:{ArtistBlob:se},props:["artists"]};const oe=i()(ie,[["render",ne]]);var ce=oe;const le=["src","alt"],ue={class:"grow p-3 relative"},me={class:"text-white font-semibold text-md block"},de={class:"text-white text-sm font-semibold"};function be(e,t,a,r,n,i){const o=Object(s["A"])("router-link");return Object(s["t"])(),Object(s["d"])(o,{class:Object(s["o"])(["h-28 w-100 bg-neutral-900 ronded rounded-2xl shrink-0 grow-0 hover:shadow cursor-pointer select-none flex flex-row select-none hover:no-underline select-none",`hover:shadow-[${n.primaryColor}]`]),to:"/app/playlist/"+a.name},{default:Object(s["G"])(()=>[Object(s["g"])("img",{src:n.fImgSrc,alt:a.name,class:"ronded rounded-2xl",width:"112",height:"112"},null,8,le),Object(s["g"])("div",ue,[Object(s["g"])("span",me,Object(s["C"])(a.name),1),Object(s["g"])("span",de,Object(s["C"])(a.number)+" "+Object(s["C"])(a.number>1?"songs":"song"),1),Object(s["g"])("span",{class:Object(s["o"])(["absolute text-sm font-semibold bottom-2 right-3",`text-[${n.primaryColor}]`])},Object(s["C"])(a.duration)+" "+Object(s["C"])(1!=a.duration?"hours":"hour"),3)])]),_:1},8,["class","to"])}var ge={props:["name","number","duration","imgSrc","src"],data(){return{fImgSrc:this.$props["imgSrc"]||"https://picsum.photos/200",primaryColor:v.PRIMARY}}};const he=i()(ge,[["render",be]]);var pe=he;function Oe(e,t,a,r,n,i){const o=Object(s["A"])("PlaylistPrevCard");return Object(s["t"])(),Object(s["f"])("section",{class:Object(s["o"])(["flex flex-row flex-wrap",n.commonContainerClass])},[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(a.playlists,e=>(Object(s["t"])(),Object(s["d"])(o,{name:e.name,number:e.number,duration:e.duration,imgSrc:e.imgSrc,src:e.src},null,8,["name","number","duration","imgSrc","src"]))),256))],2)}var fe={props:["playlists"],components:{PlaylistPrevCard:pe},data(){return{commonContainerClass:"grid grid-cols-1 lg:grid-cols-2 gap-8"}}};const je=i()(fe,[["render",Oe]]);var ve=je;const Se={class:"flex flex-row items-center p-1 pb-3"},ye={class:"flex flex-column overflow-x-auto h-fit"},xe={class:"flex flex-row overflow-x-auto h-fit"};function we(e,t,a,r,n,i){const o=Object(s["A"])("ArtistBlob"),c=Object(s["A"])("SongCard");return Object(s["t"])(),Object(s["f"])("section",Se,[Object(s["i"])(o,{name:a.name,imgSrc:a.imgSrc,class:"ml-8 mr-20"},null,8,["name","imgSrc"]),Object(s["g"])("div",ye,[Object(s["g"])("div",xe,[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(a.songs,e=>(Object(s["t"])(),Object(s["d"])(c,{name:e.name,artist:e.artists,src:e.src,horizontal:!0,id:e.id,class:"mr-8 mb-3"},null,8,["name","artist","src","id"]))),256))])])])}var Ae={components:{ArtistBlob:se,SongCard:G},props:["name","imgSrc","songs"]};const ke=i()(Ae,[["render",we]]);var Ce=ke;const Te=e=>(Object(s["w"])("data-v-bb5568d8"),e=e(),Object(s["u"])(),e),Pe={class:"relative h-40 mx-auto rounded-3xl bg-[center_right_20rem] mt-16"},Be=Te(()=>Object(s["g"])("img",{src:"/images/common/sound-wave.png",class:"absolute -top-[8.5rem] right-0 w-80"},null,-1)),_e={class:"text-white absolute top-1/2 left-16 text-5xl"},Ie=Object(s["h"])("Hi "),Re={class:"font-semibold"},Le=Object(s["h"])("!");function Me(e,t){return Object(s["t"])(),Object(s["f"])("section",Pe,[Be,Object(s["g"])("span",_e,[Ie,Object(s["g"])("span",Re,Object(s["C"])(this.$store.state.username),1),Le])])}a("19ea");const Fe={},ze=i()(Fe,[["render",Me],["__scopeId","data-v-bb5568d8"]]);var $e=ze;const He=e=>(Object(s["w"])("data-v-199385b4"),e=e(),Object(s["u"])(),e),Ee={class:"relative h-40 mx-auto rounded-3xl bg-[center_right_20rem] mt-16"},Je=He(()=>Object(s["g"])("img",{src:"/images/common/sound-wave.png",class:"absolute -top-[8.5rem] right-0 w-80"},null,-1)),Ne=He(()=>Object(s["g"])("span",{class:"text-white absolute top-1/2 left-10 text-5xl font-semibold"},"Artists",-1)),Ye=[Je,Ne];function De(e,t,a,r,n,i){return Object(s["t"])(),Object(s["f"])("section",Ee,Ye)}var Ge={};a("27df");const Ue=i()(Ge,[["render",De],["__scopeId","data-v-199385b4"]]);var qe=Ue;const Qe={class:"bg-neutral-900 ronded rounded-2xl flex flex-row items-center p-8"},We=["src","alt"],Ke={class:"pl-8 overflow-x-clip"},Ve={class:"text-white font-semibold uppercase truncate text-ellipsis border-solid border-b-4 py-2.5 text-lg mb-4"},Xe={class:"text-white"};function Ze(e,t,a,r,n,i){return Object(s["t"])(),Object(s["f"])("section",Qe,[Object(s["g"])("img",{src:n.fImgSrc,alt:a.name,class:"w-64 h-64 rounded-full",width:"256",height:"256"},null,8,We),Object(s["g"])("section",Ke,[Object(s["g"])("h1",Ve,Object(s["C"])(a.name),1),Object(s["g"])("p",Xe,Object(s["C"])(a.description),1)])])}var et={name:"Artist Banner",props:["name","description","imgSrc"],data(){return{fImgSrc:this.$props["imgSrc"]||"https://picsum.photos/256"}}};const tt=i()(et,[["render",Ze]]);var at=tt;const st=e=>(Object(s["w"])("data-v-7fa21ffa"),e=e(),Object(s["u"])(),e),rt={class:"relative h-40 mx-auto rounded-3xl bg-[center_right_20rem] mt-16"},nt=st(()=>Object(s["g"])("img",{src:"/images/common/sound-wave.png",class:"absolute -top-[8.5rem] right-0 w-80"},null,-1)),it={class:"text-white absolute top-1/2 left-10 text-5xl font-semibold"};function ot(e,t,a,r,n,i){return Object(s["t"])(),Object(s["f"])("section",rt,[nt,Object(s["g"])("span",it,Object(s["C"])(a.name),1)])}var ct={props:["name"]};a("9814");const lt=i()(ct,[["render",ot],["__scopeId","data-v-7fa21ffa"]]);var ut=lt,mt={name:"Landing",components:{Logo:w,PillButton:T},data(){const e=localStorage.getItem("username");return{username:e||"",primaryColor:v.PRIMARY}},methods:{simulateLogin(){localStorage.setItem("username",this.username),this.$router.push("/app")}}};const dt=i()(mt,[["render",O]]);var bt=dt;const gt={class:"auth"},ht={class:"non-player-content"},pt={class:"view-router-content"};function Ot(e,t,a,r,n,i){const o=Object(s["A"])("NavBar"),c=Object(s["A"])("SearchBar"),l=Object(s["A"])("router-view"),u=Object(s["A"])("MusicPlayer");return Object(s["t"])(),Object(s["f"])("div",gt,[Object(s["g"])("div",ht,[Object(s["i"])(o,{id:"navbar"}),Object(s["g"])("div",pt,[Object(s["i"])(c,{id:"search-bar"}),Object(s["i"])(l,{class:"nested-view px-12 py-8"})])]),Object(s["i"])(u,{id:"music-player"})])}const ft=e=>(Object(s["w"])("data-v-1c4e1616"),e=e(),Object(s["u"])(),e),jt={class:"nav-bar"},vt={class:"nav-container"},St=ft(()=>Object(s["g"])("div",{class:"nav-header"},[Object(s["g"])("img",{src:"https://picsum.photos/450",alt:"Avatar"})],-1)),yt={class:"nav-main"},xt={class:"mx-auto"},wt=["src"],At=ft(()=>Object(s["g"])("span",null,"Home",-1)),kt=["src"],Ct=ft(()=>Object(s["g"])("span",null,"Library",-1)),Tt=["src"],Pt=ft(()=>Object(s["g"])("span",null,"Artists",-1)),Bt=ft(()=>Object(s["g"])("div",{class:"nav-footer"},[Object(s["g"])("img",{src:"/images/lalu_logo 2.png",alt:"Lalu_logo"})],-1));function _t(e,t,a,r,n,i){const o=Object(s["A"])("router-link");return Object(s["t"])(),Object(s["f"])("div",jt,[Object(s["g"])("div",vt,[St,Object(s["g"])("div",yt,[Object(s["g"])("nav",null,[Object(s["g"])("ul",xt,[Object(s["g"])("li",null,[Object(s["i"])(o,{class:Object(s["o"])(["home-menu",{active:"Home"===e.$route.name}]),to:{path:"/app/home"}},{default:Object(s["G"])(()=>[Object(s["g"])("img",{src:`/icons/home (${"Home"===e.$route.name?1:0}).png`,alt:"Home-icon",class:"d-inline"},null,8,wt),At]),_:1},8,["class"])]),Object(s["g"])("li",null,[Object(s["i"])(o,{class:Object(s["o"])(["library-menu",{active:"Library"===e.$route.name||"Playlist"===e.$route.name}]),to:{path:"/app/library"}},{default:Object(s["G"])(()=>[Object(s["g"])("img",{src:`/icons/library(${"Library"===e.$route.name||"Playlist"===e.$route.name?1:0}).png`,alt:"Library-icon",class:"d-inline"},null,8,kt),Ct]),_:1},8,["class"])]),Object(s["g"])("li",null,[Object(s["i"])(o,{class:Object(s["o"])(["artist-menu",{active:"Artists"===e.$route.name||"Artist"===e.$route.name}]),to:{path:"/app/artists"}},{default:Object(s["G"])(()=>[Object(s["g"])("img",{src:`/icons/artist(${"Artists"===e.$route.name||"Artist"===e.$route.name?1:0}).png`,alt:"artist-icon",class:"d-inline"},null,8,Tt),Pt]),_:1},8,["class"])])])])]),Bt])])}var It={name:"NavBar",data:()=>({})};a("c30e");const Rt=i()(It,[["render",_t],["__scopeId","data-v-1c4e1616"]]);var Lt=Rt;const Mt=e=>(Object(s["w"])("data-v-73710962"),e=e(),Object(s["u"])(),e),Ft={class:"music-player"},zt=["max"],$t=["src"],Ht={class:"time time-elapsed"},Et={class:"time time-left"},Jt={class:"row"},Nt={class:"volume-control col-md-4 col-4"},Yt=Mt(()=>Object(s["g"])("i",{class:"bi bi-volume-down d-none d-md-block"},null,-1)),Dt=Mt(()=>Object(s["g"])("i",{class:"bi bi-volume-up"},null,-1)),Gt={class:"panel col-md-4 col-5"},Ut=Mt(()=>Object(s["g"])("i",{class:"bi bi-skip-start"},null,-1)),qt=[Ut],Qt=Mt(()=>Object(s["g"])("i",{class:"bi bi-play"},null,-1)),Wt=[Qt],Kt=Mt(()=>Object(s["g"])("i",{class:"bi bi-pause"},null,-1)),Vt=[Kt],Xt=Mt(()=>Object(s["g"])("i",{class:"bi bi-skip-end"},null,-1)),Zt=[Xt],ea={key:0,class:"info col-md-4 col-3"},ta={class:"info-table d-none d-md-block"},aa={class:"title truncate text-ellipsis w-32"},sa={class:"artist truncate text-ellipsis w-32"},ra={class:"date"},na={class:"wrapper-like"},ia={class:"like"},oa=Mt(()=>Object(s["g"])("i",{class:"bi bi-heart-fill"},null,-1)),ca={class:"n-likes"};function la(e,t,a,r,n,i){return Object(s["t"])(),Object(s["f"])("div",Ft,[Object(s["H"])(Object(s["g"])("input",{type:"range",id:"progress","onUpdate:modelValue":t[0]||(t[0]=e=>this.currentTime=e),min:"0",max:this.totalTime,style:Object(s["p"])(`background-size: ${100*this.currentTime/this.totalTime}% 100%;`)},null,12,zt),[[s["E"],this.currentTime]]),Object(s["g"])("audio",{id:"audio",src:`https://github.com/saacostam/lalu_fe/raw/master/public/audio/${this.$store.state.songQueue.getCurrentSong().src}/audio.mp3`},null,8,$t),Object(s["g"])("span",Ht,Object(s["C"])(i.formatTime(this.currentTime)),1),Object(s["g"])("span",Et,"-"+Object(s["C"])(i.formatTime(this.totalTime-this.currentTime)),1),Object(s["g"])("div",Jt,[Object(s["g"])("div",Nt,[Yt,Object(s["H"])(Object(s["g"])("input",{type:"range",id:"volume","onUpdate:modelValue":t[1]||(t[1]=e=>this.volume=e),min:"0",max:100,style:Object(s["p"])(`background-size: ${100*this.volume/100}% 100%;`)},null,4),[[s["E"],this.volume]]),Dt]),Object(s["g"])("div",Gt,[Object(s["g"])("a",{class:"control strategy",onClick:t[2]||(t[2]=(...e)=>i.toggleShuffle&&i.toggleShuffle(...e))},[Object(s["g"])("i",{class:Object(s["o"])([{active:"shuffle"===this.strategy},"bi bi-shuffle"])},null,2)]),Object(s["g"])("a",{class:"control",onClick:t[3]||(t[3]=e=>this.$store.state.songQueue.prev())},qt),0==this.isPlaying?(Object(s["t"])(),Object(s["f"])("a",{key:0,class:"control play-control",onClick:t[4]||(t[4]=(...e)=>i.play&&i.play(...e))},Wt)):(Object(s["t"])(),Object(s["f"])("a",{key:1,class:"control play-control",onClick:t[5]||(t[5]=(...e)=>i.pause&&i.pause(...e))},Vt)),Object(s["g"])("a",{class:"control",onClick:t[6]||(t[6]=e=>this.$store.state.songQueue.next())},Zt),Object(s["g"])("a",{class:"control strategy",onClick:t[7]||(t[7]=(...e)=>i.toggleRepeat&&i.toggleRepeat(...e))},[Object(s["g"])("i",{class:Object(s["o"])([{active:"repeat"===this.strategy},"bi bi-arrow-repeat"])},null,2)])]),this.$store.state.songQueue.getCurrentSong()?(Object(s["t"])(),Object(s["f"])("div",ea,[Object(s["g"])("div",{class:"image d-none d-md-block",style:Object(s["p"])(`background-image:url('/audio/${this.$store.state.songQueue.getCurrentSong().src}/img.jpg');`)},null,4),Object(s["g"])("div",ta,[Object(s["g"])("span",aa,Object(s["C"])(this.$store.state.songQueue.getCurrentSong().name),1),Object(s["g"])("span",sa,Object(s["C"])(this.$store.state.songQueue.getCurrentSong().artists),1),Object(s["g"])("span",ra,Object(s["C"])(this.date),1)]),Object(s["g"])("div",na,[Object(s["g"])("a",ia,[oa,Object(s["g"])("span",ca,Object(s["C"])(this.likes),1)])])])):Object(s["e"])("",!0)])])}var ua={name:"MusicPlayer",data(){return{currentTime:0,totalTime:0,volume:50,src:"",isPlaying:!1,strategy:"order",date:2022,likes:"0"}},mounted(){const e=document.getElementById("audio");e.addEventListener("ended",()=>{e.pause()}),e.addEventListener("ended",()=>{this.$store.state.songQueue.next()}),e.addEventListener("abort",()=>{e.play()}),e.addEventListener("timeupdate",()=>{this.currentTime=e.currentTime}),e.addEventListener("canplay",()=>{e.play()}),e.addEventListener("durationchange",()=>{this.totalTime=e.duration}),e.addEventListener("play",()=>{this.isPlaying=!0}),e.addEventListener("pause",()=>{this.isPlaying=!1});const t=document.getElementById("progress");t.addEventListener("input",t=>{e.currentTime=t.target.value})},watch:{volume:function(e){const t=document.getElementById("audio");t.volume=e/100}},methods:{play(){const e=document.getElementById("audio");e.play()},pause(){const e=document.getElementById("audio");e.pause()},toggleShuffle(){"shuffle"===this.strategy?this.strategy="linear":this.strategy="shuffle"},toggleRepeat(){"repeat"===this.strategy?this.strategy="linear":this.strategy="repeat"},formatTime(e){const t=parseInt(e,10);let a=Math.floor(t/3600),s=Math.floor((t-3600*a)/60),r=t-3600*a-60*s;return a<10&&(a="0"+a),s<10&&(s="0"+s),r<10&&(r="0"+r),"00"!==a?a+":"+s+":"+r:s+":"+r}}};a("1b14");const ma=i()(ua,[["render",la],["__scopeId","data-v-73710962"]]);var da=ma;const ba=e=>(Object(s["w"])("data-v-7771abc0"),e=e(),Object(s["u"])(),e),ga={class:"sb"},ha={class:"search-bar-container"},pa={class:"search-bar"},Oa=ba(()=>Object(s["g"])("img",{src:"/icons/musical-note-menu.png",alt:"search-icon",style:{width:"25px",height:"25px"}},null,-1)),fa=ba(()=>Object(s["g"])("input",{id:"sb-input",type:"text",placeholder:"Search..."},null,-1)),ja=ba(()=>Object(s["g"])("img",{src:"/icons/settings.png",alt:"settings-icon",style:{width:"30px",height:"30px"}},null,-1)),va=ba(()=>Object(s["g"])("i",{class:"bi bi-box-arrow-right",style:{color:"white","font-size":"1.4em"}},null,-1)),Sa=[va];function ya(e,t,a,r,n,i){return Object(s["t"])(),Object(s["f"])("div",ga,[Object(s["g"])("div",ha,[Object(s["g"])("span",pa,[Oa,fa,ja,Object(s["g"])("button",{class:"btn",style:{margin:"0",padding:"0"},onClick:t[0]||(t[0]=(...e)=>i.logOut&&i.logOut(...e))},Sa)])])])}var xa={name:"SearchBar",data:()=>({}),methods:{logOut(){localStorage.removeItem("token"),localStorage.removeItem("username"),this.$router.push({path:"/"})}}};a("4391");const wa=i()(xa,[["render",ya],["__scopeId","data-v-7771abc0"]]);var Aa=wa,ka={name:"Auth",components:{NavBar:Lt,MusicPlayer:da,SearchBar:Aa},data(){return this.$store.state.username=localStorage.getItem("username")||"Friend",{}}};a("2bdc");const Ca=i()(ka,[["render",Ot],["__scopeId","data-v-57bf5db0"]]);var Ta=Ca;const Pa={class:"not-found"},Ba=Object(s["g"])("p",null,"not found",-1),_a=[Ba];function Ia(e,t,a,r,n,i){return Object(s["t"])(),Object(s["f"])("div",Pa,_a)}var Ra={name:"NotFound",created(){localStorage.getItem("username")?this.$router.push({path:"/app"}):this.$router.push({path:"/"})}};const La=i()(Ra,[["render",Ia]]);var Ma=La;const Fa={class:"not-found"},za=Object(s["g"])("p",null,"not found",-1),$a=[za];function Ha(e,t,a,r,n,i){return Object(s["t"])(),Object(s["f"])("div",Fa,$a)}var Ea={name:"AppNotFound",created(){this.$router.push({path:"/app/home"})}};const Ja=i()(Ea,[["render",Ha]]);var Na=Ja;function Ya(e,t,a,r,n,i){const o=Object(s["A"])("HomeMessage"),c=Object(s["A"])("Header"),l=Object(s["A"])("SongDeck"),u=Object(s["A"])("ArtistDeck");return Object(s["t"])(),Object(s["f"])("main",null,[Object(s["i"])(o),Object(s["i"])(c,{text:"POPULAR SONGS",class:"my-4"}),Object(s["i"])(l,{songs:n.POPULAR_SONGS},null,8,["songs"]),Object(s["i"])(c,{text:"POPULAR ARTISTS",class:"my-4"}),Object(s["i"])(u,{artists:n.ARTISTS},null,8,["artists"])])}var Da={components:{HomeMessage:$e,Header:R,SongDeck:K,ArtistDeck:ce},name:"Home",data(){return{POPULAR_SONGS:H,ARTISTS:J}}};const Ga=i()(Da,[["render",Ya]]);var Ua=Ga;function qa(e,t,a,r,n,i){const o=Object(s["A"])("Header"),c=Object(s["A"])("SongDeck"),l=Object(s["A"])("PlaylistPrev");return Object(s["t"])(),Object(s["f"])("main",null,[Object(s["i"])(o,{text:"Recently Heard [10]",class:"mb-4"}),Object(s["i"])(c,{songs:n.POPULAR_SONGS},null,8,["songs"]),Object(s["i"])(o,{text:"Library",class:"my-4"}),Object(s["i"])(l,{playlists:n.MY_PLAYLISTS},null,8,["playlists"])])}var Qa={name:"Library",components:{Header:R,SongDeck:K,PlaylistPrev:ve},data(){return{POPULAR_SONGS:H,MY_PLAYLISTS:E}}};const Wa=i()(Qa,[["render",qa]]);var Ka=Wa;const Va=e=>(Object(s["w"])("data-v-5bc12f47"),e=e(),Object(s["u"])(),e),Xa={class:"my-likes"},Za=Va(()=>Object(s["g"])("h3",null,"My Likes",-1)),es=[Za];function ts(e,t,a,r,n,i){return Object(s["t"])(),Object(s["f"])("div",Xa,es)}var as={name:"MyLikes"};a("a949");const ss=i()(as,[["render",ts],["__scopeId","data-v-5bc12f47"]]);var rs=ss;function ns(e,t,a,r,n,i){const o=Object(s["A"])("PlaylistHeader"),c=Object(s["A"])("SongDeck");return Object(s["t"])(),Object(s["f"])("section",null,[Object(s["i"])(o,{name:n.PLAYLIST.name,class:"mb-8"},null,8,["name"]),Object(s["i"])(c,{songs:n.PLAYLIST.songs},null,8,["songs"])])}var is={name:"Playlist",components:{PlaylistHeader:ut,SongDeck:K},data(){return{PLAYLIST:{name:"",imgSrc:"",songs:[]}}},mounted(){const e=E.find(e=>e.name===this.$route.params["name"]);e?this.PLAYLIST=e:this.$router.push("/app/home")}};const os=i()(is,[["render",ns]]);var cs=os;function ls(e,t,a,r,n,i){const o=Object(s["A"])("ArtistBanner"),c=Object(s["A"])("Header"),l=Object(s["A"])("SongDeck");return Object(s["t"])(),Object(s["f"])("main",null,[Object(s["i"])(o,{name:n.CURRENT_ARTIST.name,imgSrc:n.CURRENT_ARTIST.imgSrc,description:n.CURRENT_ARTIST.description},null,8,["name","imgSrc","description"]),Object(s["i"])(c,{text:"Songs",class:"my-4"}),Object(s["i"])(l,{songs:n.CURRENT_ARTIST.songs,class:"justify-center"},null,8,["songs"])])}var us={name:"Artist",components:{Header:R,ArtistBanner:at,SongDeck:K},data(){const e=N.find(e=>e.name===this.$route.params["name"]);return e||this.$router.push("/app/home"),{CURRENT_ARTIST:e}}};const ms=i()(us,[["render",ls]]);var ds=ms;function bs(e,t,a,r,n,i){const o=Object(s["A"])("ArtistsHeader"),c=Object(s["A"])("Header"),l=Object(s["A"])("PopularArtist");return Object(s["t"])(),Object(s["f"])("main",null,[Object(s["i"])(o),Object(s["i"])(c,{text:"Popular Artists Right Now",class:"my-6 mb-12"}),(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(n.POPULAR_ARTISTS_AND_SONGS,e=>(Object(s["t"])(),Object(s["d"])(l,{name:e.name,imgSrc:e.imgSrc,songs:e.songs,class:"mb-8"},null,8,["name","imgSrc","songs"]))),256))])}var gs={name:"Artists",components:{ArtistsHeader:qe,Header:R,PopularArtist:Ce},data(){return{POPULAR_ARTISTS_AND_SONGS:N}}};const hs=i()(gs,[["render",bs]]);var ps=hs;const Os=[{path:"/",name:"Landing",component:bt},{path:"/app",name:"Auth",component:Ta,children:[{path:"home",name:"Home",component:Ua},{path:"library",name:"Library",component:Ka},{path:"my-likes",name:"MyLikes",component:rs},{path:"playlist/:name",name:"Playlist",component:cs},{path:"artists",name:"Artists",component:ps},{path:"artist/:name",name:"Artist",component:ds},{path:":pathMatch(.*)*",name:"AppNotFound",component:Na}]},{path:"/:pathMatch(.*)*",name:"NotFound",component:Ma}],fs=Object(u["a"])({history:Object(u["b"])("/lalu/"),routes:Os});var js=fs,vs=a("5502");class Ss{constructor(){this.queue=[],this.current=0}setQueue(e){this.queue=e,this.current=0}prev(){return this.current=(this.current-1+this.queue.length)%this.queue.length,this.queue[this.current]}next(){return this.current=(this.current+1+this.queue.length)%this.queue.length,this.queue[this.current]}getCurrentSong(){return this.queue[this.current]}}const ys=Object(vs["a"])({state:{songQueue:new Ss,username:"Friend",navbarOpen:!1},mutations:{},actions:{},modules:{}});ys.state.songQueue.setQueue($);var xs=ys;Object(s["c"])(l).use(xs).use(js).mount("#app")},"6f98":function(e,t,a){},9814:function(e,t,a){"use strict";a("be1b")},a949:function(e,t,a){"use strict";a("25a8")},be1b:function(e,t,a){},c30e:function(e,t,a){"use strict";a("1623")},f22a:function(e,t,a){},ff5f:function(e,t,a){}});
//# sourceMappingURL=app.5ed63e73.js.map