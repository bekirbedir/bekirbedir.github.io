(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{xhqi:function(t,e,n){"use strict";n.r(e),e.default='<div class="route-nav">\n  <span><a href="/activities"> <i class="fa fa-home" aria-hidden="true"></i> Anasayfa </a></span> >\n  <span><i class="fa fa-users" aria-hidden="true"></i> {{activityStatic?.header}} </span> >\n  <span> Duvar </span> \n</div>   \n\n<div class="p-grid p-nogutter p-justify-center p-align-center" style="height:100%">\n  <div class="p-xl-6 p-lg-6 p-md-6 p-sm-6">\n    <p-card>\n\n      <div class="p-grid">\n        <p>{{activityStatic?.header}} - Duvar</p>\n        <br>\n        <div *ngIf="comments" class="comments">\n          <div class="comment-box" *ngFor="let cmt of comments ; \n          let index =index;\n          let isOdd=odd;\n          let isEven=even"  [class.odd-border]="isOdd" \n          [class.even-border]="isEven" >\n        \n            <span class="comment-text"> {{cmt.text}} </span> \n            <span class="comment-username">@{{cmt.username}} <span class="comment-date"> {{ cmt.createdDate | date:\'dd:mm:yyy HH:mm:ss\':null:\'tr\'}}</span></span></div>\n        </div>\n\n        <div class="p-col-12">\n          <h3 class="input-label"></h3>\n          <span class="ui-float-label" style="margin-top:15px !important">\n            <input id="float-input" type="text" size="50" pInputText [(ngModel)]="newComment.text"\n              class="w-100 h-100">\n            <label for="float-input">Etkinlik hakk\u0131nda sorular\u0131n\u0131 buraya yazabilirsin</label>\n          </span>\n        </div>\n        <div class="p-col-12">\n          <button type="button" (click)="sendComment()" class="btn btn-success w-100 "><i class="fa fa-paper-plane-o"\n              aria-hidden="true"> </i> G\xf6nder </button>\n        </div>\n      </div>\n    </p-card>\n  </div>\n</div>'},yTsq:function(t,e,n){"use strict";n.r(e),n.d(e,"ActivityCommentModule",(function(){return P}));var a=n("mrSG"),i=n("8Y7J"),s=n("SVse"),o=n("AytR"),c=n("IheW"),r=n("lJxs");let l=class{constructor(t){this._httpClient=t,this.valuesUrl=o.a.apiBaseUrl+"activity-comment/"}getComments(t){return this._httpClient.get(this.valuesUrl+"getComments?id="+t).pipe(Object(r.a)(t=>t))}sendComment(t){console.log("servise geldi - sendComment");const e=t;let n=(new c.d).set("Content-Type","application/json");const a=JSON.stringify(e);return this._httpClient.post(this.valuesUrl+"sendComment",a,{headers:n}).pipe(Object(r.a)(t=>t))}};l.ctorParameters=()=>[{type:c.b}],l=Object(a.a)([Object(i.D)({providedIn:"root"})],l);class m{}var d=n("ZCPu"),p=n("zna7"),u=n("e1JD"),v=n("iInd"),h=n("6/97"),b=n.n(h);Object(s.o)(b.a,"tr");let y=class{constructor(t,e,n){this.loginService=t,this.activityCommentService=e,this.router=n,this.newComment=new m,this.Activity.subscribe(t=>{t&&(this.activityStatic=t,this.getComments())})}ngOnInit(){this.activityStatic._id?this.getComments():this.router.navigate(["/activities"])}getComments(){this.activityCommentService.getComments(this.activityStatic._id).subscribe(t=>{this.comments=t})}sendComment(){this.newComment.userId=localStorage.getItem("userId"),this.newComment.username=localStorage.getItem("userName").replace('"',"").replace('"',""),this.newComment.activityId=this.activityStatic._id,this.activityCommentService.sendComment(this.newComment).subscribe(t=>{this.newComment.createdDate=(new Date).toLocaleString(),this.comments.push(this.newComment),this.newComment=new m})}};y.ctorParameters=()=>[{type:d.a},{type:l},{type:v.b}],Object(a.a)([Object(u.d)(p.a.selectedActivty)],y.prototype,"Activity",void 0),y=Object(a.a)([Object(i.n)({selector:"app-activity-comment",template:Object(a.b)(n("xhqi")).default,styles:[Object(a.b)(n("yz7s")).default]})],y);var g=n("EC89"),f=n("c/fn"),C=n("ypNx"),x=n("gtx6"),w=n("hCWQ"),O=n("8aBz"),S=n("5T6w"),j=n("uTli"),k=n("SXvI"),I=n("fo5N"),T=n("m4cR"),D=n("7vha"),J=n("TFiL"),L=n("nWvw"),z=n("JxTx"),A=n("s7LF"),_=n("+yXi"),F=n("FjU+"),U=n("mLFm");let E=class{constructor(){console.log("Creating  Pipe.")}transform(t,e){return void 0===t?t:null!==t?(console.log("value*-",t),t.toLocaleString()):void 0}};E=Object(a.a)([Object(i.W)({name:"dateToLocalStr",pure:!1})],E);const N=[{path:"",component:y}];let P=class{};P=Object(a.a)([Object(i.L)({declarations:[y,E],imports:[s.b,g.a,C.a,x.a,x.a,f.a,A.a,w.a,O.a,S.a,j.a,g.a,U.a,_.a,k.a,I.a,T.a,D.a,J.a,L.a,C.a,z.a,F.a,v.c.forChild(N)]})],P)},yz7s:function(t,e,n){"use strict";n.r(e),e.default=".comment-box{\n   \n   \n    display: block;\n    width: 100%;\n    padding:10px 0px;\n    word-break: break-word;\n    border-radius: 3px;\n    margin-top:3px;\n    border-bottom: 1px solid #ccc;\n\n}\n.comment-username{\n    display: block;\n    font-weight: bold;\n    text-align:right;\n    margin-right:5px\n}\n.comment-text{\n    display: block;\n    margin-left: 10px;\n}\n.comment-date{\n    display: block;\n    font-weight: 100;\n}\n.comments{\n    margin: 10px 0;\n    padding: 10px 5px;\n    border:1px solid #ccc;\n    width: 100%;\n    \n}\n.odd-border {\n    border-left:7px solid #2ff5af;\n\n}\n.even-border {\n    border-left:7px solid #ff9029;\n}"}}]);