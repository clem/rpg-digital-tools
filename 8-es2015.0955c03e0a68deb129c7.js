(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{JstS:function(e,c,t){"use strict";t.r(c),t.d(c,"EscapeModule",(function(){return k}));var i=t("ofXK"),s=t("3Pt+"),n=t("tyNb"),a=t("fXoL");function r(e,c){1&e&&a.Mb(0,"i",7)}function o(e,c){1&e&&a.Mb(0,"i",7)}function l(e,c){1&e&&a.Mb(0,"i",7)}function d(e,c){if(1&e){const e=a.Pb();a.Ob(0,"li",5),a.Wb("click",(function(){a.ec(e);const t=c.$implicit;return a.Zb(2).selectGame(t)})),a.kc(1),a.Ob(2,"span"),a.kc(3," (Difficult\xe9 : "),a.jc(4,r,1,0,"i",6),a.jc(5,o,1,0,"i",6),a.jc(6,l,1,0,"i",6),a.kc(7," ) "),a.Nb(),a.Nb()}if(2&e){const e=c.$implicit;a.yb(1),a.mc(" ",e.title," "),a.yb(3),a.ac("ngIf",e.difficulty>=1),a.yb(1),a.ac("ngIf",e.difficulty>=2),a.yb(1),a.ac("ngIf",e.difficulty>=3)}}function b(e,c){if(1&e&&(a.Ob(0,"h2"),a.kc(1,"S\xe9lectionnez votre jeu :"),a.Nb(),a.Ob(2,"ul"),a.Ob(3,"li"),a.Ob(4,"a",3),a.kc(5,"Les r\xe8gles ici !"),a.Nb(),a.Nb(),a.jc(6,d,8,4,"li",4),a.Nb()),2&e){const e=a.Zb();a.yb(6),a.ac("ngForOf",e.games)}}function f(e,c){1&e&&a.Mb(0,"div",16)}function g(e,c){if(1&e){const e=a.Pb();a.Ob(0,"div",10),a.jc(1,f,1,0,"div",11),a.Mb(2,"img",12),a.Mb(3,"img",12),a.Ob(4,"div",13),a.Ob(5,"i",5),a.Wb("click",(function(){a.ec(e);const t=c.$implicit;return a.Zb(2).cardClicked(t)})),a.Nb(),a.Ob(6,"i",14),a.Wb("click",(function(){a.ec(e);const t=c.$implicit;return a.Zb(2).currentZoom=t})),a.Nb(),a.Ob(7,"i",15),a.Wb("click",(function(){a.ec(e);const t=c.$implicit;return a.Zb(2).cardTrashed(t)})),a.Nb(),a.Nb(),a.Nb()}if(2&e){const e=c.$implicit,t=a.Zb(2);a.yb(1),a.ac("ngIf",t.cardsTrashed[e]),a.yb(1),a.bc("src","assets/escape/",t.selectedGame.slug,"/",e,"-b.png",a.gc),a.ac("hidden",t.cardsClicked[e]),a.yb(1),a.bc("src","assets/escape/",t.selectedGame.slug,"/",e,"-f.png",a.gc),a.ac("hidden",!t.cardsClicked[e]),a.yb(2),a.Bb("fa fa-eye",t.cardsClicked[e]?"-slash":"","")}}function u(e,c){if(1&e){const e=a.Pb();a.Ob(0,"h2"),a.Ob(1,"i",8),a.Wb("click",(function(){return a.ec(e),a.Zb().selectedGame=null})),a.Nb(),a.kc(2),a.Nb(),a.jc(3,g,8,10,"div",9)}if(2&e){const e=a.Zb();a.yb(2),a.mc(" ",e.selectedGame.title,""),a.yb(1),a.ac("ngForOf",e.selectedGame.cards)}}function m(e,c){if(1&e){const e=a.Pb();a.Ob(0,"div",17),a.Wb("click",(function(){return a.ec(e),a.Zb().currentZoom=null})),a.Mb(1,"img",12),a.Mb(2,"img",12),a.Nb()}if(2&e){const e=a.Zb();a.yb(1),a.bc("src","assets/escape/",e.selectedGame.slug,"/",e.currentZoom,"-b.png",a.gc),a.ac("hidden",e.cardsClicked[e.currentZoom]),a.yb(1),a.bc("src","assets/escape/",e.selectedGame.slug,"/",e.currentZoom,"-f.png",a.gc),a.ac("hidden",!e.cardsClicked[e.currentZoom])}}const p=[{path:"",component:(()=>{class e{constructor(){this.cardsClicked={},this.cardsTrashed={},this.selectedGame=null,this.currentZoom=null,this.games=[{title:"La 5\xe8me avenue",slug:"avenue",difficulty:1,cards:["tuto","init","8","11","15","22","25","30","37","42","43","44","52","58","66","73","86","88","92","C","F","G","H","R","V","W"]},{title:"L'\xe9lite",slug:"elite",difficulty:2,cards:["init","4","15","21","22","32","35","42","47","50","60","63","67","73","79","80","85","C","K","M"]},{title:"A la poursuite de cabrakan",slug:"cabrakan",difficulty:2,cards:["tuto","title","init","6","10","12","15","18","20","24","26","30","35","38","43","46","54","59","60","75","85","95"]},{title:"Le temple de RA",slug:"temple-ra",difficulty:3,cards:["init","6","8","9","15","20","22","23","24","28","30","37","39","42","55","60","66","85","88","91","A","B","H","R"]}];try{const e=localStorage.getItem("escape.selectedGame");if(e){const c=this.games.find(c=>c.slug===e);c&&(this.selectedGame=c,this.retriedStoredCard())}}catch(e){}}selectGame(e){this.selectedGame=e,localStorage.setItem("escape.selectedGame",e.slug),this.retriedStoredCard()}cardClicked(e){this.cardsClicked[e]=!this.cardsClicked[e],localStorage.setItem("escape.cardsClicked."+this.selectedGame.slug,JSON.stringify(this.cardsClicked))}cardTrashed(e){this.cardsTrashed[e]=!this.cardsTrashed[e],localStorage.setItem("escape.cardsTrashed."+this.selectedGame.slug,JSON.stringify(this.cardsTrashed))}retriedStoredCard(){const e=localStorage.getItem("escape.cardsClicked."+this.selectedGame.slug);if(e)try{this.cardsClicked=JSON.parse(e)}catch(t){}else this.cardsClicked={};const c=localStorage.getItem("escape.cardsTrashed."+this.selectedGame.slug);if(c)try{this.cardsTrashed=JSON.parse(c)}catch(i){}else this.cardsClicked={}}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=a.Fb({type:e,selectors:[["app-escape"]],decls:4,vars:3,consts:[[1,"container"],[3,"ngIf"],["class","zoom",3,"click",4,"ngIf"],["href","assets/escape/rules_fr.pdf","target","_blank"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["class","fa fa-lock",4,"ngIf"],[1,"fa","fa-lock"],[1,"fa","fa-arrow-left","clickable",3,"click"],["class","escape-card",4,"ngFor","ngForOf"],[1,"escape-card"],["class","trash",4,"ngIf"],[3,"src","hidden"],[1,"actions"],[1,"fa","fa-search-plus",3,"click"],[1,"fa","fa-trash",3,"click"],[1,"trash"],[1,"zoom",3,"click"]],template:function(e,c){1&e&&(a.Ob(0,"div",0),a.jc(1,b,7,1,"ng-template",1),a.jc(2,u,4,2,"ng-template",1),a.jc(3,m,3,6,"div",2),a.Nb()),2&e&&(a.yb(1),a.ac("ngIf",!c.selectedGame),a.yb(1),a.ac("ngIf",c.selectedGame),a.yb(1),a.ac("ngIf",c.currentZoom))},directives:[i.i,i.h],styles:["img[_ngcontent-%COMP%]{width:350px;height:650px}.escape-card[_ngcontent-%COMP%]{float:left;position:relative}i[_ngcontent-%COMP%] + i[_ngcontent-%COMP%]{margin-left:5px}li[_ngcontent-%COMP%]{margin-top:20px;cursor:pointer}li[_ngcontent-%COMP%]:hover{text-decoration:underline}.actions[_ngcontent-%COMP%]{margin-bottom:15px}.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:30%;text-align:center;font-size:20px;cursor:pointer;padding:5px 0}.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{background:#90ee90}.trash[_ngcontent-%COMP%]{position:absolute;width:350px;height:650px;opacity:.8}.trash[_ngcontent-%COMP%], .zoom[_ngcontent-%COMP%]{left:0;top:0;background:#000}.zoom[_ngcontent-%COMP%]{position:fixed;right:0;text-align:center}.zoom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;height:100vh;cursor:pointer}"]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(c){return new(c||e)},imports:[[n.c.forChild(p)],n.c]}),e})(),k=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(c){return new(c||e)},imports:[[i.b,h,s.c]]}),e})()}}]);