function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{EC89:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var a=t("8Y7J"),i=t("SVse"),c=t("hhfa"),s=function(n,e,t,a){var i,c=arguments.length,s=c<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(n,e,t,a);else for(var r=n.length-1;r>=0;r--)(i=n[r])&&(s=(c<3?i(s):c>3?i(e,t,s):i(e,t))||s);return c>3&&s&&Object.defineProperty(e,t,s),s},r=function(){function n(e){_classCallCheck(this,n),this.el=e}return _createClass(n,[{key:"getBlockableElement",value:function(){return this.el.nativeElement.children[0]}}]),n}();r.ctorParameters=function(){return[{type:a.v}]},s([Object(a.G)()],r.prototype,"header",void 0),s([Object(a.G)()],r.prototype,"subheader",void 0),s([Object(a.G)()],r.prototype,"style",void 0),s([Object(a.G)()],r.prototype,"styleClass",void 0),s([Object(a.r)(c.b)],r.prototype,"headerFacet",void 0),s([Object(a.r)(c.a)],r.prototype,"footerFacet",void 0),r=s([Object(a.n)({selector:"p-card",template:'\n        <div [ngClass]="\'ui-card ui-widget ui-widget-content ui-corner-all\'" [ngStyle]="style" [class]="styleClass">\n            <div class="ui-card-header" *ngIf="headerFacet">\n               <ng-content select="p-header"></ng-content>\n            </div>\n            <div class="ui-card-body">\n                <div class="ui-card-title" *ngIf="header">{{header}}</div>\n                <div class="ui-card-subtitle" *ngIf="subheader">{{subheader}}</div>\n                <div class="ui-card-content">\n                    <ng-content></ng-content>\n                </div>\n                <div class="ui-card-footer" *ngIf="footerFacet">\n                    <ng-content select="p-footer"></ng-content>\n                </div>\n            </div>\n        </div>\n    ',changeDetection:a.j.Default})],r);var o=function n(){_classCallCheck(this,n)};o=s([Object(a.L)({imports:[i.b],exports:[r,c.e],declarations:[r]})],o)},ofDu:function(n,e,t){"use strict";t.r(e),t.d(e,"ActivityViewModule",(function(){return u}));var a=t("mrSG"),i=t("8Y7J"),c=t("SVse"),s=t("e1JD"),r=t("zna7"),o=function(){function n(e){var t=this;_classCallCheck(this,n),this.store=e,this.Activity.subscribe((function(n){t.activityStatic=n}))}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}();o.ctorParameters=function(){return[{type:s.g}]},Object(a.a)([Object(s.d)(r.a.selectedActivty)],o.prototype,"Activity",void 0),o=Object(a.a)([Object(i.n)({selector:"app-activity-view",template:Object(a.b)(t("yQJi")).default,styles:[Object(a.b)(t("usMY")).default]})],o);var d=t("iInd"),l=t("EC89"),p=[{path:"",component:o}],u=function n(){_classCallCheck(this,n)};u=Object(a.a)([Object(i.L)({declarations:[o],imports:[l.a,c.b,d.c.forChild(p)]})],u)},usMY:function(n,e,t){"use strict";t.r(e),e.default=".act-photo{\n    max-width: 100% !important;\n}\n.act-header{\n    height: 100px;\n    padding: 5px;\n}\n.act-header-name{\n    font-size: 1.5em;\n    font-weight: 800;\n    color:darkturquoise;\n}\n.act-header-user-name{\n    font-weight: 700;\n}\n.act-header-photo{\n    -o-object-fit: cover;\n       object-fit: cover;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n.h-10{\n    height:10px;\n}\n.h-5{\n    height:5px;\n}\n.act-content{\n    padding-left: 20px !important;\n    padding-right: 77px !important;\n}\n.act-content-btn-signin{\n    border-radius: 5px;\n    text-align: center;\n    color: #ffffff;\n    background-color: #007ad9;\n}\n.act-content-btn-comment{\n    border-radius: 2px;\n}"},yQJi:function(n,e,t){"use strict";t.r(e),e.default='<div class="route-nav">\n  <span><a href="/activities"> <i class="fa fa-home" aria-hidden="true"></i> Anasayfa </a></span> >\n  <span><i class="fa fa-users" aria-hidden="true"></i> {{activityStatic?.header}} </span>\n</div>   \n\n<div class="p-grid p-nogutter p-justify-center p-align-center" style="height:100%" *ngIf="activityStatic">\n  <div class="p-xl-6 p-lg-6 p-md-6 p-sm-6">\n    <p-card>  \n    \n        <div class="p-grid">\n        <div class="p-col-1">\n          <img class="act-header-photo" src="assets/gokcenur.jpg" >\n        </div>\n        <div class="p-col-11 act-content">\n            <p class="act-header-user-name">{{activityStatic?._id}} - ACTIVITY-VIEW SAYFASI</p>\n           <p class="act-header-name">bir haftal\u0131k kamp</p>\n           <div class="h-10"></div>\n           <div class="act-content-text">\n           {{activityStatic?.context}}\n           </div>\n\n           <div class="h-10"></div>\n           <div class="act-content-tags">\n             #gezi  #festival  #do\u011fa  #tarih  #kamp  \n           </div>\n           <div class="h-5"></div>\n           <div >\n            <img class="act-photo" src="assets/kamp.jpg" >\n          </div>\n          <div class="h-5"></div>\n          <div class="act-content-footer">\n            <div class="p-grid">\n                <div class="p-col"><i class="pi pi-heart"></i> 7</div>\n                <div class="p-col"><i class="pi pi-users"></i> 12</div>\n              <div class="p-col"><i class="pi pi-clock"></i> 22/07/2020</div>\n            </div>\n            <hr>\n            <div class="p-grid">\n                \n                <div class="p-col-6 act-content-btn-comment"><i class="pi pi-comments"></i> Duvar</div>\n            <div class="p-col-6 act-content-btn-signin"><i class="pi pi-sign-in"></i>&nbsp; Kat\u0131l</div>\n            </div>\n\n            \n          </div>\n           \n        </div>\n        \x3c!--<div class="act-header">\n           <span><img class="act-header-photo" src="assets/gokcenur.jpg" ></span>\n        <span class="act-header-name">G\xf6k\xe7enur G\xd6KY\xdcREK</span>\n           \n        </div>\n        <p>\n            #7 G\xfcnl\xfck Kamp\n        </p>\n       \n        SONNN 1 K\u0130\u015e\u0130L\u0130KKK YER\u0130M\u0130Z KALDI!!!! Ankara da kamp grubu olu\u015fturup 6-7 g\xfcnde hem tarihi yerleri gezip hemde sahil deniz kamplar\u0131 yapal\u0131m. Temmuzun 10-17 si Mu\u011fla Dat\xe7a day\u0131z farkl\u0131 \u015fehirlerden kamp\xe7\u0131lara da a\xe7\u0131k.Tatil yap\u0131p hem de kamp yapmak istiyorsan ne duruyorsun daha....Ankara d\u0131\u015f\u0131ndan gelen kamp\xe7\u0131lar\u0131 da beklerim.\nnot : 1 k\u0131z arkada\u015f\u0131 kendi \xe7ad\u0131r\u0131mda misafir edebilirim onun d\u0131\u015f\u0131nda kendi ekipmanlar\u0131m\u0131z\u0131 getirmeliyiz.\n\n        <div >\n            <img class="act-photo" src="assets/kamp.jpg" >\n        </div>\n        <p-footer>\n            Footer content here\n        </p-footer> --\x3e\n    </div>\n    </p-card>\n</div>\n</div>\n'}}]);