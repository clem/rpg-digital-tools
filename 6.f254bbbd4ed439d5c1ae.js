(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{O7Pp:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),e=u("pMnS"),i=u("Ip0R"),a=[{label:"Demi-elfe",bonus:"+2cha, +1 \xe0 deux autres carac",racial:1},{label:"Demi-orque",bonus:"+2for, +1con",racial:2},{label:"Drak\xe9ide",bonus:"+2for, +1cha",racial:3},{label:"Elfe",subraces:[{label:"Elfe des bois",bonus:"+2dex, +1sag",racial:4},{label:"Haut-elfe",bonus:"+2dex, +1int",racial:5}]},{label:"Gnome",subraces:[{label:"Gnome des for\xeats",bonus:"+2int, +1dex",racial:6},{label:"Gnome des roches",bonus:"+2int, +1con",racial:7}]},{label:"Halfelin",subraces:[{label:"Halfelin corpulent",bonus:"+2dex, +1con",racial:8},{label:"Halfelin pieds-l\xe9ger",bonus:"+2dex, +1cha",racial:9}]},{label:"Humain",subraces:[{label:"Humain",bonus:"+1 all",racial:10},{label:"Humain (variante)",bonus:"+1 \xe0 deux carac, 1 comp\xe9tence maitris\xe9, 1 don",racial:14}]},{label:"Nain",subraces:[{label:"Nain des collines",bonus:"+2con, +1sag",racial:11},{label:"Nain des montagnes",bonus:"+2con, +2for",racial:12}]},{label:"Aasimar",subraces:[{label:"Protecteur",bonus:"+2cha, +1sag",racial:21},{label:"Fl\xe9au",bonus:"+2cha, +1con",racial:22},{label:"D\xe9chu",bonus:"+2cha, +1for",racial:23}]},{label:"Tieffelin",bonus:"+2cha, +1int",racial:13},{label:"Firbolg",bonus:"+2sag, +1for",racial:15},{label:"Goliath",bonus:"+2for, +1con",racial:16},{label:"Kenku",bonus:"+2dex, +1sag",racial:17},{label:"Tabaxi",bonus:"+2dex, +1cha",racial:18},{label:"Tortle",bonus:"+2for, +1sag",racial:19},{label:"Triton",bonus:"+1for, +1con, +1cha",racial:20},{label:"Kitsune Zenko",bonus:"+2dex, +1cha",racial:9}],s=[{label:"Force",score:8,racial:0,value:8,mod:-1,id:1,bonus:0,tooltip:"str"},{label:"Dext\xe9rit\xe9",score:8,racial:0,value:8,mod:-1,id:2,bonus:0,tooltip:"dex"},{label:"Constitution",score:8,racial:0,value:8,mod:-1,id:3,bonus:0,tooltip:"con"},{label:"Intelligence",score:8,racial:0,value:8,mod:-1,id:4,bonus:0,tooltip:"int"},{label:"Sagesse",score:8,racial:0,value:8,mod:-1,id:5,bonus:0,tooltip:"sag"},{label:"Charisme",score:8,racial:0,value:8,mod:-1,id:6,bonus:0,tooltip:"cha"}],c=[{id:1,bonus:[{id:6,bonus:2},{others:2,except:6}]},{id:2,bonus:[{id:1,bonus:2},{id:3,bonus:1}]},{id:3,bonus:[{id:1,bonus:2},{id:6,bonus:1}]},{id:4,bonus:[{id:2,bonus:2},{id:5,bonus:1}]},{id:5,bonus:[{id:2,bonus:2},{id:4,bonus:1}]},{id:6,bonus:[{id:4,bonus:2},{id:2,bonus:1}]},{id:7,bonus:[{id:4,bonus:2},{id:3,bonus:1}]},{id:8,bonus:[{id:2,bonus:2},{id:3,bonus:1}]},{id:9,bonus:[{id:2,bonus:2},{id:6,bonus:1}]},{id:10,bonus:[{id:1,bonus:1},{id:2,bonus:1},{id:3,bonus:1},{id:4,bonus:1},{id:5,bonus:1},{id:6,bonus:1}]},{id:11,bonus:[{id:3,bonus:2},{id:5,bonus:1}]},{id:12,bonus:[{id:3,bonus:2},{id:1,bonus:2}]},{id:13,bonus:[{id:6,bonus:2},{id:4,bonus:1}]},{id:14,bonus:[{others:2}]},{id:15,bonus:[{id:5,bonus:2},{id:1,bonus:1}]},{id:16,bonus:[{id:1,bonus:2},{id:3,bonus:1}]},{id:17,bonus:[{id:2,bonus:2},{id:5,bonus:1}]},{id:18,bonus:[{id:2,bonus:2},{id:6,bonus:1}]},{id:19,bonus:[{id:1,bonus:2},{id:5,bonus:1}]},{id:20,bonus:[{id:1,bonus:1},{id:3,bonus:1},{id:6,bonus:1}]},{id:21,bonus:[{id:6,bonus:2},{id:5,bonus:1}]},{id:22,bonus:[{id:6,bonus:2},{id:3,bonus:1}]},{id:23,bonus:[{id:6,bonus:2},{id:1,bonus:1}]}],b=function(){function l(){this.races=a,this.table=s,this.points=27,this.totalMods=-6,this.othersBonus=0,this.raceWithBonus=!1,this.exceptBonus=0,this.tooltips={str:"Puissance physique, aptitude athl\xe9tique naturelle",dex:"Agilit\xe9, r\xe9flexes, \xe9quilibre",con:"Sant\xe9, endurance, force vitale",int:"Acuit\xe9 mentale, raisonnement, m\xe9moire",sag:"Perception, intuition, perspicacit\xe9",cha:"Force de personnalit\xe9, \xe9loquence, leadership"}}return l.prototype.ngAfterViewInit=function(){$("select").material_select(),$(".tooltipped").tooltip({delay:50}),$("#select-race").change(this.onSelectRace.bind(this))},l.prototype.onSelectRace=function(l){this.resetOthersBonus();for(var n=c[l.target.value-1].bonus,u=0;u<6;u++)s[u].racial=0;for(u=0;u<n.length;u++){var t=n[u];t.others?(this.raceWithBonus=!0,this.othersBonus=t.others,this.exceptBonus=t.except):s[t.id-1].racial=t.bonus}for(u=0;u<6;u++)this.valueChanged(this.table[u])},l.prototype.between=function(l,n,u){return l>=n&&l<=u},l.prototype.cost=function(l,n){return this.between(l,8,13)&&this.between(n,8,13)?1:this.between(l,13,15)&&this.between(n,13,15)?2:void 0},l.prototype.add=function(l){if(!(l.score>=15)){var n=this.cost(l.score,l.score+1);this.points<n||(this.points-=n,l.score+=1,this.valueChanged(l))}},l.prototype.remove=function(l){l.score<=8||(this.points+=this.cost(l.score,l.score-1),l.score-=1,this.valueChanged(l))},l.prototype.valueChanged=function(l){var n=l.score+l.racial+l.bonus;l.value=n,l.mod=Math.floor(n/2-5),this.calcTotalMod()},l.prototype.calcTotalMod=function(){this.totalMods=0;for(var l=0;l<6;l++)this.totalMods+=this.table[l].mod},l.prototype.resetOthersBonus=function(){$(".other-bonus").attr("checked",!1),this.raceWithBonus=!1,this.othersBonus=0,this.exceptBonus=0;for(var l=0;l<6;l++)this.table[l].bonus=0},l.prototype.chooseBonus=function(l){0===l.bonus&&this.othersBonus<=0||(l.bonus?(l.bonus=0,this.othersBonus+=1,this.valueChanged(l)):(l.bonus=1,this.othersBonus-=1,this.valueChanged(l)))},l}(),r=t.ob({encapsulation:0,styles:[[".carac-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-radius:0}.dropdown-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#03a9f4}.select-dropdown[_ngcontent-%COMP%]   li.optgroup[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#81d4fa}.select-dropdown[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#01579b}.underlined-title[_ngcontent-%COMP%]{border-bottom:2px solid;border-color:#01579b;margin-left:auto;margin-right:auto;width:50%}.total-mods[_ngcontent-%COMP%]{margin-top:15px}.text-bold[_ngcontent-%COMP%]{font-weight:700}.container[_ngcontent-%COMP%]{position:relative}.link-github[_ngcontent-%COMP%]{display:block;width:75px;position:absolute}.link-github[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.material-tooltip[_ngcontent-%COMP%], .material-tooltip[_ngcontent-%COMP%]   .backdrop[_ngcontent-%COMP%], .material-tooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#03a9f4}.tooltipped[_ngcontent-%COMP%]{cursor:pointer}"]],data:{}});function d(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,1,"option",[],[[8,"value",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.selectRace(l.context.$implicit)&&t),t},null,null)),(l()(),t.Eb(1,null,[""," (",")"]))],null,function(l,n){l(n,0,0,n.context.$implicit.racial),l(n,1,0,n.context.$implicit.label,n.context.$implicit.bonus)})}function p(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,2,"optgroup",[],[[1,"label",0]],null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,d)),t.pb(2,278528,null,0,i.i,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.parent.context.$implicit.subraces)},function(l,n){l(n,0,0,n.parent.context.$implicit.label)})}function h(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,1,"option",[],[[8,"value",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.selectRace(l.parent.context.$implicit)&&t),t},null,null)),(l()(),t.Eb(1,null,[""," (",")"]))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.racial),l(n,1,0,n.parent.context.$implicit.label,n.parent.context.$implicit.bonus)})}function f(l){return t.Fb(0,[(l()(),t.hb(16777216,null,null,1,null,p)),t.pb(1,16384,null,0,i.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,h)),t.pb(3,16384,null,0,i.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(0,null,null,0))],function(l,n){l(n,1,0,n.context.$implicit.subraces),l(n,3,0,!n.context.$implicit.subraces)},null)}function g(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,4,"div",[["class","switch"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,3,"label",[],[[8,"className",0]],null,null,null,null)),(l()(),t.qb(2,0,null,null,0,"input",[["class","other-bonus"],["type","checkbox"]],[[8,"disabled",0]],[[null,"change"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==l.component.chooseBonus(l.parent.context.$implicit)&&t),t},null,null)),(l()(),t.qb(3,0,null,null,0,"span",[["class","lever"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Bonus racial "]))],null,function(l,n){var u=n.component;l(n,1,0,t.sb(1,"",n.parent.context.$implicit.bonus?"black-text text-bold":"","")),l(n,2,0,0===n.parent.context.$implicit.bonus&&u.othersBonus<=0)})}function m(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,17,"tr",[],[[8,"className",0]],null,null,null,null)),(l()(),t.qb(1,0,null,null,5,"td",[],[[2,"text-bold",null]],null,null,null,null)),(l()(),t.Eb(2,null,[" "," "])),(l()(),t.qb(3,0,null,null,1,"i",[["class","material-icons tooltipped"],["data-delay","50"],["data-position","right"]],[[1,"data-tooltip",0]],null,null,null,null)),(l()(),t.Eb(-1,null,["help"])),(l()(),t.hb(16777216,null,null,1,null,g)),t.pb(6,16384,null,0,i.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(7,0,null,null,1,"td",[],[[2,"text-bold",null]],null,null,null,null)),(l()(),t.Eb(8,null,["",""])),(l()(),t.qb(9,0,null,null,1,"td",[],[[2,"text-bold",null]],null,null,null,null)),(l()(),t.Eb(10,null,["",""])),(l()(),t.qb(11,0,null,null,6,"td",[],null,null,null,null,null)),(l()(),t.qb(12,0,null,null,2,"button",[["class","btn-floating waves-effect waves-light btn green"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.add(l.context.$implicit)&&t),t},null,null)),(l()(),t.qb(13,0,null,null,1,"i",[["class","material-icons left"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["add"])),(l()(),t.qb(15,0,null,null,2,"button",[["class","btn-floating waves-effect waves-light btn red"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.remove(l.context.$implicit)&&t),t},null,null)),(l()(),t.qb(16,0,null,null,1,"i",[["class","material-icons left"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["remove"]))],function(l,n){var u=n.component;l(n,6,0,u.raceWithBonus&&u.exceptBonus-1!==n.context.index)},function(l,n){var u=n.component;l(n,0,0,t.sb(1,"",n.context.index%2==1?"blue lighten-4":"","")),l(n,1,0,15===n.context.$implicit.score),l(n,2,0,n.context.$implicit.label),l(n,3,0,u.tooltips[n.context.$implicit.tooltip]),l(n,7,0,15===n.context.$implicit.score),l(n,8,0,n.context.$implicit.value),l(n,9,0,15===n.context.$implicit.score),l(n,10,0,n.context.$implicit.mod),l(n,12,0,15===n.context.$implicit.score||u.points<u.cost(n.context.$implicit.score,n.context.$implicit.score+1)),l(n,15,0,8===n.context.$implicit.score)})}function x(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,30,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,1,"h3",[["class","center-align underlined-title"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["D&D 5 - Carac builder"])),(l()(),t.qb(4,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,5,"div",[["class","input-field col s6"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,4,"select",[["class","light-blue-text lighten-1"],["id","select-race"]],null,null,null,null,null)),(l()(),t.qb(7,0,null,null,1,"option",[["disabled",""],["selected",""],["value",""]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["S\xe9lectionnez votre race"])),(l()(),t.hb(16777216,null,null,1,null,f)),t.pb(10,278528,null,0,i.i,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(11,0,null,null,2,"div",[["class","col s6 total-mods"]],null,null,null,null,null)),(l()(),t.qb(12,0,null,null,1,"h5",[["class","center-align"]],null,null,null,null,null)),(l()(),t.Eb(13,null,["Total modificateurs : ",""])),(l()(),t.qb(14,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.qb(15,0,null,null,12,"table",[["class","carac-table bordered centered"]],null,null,null,null,null)),(l()(),t.qb(16,0,null,null,8,"thead",[["class","light-blue"]],null,null,null,null,null)),(l()(),t.qb(17,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),t.qb(18,0,null,null,1,"th",[["data-field","carac"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Caract\xe9ristiques"])),(l()(),t.qb(20,0,null,null,1,"th",[["data-field","score"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Score"])),(l()(),t.qb(22,0,null,null,1,"th",[["data-field","mod"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Modificateur"])),(l()(),t.qb(24,0,null,null,0,"th",[["data-field","actions"]],null,null,null,null,null)),(l()(),t.qb(25,0,null,null,2,"tbody",[["class","light-blue lighten-5"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,m)),t.pb(27,278528,null,0,i.i,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(28,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.qb(29,0,null,null,1,"h4",[["class","center-align"]],null,null,null,null,null)),(l()(),t.Eb(30,null,["Points : ",""]))],function(l,n){var u=n.component;l(n,10,0,u.races),l(n,27,0,u.table)},function(l,n){var u=n.component;l(n,13,0,u.totalMods),l(n,30,0,u.points)})}function v(l){return t.Fb(0,[(l()(),t.qb(0,0,null,null,1,"app-dd-builder",[],null,null,null,x,r)),t.pb(1,4243456,null,0,b,[],null,null)],null,null)}var q=t.mb("app-dd-builder",b,v,{},{},[]),M=u("ZYCi"),C=function(){return function(){}}();u.d(n,"DdBuilderModuleNgFactory",function(){return P});var P=t.nb(o,[],function(l){return t.xb([t.yb(512,t.j,t.cb,[[8,[e.a,q]],[3,t.j],t.x]),t.yb(4608,i.l,i.k,[t.u,[2,i.u]]),t.yb(1073742336,i.b,i.b,[]),t.yb(1073742336,M.m,M.m,[[2,M.s],[2,M.k]]),t.yb(1073742336,C,C,[]),t.yb(1073742336,o,o,[]),t.yb(1024,M.i,function(){return[[{path:"",component:b}]]},[])])})}}]);