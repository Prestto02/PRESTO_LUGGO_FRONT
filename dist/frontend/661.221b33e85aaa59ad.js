"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[661],{13:(z,b,u)=>{u.d(b,{b:()=>x});var w=u(3489),c=u(353);function x(a,l=c.P){return s=>s.lift(new D(a,l))}class D{constructor(l,s){this.dueTime=l,this.scheduler=s}call(l,s){return s.subscribe(new E(l,this.dueTime,this.scheduler))}}class E extends w.L{constructor(l,s,d){super(l),this.dueTime=s,this.scheduler=d,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(l){this.clearDebounce(),this.lastValue=l,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(m,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:l}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(l)}}clearDebounce(){const l=this.debouncedSubscription;null!==l&&(this.remove(l),l.unsubscribe(),this.debouncedSubscription=null)}}function m(a){a.debouncedNext()}},7625:(z,b,u)=>{u.d(b,{R:()=>c});var w=u(1177);function c(E){return m=>m.lift(new x(E))}class x{constructor(m){this.notifier=m}call(m,a){const l=new D(m),s=(0,w.ft)(this.notifier,new w.IY(l));return s&&!l.seenValue?(l.add(s),a.subscribe(l)):l}}class D extends w.Ds{constructor(m){super(m),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}},352:(z,b,u)=>{u.d(b,{Z:()=>E});var w=u(6686),x=u(2268);const E=new class D extends x.v{flush(l){this.active=!0,this.scheduled=void 0;const{actions:s}=this;let d,f=-1,p=s.length;l=l||s.shift();do{if(d=l.execute(l.state,l.delay))break}while(++f<p&&(l=s.shift()));if(this.active=!1,d){for(;++f<p&&(l=s.shift());)l.unsubscribe();throw d}}}(class c extends w.o{constructor(l,s){super(l,s),this.scheduler=l,this.work=s}requestAsyncId(l,s,d=0){return null!==d&&d>0?super.requestAsyncId(l,s,d):(l.actions.push(this),l.scheduled||(l.scheduled=requestAnimationFrame(()=>l.flush(null))))}recycleAsyncId(l,s,d=0){if(null!==d&&d>0||null===d&&this.delay>0)return super.recycleAsyncId(l,s,d);0===l.actions.length&&(cancelAnimationFrame(s),l.scheduled=void 0)}})},4241:(z,b,u)=>{u.d(b,{k:()=>c});var w=u(6688);function c(x){return!(0,w.k)(x)&&x-parseFloat(x)+1>=0}},445:(z,b,u)=>{u.d(b,{Is:()=>a,vT:()=>s});var w=u(5062),c=u(6895);const x=new w.OlP("cdk-dir-doc",{providedIn:"root",factory:function D(){return(0,w.f3M)(c.K0)}}),E=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let a=(()=>{class d{constructor(p){if(this.value="ltr",this.change=new w.vpe,p){const T=p.documentElement?p.documentElement.dir:null;this.value=function m(d){const f=d?.toLowerCase()||"";return"auto"===f&&typeof navigator<"u"&&navigator?.language?E.test(navigator.language)?"rtl":"ltr":"rtl"===f?"rtl":"ltr"}((p.body?p.body.dir:null)||T||"ltr")}}ngOnDestroy(){this.change.complete()}}return d.\u0275fac=function(p){return new(p||d)(w.LFG(x,8))},d.\u0275prov=w.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})(),s=(()=>{class d{}return d.\u0275fac=function(p){return new(p||d)},d.\u0275mod=w.oAB({type:d}),d.\u0275inj=w.cJS({}),d})()},1281:(z,b,u)=>{u.d(b,{Eq:()=>E,Ig:()=>c,fI:()=>a,su:()=>x});var w=u(5062);function c(s){return null!=s&&"false"!=`${s}`}function x(s,d=0){return function D(s){return!isNaN(parseFloat(s))&&!isNaN(Number(s))}(s)?Number(s):d}function E(s){return Array.isArray(s)?s:[s]}function a(s){return s instanceof w.SBq?s.nativeElement:s}},3353:(z,b,u)=>{u.d(b,{Mq:()=>T,_i:()=>V,i$:()=>f,kV:()=>O,sA:()=>U,t4:()=>D});var w=u(5062),c=u(6895);let x;try{x=typeof Intl<"u"&&Intl.v8BreakIterator}catch{x=!1}let s,p,y,F,D=(()=>{class g{constructor(M){this._platformId=M,this.isBrowser=this._platformId?(0,c.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!x)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return g.\u0275fac=function(M){return new(M||g)(w.LFG(w.Lbi))},g.\u0275prov=w.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})();function f(g){return function d(){if(null==s&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>s=!0}))}finally{s=s||!1}return s}()?g:!!g.capture}function T(){if(null==y){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return y=!1,y;if("scrollBehavior"in document.documentElement.style)y=!0;else{const g=Element.prototype.scrollTo;y=!!g&&!/\{\s*\[native code\]\s*\}/.test(g.toString())}}return y}function V(){if("object"!=typeof document||!document)return 0;if(null==p){const g=document.createElement("div"),C=g.style;g.dir="rtl",C.width="1px",C.overflow="auto",C.visibility="hidden",C.pointerEvents="none",C.position="absolute";const M=document.createElement("div"),B=M.style;B.width="2px",B.height="1px",g.appendChild(M),document.body.appendChild(g),p=0,0===g.scrollLeft&&(g.scrollLeft=1,p=0===g.scrollLeft?1:2),g.remove()}return p}function O(g){if(function R(){if(null==F){const g=typeof document<"u"?document.head:null;F=!(!g||!g.createShadowRoot&&!g.attachShadow)}return F}()){const C=g.getRootNode?g.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&C instanceof ShadowRoot)return C}return null}function U(g){return g.composedPath?g.composedPath()[0]:g.target}},6763:(z,b,u)=>{u.d(b,{xd:()=>Be,ZD:()=>$,x0:()=>Ye,N7:()=>se,mF:()=>H,Cl:()=>Ke,rL:()=>re});var w=u(1281),c=u(5062);let x=1;const D=Promise.resolve(),E={};function m(n){return n in E&&(delete E[n],!0)}const a={setImmediate(n){const t=x++;return E[t]=!0,D.then(()=>m(t)&&n()),t},clearImmediate(n){m(n)}};var s=u(6686),f=u(2268);const y=new class p extends f.v{flush(t){this.active=!0,this.scheduled=void 0;const{actions:e}=this;let i,r=-1,o=e.length;t=t||e.shift();do{if(i=t.execute(t.state,t.delay))break}while(++r<o&&(t=e.shift()));if(this.active=!1,i){for(;++r<o&&(t=e.shift());)t.unsubscribe();throw i}}}(class d extends s.o{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,i=0){return null!==i&&i>0?super.requestAsyncId(t,e,i):(t.actions.push(this),t.scheduled||(t.scheduled=a.setImmediate(t.flush.bind(t,null))))}recycleAsyncId(t,e,i=0){if(null!==i&&i>0||null===i&&this.delay>0)return super.recycleAsyncId(t,e,i);0===t.actions.length&&(a.clearImmediate(e),t.scheduled=void 0)}});var V=u(6498);function F(n){return!!n&&(n instanceof V.y||"function"==typeof n.lift&&"function"==typeof n.subscribe)}var R=u(8929),O=u(1086),W=u(3753),U=u(352),Y=u(2654),g=u(3489);class M{constructor(t,e){this.compare=t,this.keySelector=e}call(t,e){return e.subscribe(new B(t,this.compare,this.keySelector))}}class B extends g.L{constructor(t,e,i){super(t),this.keySelector=i,this.hasKey=!1,"function"==typeof e&&(this.compare=e)}compare(t,e){return t===e}_next(t){let e;try{const{keySelector:r}=this;e=r?r(t):t}catch(r){return this.destination.error(r)}let i=!1;if(this.hasKey)try{const{compare:r}=this;i=r(this.key,e)}catch(r){return this.destination.error(r)}else this.hasKey=!0;i||(this.key=e,this.destination.next(t))}}var X=u(353),K=u(1177);class ae{constructor(t){this.durationSelector=t}call(t,e){return e.subscribe(new ce(t,this.durationSelector))}}class ce extends K.Ds{constructor(t,e){super(t),this.durationSelector=e,this.hasValue=!1}_next(t){if(this.value=t,this.hasValue=!0,!this.throttled){let e;try{const{durationSelector:r}=this;e=r(t)}catch(r){return this.destination.error(r)}const i=(0,K.ft)(e,new K.IY(this));!i||i.closed?this.clearThrottle():this.add(this.throttled=i)}}clearThrottle(){const{value:t,hasValue:e,throttled:i}=this;i&&(this.remove(i),this.throttled=void 0,i.unsubscribe()),e&&(this.value=void 0,this.hasValue=!1,this.destination.next(t))}notifyNext(){this.clearThrottle()}notifyComplete(){this.clearThrottle()}}var j=u(4241),J=u(2866);function de(n){const{index:t,period:e,subscriber:i}=n;if(i.next(t),!i.closed){if(-1===e)return i.complete();n.index=t+1,this.schedule(n,e)}}function G(n,t=X.P){return function le(n){return function(e){return e.lift(new ae(n))}}(()=>function he(n=0,t,e){let i=-1;return(0,j.k)(t)?i=Number(t)<1?1:Number(t):(0,J.K)(t)&&(e=t),(0,J.K)(e)||(e=X.P),new V.y(r=>{const o=(0,j.k)(n)?n:+n-e.now();return e.schedule(de,o,{index:0,period:i,subscriber:r})})}(n,t))}class fe{call(t,e){return e.subscribe(new pe(t))}}class pe extends g.L{constructor(t){super(t),this.hasPrev=!1}_next(t){let e;this.hasPrev?e=[this.prev,t]:this.hasPrev=!0,this.prev=t,e&&this.destination.next(e)}}const me=new class _e extends f.v{}(class ge extends s.o{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}schedule(t,e=0){return e>0?super.schedule(t,e):(this.delay=e,this.state=t,this.scheduler.flush(this),this)}execute(t,e){return e>0||this.closed?super.execute(t,e):this._execute(t,e)}requestAsyncId(t,e,i=0){return null!==i&&i>0||null===i&&this.delay>0?super.requestAsyncId(t,e,i):t.flush(this)}});var ve=u(8896),we=u(1737);class k{constructor(t,e,i){this.kind=t,this.value=e,this.error=i,this.hasValue="N"===t}observe(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}}do(t,e,i){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return i&&i()}}accept(t,e,i){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,i)}toObservable(){switch(this.kind){case"N":return(0,O.of)(this.value);case"E":return(0,we._)(this.error);case"C":return(0,ve.c)()}throw new Error("unexpected notification kind value")}static createNext(t){return typeof t<"u"?new k("N",t):k.undefinedValueNotification}static createError(t){return new k("E",void 0,t)}static createComplete(){return k.completeNotification}}k.completeNotification=new k("C"),k.undefinedValueNotification=new k("N",void 0);class N extends g.L{constructor(t,e,i=0){super(t),this.scheduler=e,this.delay=i}static dispatch(t){const{notification:e,destination:i}=t;e.observe(i),this.unsubscribe()}scheduleMessage(t){this.destination.add(this.scheduler.schedule(N.dispatch,this.delay,new ye(t,this.destination)))}_next(t){this.scheduleMessage(k.createNext(t))}_error(t){this.scheduleMessage(k.createError(t)),this.unsubscribe()}_complete(){this.scheduleMessage(k.createComplete()),this.unsubscribe()}}class ye{constructor(t,e){this.notification=t,this.destination=e}}var xe=u(5279),Ce=u(5283);class Ee extends R.xQ{constructor(t=Number.POSITIVE_INFINITY,e=Number.POSITIVE_INFINITY,i){super(),this.scheduler=i,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=t<1?1:t,this._windowTime=e<1?1:e,e===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(t){if(!this.isStopped){const e=this._events;e.push(t),e.length>this._bufferSize&&e.shift()}super.next(t)}nextTimeWindow(t){this.isStopped||(this._events.push(new be(this._getNow(),t)),this._trimBufferThenGetEvents()),super.next(t)}_subscribe(t){const e=this._infiniteTimeWindow,i=e?this._events:this._trimBufferThenGetEvents(),r=this.scheduler,o=i.length;let h;if(this.closed)throw new xe.N;if(this.isStopped||this.hasError?h=Y.w.EMPTY:(this.observers.push(t),h=new Ce.W(this,t)),r&&t.add(t=new N(t,r)),e)for(let v=0;v<o&&!t.closed;v++)t.next(i[v]);else for(let v=0;v<o&&!t.closed;v++)t.next(i[v].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),h}_getNow(){return(this.scheduler||me).now()}_trimBufferThenGetEvents(){const t=this._getNow(),e=this._bufferSize,i=this._windowTime,r=this._events,o=r.length;let h=0;for(;h<o&&!(t-r[h].time<i);)h++;return o>e&&(h=Math.max(h,o-e)),h>0&&r.splice(0,h),r}}class be{constructor(t,e){this.time=t,this.value=e}}var Te=u(2198),Z=u(7625),q=u(1059),Ie=u(7545),P=u(3353),ee=u(6895),L=u(445);class Oe extends class ke{}{constructor(t){super(),this._data=t}connect(){return F(this._data)?this._data:(0,O.of)(this._data)}disconnect(){}}class Ae{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(t,e,i,r,o){t.forEachOperation((h,v,_)=>{let S,I;null==h.previousIndex?(S=this._insertView(()=>i(h,v,_),_,e,r(h)),I=S?1:0):null==_?(this._detachAndCacheView(v,e),I=3):(S=this._moveView(v,_,e,r(h)),I=2),o&&o({context:S?.context,operation:I,record:h})})}detach(){for(const t of this._viewCache)t.destroy();this._viewCache=[]}_insertView(t,e,i,r){const o=this._insertViewFromCache(e,i);if(o)return void(o.context.$implicit=r);const h=t();return i.createEmbeddedView(h.templateRef,h.context,h.index)}_detachAndCacheView(t,e){const i=e.detach(t);this._maybeCacheView(i,e)}_moveView(t,e,i,r){const o=i.get(t);return i.move(o,e),o.context.$implicit=r,o}_maybeCacheView(t,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(t);else{const i=e.indexOf(t);-1===i?t.destroy():e.remove(i)}}_insertViewFromCache(t,e){const i=this._viewCache.pop();return i&&e.insert(i,t),i||null}}const te=new c.OlP("_ViewRepeater"),Fe=["contentWrapper"],Me=["*"],ie=new c.OlP("VIRTUAL_SCROLL_STRATEGY");class ze{constructor(t,e,i){this._scrolledIndexChange=new R.xQ,this.scrolledIndexChange=this._scrolledIndexChange.pipe(function C(n,t){return e=>e.lift(new M(n,t))}()),this._viewport=null,this._itemSize=t,this._minBufferPx=e,this._maxBufferPx=i}attach(t){this._viewport=t,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(t,e,i){this._itemSize=t,this._minBufferPx=e,this._maxBufferPx=i,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(t,e){this._viewport&&this._viewport.scrollToOffset(t*this._itemSize,e)}_updateTotalContentSize(){!this._viewport||this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const t=this._viewport.getRenderedRange(),e={start:t.start,end:t.end},i=this._viewport.getViewportSize(),r=this._viewport.getDataLength();let o=this._viewport.measureScrollOffset(),h=this._itemSize>0?o/this._itemSize:0;if(e.end>r){const _=Math.ceil(i/this._itemSize),S=Math.max(0,Math.min(h,r-_));h!=S&&(h=S,o=S*this._itemSize,e.start=Math.floor(h)),e.end=Math.max(0,Math.min(r,e.start+_))}const v=o-e.start*this._itemSize;if(v<this._minBufferPx&&0!=e.start){const _=Math.ceil((this._maxBufferPx-v)/this._itemSize);e.start=Math.max(0,e.start-_),e.end=Math.min(r,Math.ceil(h+(i+this._minBufferPx)/this._itemSize))}else{const _=e.end*this._itemSize-(o+i);if(_<this._minBufferPx&&e.end!=r){const S=Math.ceil((this._maxBufferPx-_)/this._itemSize);S>0&&(e.end=Math.min(r,e.end+S),e.start=Math.max(0,Math.floor(h-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(h))}}function Pe(n){return n._scrollStrategy}let Be=(()=>{class n{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new ze(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=(0,w.su)(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=(0,w.su)(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=(0,w.su)(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=c.lG2({type:n,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[c._Bn([{provide:ie,useFactory:Pe,deps:[(0,c.Gpc)(()=>n)]}]),c.TTD]}),n})(),H=(()=>{class n{constructor(e,i,r){this._ngZone=e,this._platform=i,this._scrolled=new R.xQ,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new V.y(i=>{this._globalSubscription||this._addGlobalListener();const r=e>0?this._scrolled.pipe(G(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,O.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){const r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe((0,Te.h)(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){const i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let r=(0,w.fI)(i),o=e.getElementRef().nativeElement;do{if(r==o)return!0}while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,W.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return n.\u0275fac=function(e){return new(e||n)(c.LFG(c.R0b),c.LFG(P.t4),c.LFG(ee.K0,8))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),ne=(()=>{class n{constructor(e,i,r,o){this.elementRef=e,this.scrollDispatcher=i,this.ngZone=r,this.dir=o,this._destroyed=new R.xQ,this._elementScrolled=new V.y(h=>this.ngZone.runOutsideAngular(()=>(0,W.R)(this.elementRef.nativeElement,"scroll").pipe((0,Z.R)(this._destroyed)).subscribe(h)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const i=this.elementRef.nativeElement,r=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=r?e.end:e.start),null==e.right&&(e.right=r?e.start:e.end),null!=e.bottom&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&0!=(0,P._i)()?(null!=e.left&&(e.right=i.scrollWidth-i.clientWidth-e.left),2==(0,P._i)()?e.left=e.right:1==(0,P._i)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const i=this.elementRef.nativeElement;(0,P.Mq)()?i.scrollTo(e):(null!=e.top&&(i.scrollTop=e.top),null!=e.left&&(i.scrollLeft=e.left))}measureScrollOffset(e){const i="left",r="right",o=this.elementRef.nativeElement;if("top"==e)return o.scrollTop;if("bottom"==e)return o.scrollHeight-o.clientHeight-o.scrollTop;const h=this.dir&&"rtl"==this.dir.value;return"start"==e?e=h?r:i:"end"==e&&(e=h?i:r),h&&2==(0,P._i)()?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:h&&1==(0,P._i)()?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}}return n.\u0275fac=function(e){return new(e||n)(c.Y36(c.SBq),c.Y36(H),c.Y36(c.R0b),c.Y36(L.Is,8))},n.\u0275dir=c.lG2({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),n})(),re=(()=>{class n{constructor(e,i,r){this._platform=e,this._change=new R.xQ,this._changeListener=o=>{this._change.next(o)},this._document=r,i.runOutsideAngular(()=>{if(e.isBrowser){const o=this._getWindow();o.addEventListener("resize",this._changeListener),o.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect();return{top:-o.top||e.body.scrollTop||i.scrollY||r.scrollTop||0,left:-o.left||e.body.scrollLeft||i.scrollX||r.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(G(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return n.\u0275fac=function(e){return new(e||n)(c.LFG(P.t4),c.LFG(c.R0b),c.LFG(ee.K0,8))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Ue=typeof requestAnimationFrame<"u"?U.Z:y;let se=(()=>{class n extends ne{constructor(e,i,r,o,h,v,_){super(e,v,r,h),this.elementRef=e,this._changeDetectorRef=i,this._scrollStrategy=o,this._detachedSubject=new R.xQ,this._renderedRangeSubject=new R.xQ,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new V.y(S=>this._scrollStrategy.scrolledIndexChange.subscribe(I=>Promise.resolve().then(()=>this.ngZone.run(()=>S.next(I))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=Y.w.EMPTY,this._viewportChanges=_.change().subscribe(()=>{this.checkViewportSize()})}get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=(0,w.Ig)(e)}ngOnInit(){super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.elementScrolled().pipe((0,q.O)(null),G(0,Ue)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()}))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,Z.R)(this._detachedSubject)).subscribe(i=>{const r=i.length;r!==this._dataLength&&(this._dataLength=r,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function We(n,t){return n.start==t.start&&n.end==t.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,i="to-start"){const o="horizontal"==this.orientation,h=o?"X":"Y";let _=`translate${h}(${Number((o&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e=this.appendOnly&&"to-start"===i?0:e,"to-end"===i&&(_+=` translate${h}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=_&&(this._renderedContentTransform=_,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,i="auto"){const r={behavior:i};"horizontal"===this.orientation?r.start=e:r.top=e,this.scrollTo(r)}scrollToIndex(e,i="auto"){this._scrollStrategy.scrollToIndex(e,i)}measureScrollOffset(e){return super.measureScrollOffset(e||("horizontal"===this.orientation?"start":"top"))}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){const e=this.elementRef.nativeElement;this._viewportSize="horizontal"===this.orientation?e.clientWidth:e.clientHeight}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const i of e)i()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}return n.\u0275fac=function(e){return new(e||n)(c.Y36(c.SBq),c.Y36(c.sBO),c.Y36(c.R0b),c.Y36(ie,8),c.Y36(L.Is,8),c.Y36(H),c.Y36(re))},n.\u0275cmp=c.Xpm({type:n,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(e,i){if(1&e&&c.Gf(Fe,7),2&e){let r;c.iGM(r=c.CRH())&&(i._contentWrapper=r.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(e,i){2&e&&c.ekj("cdk-virtual-scroll-orientation-horizontal","horizontal"===i.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==i.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[c._Bn([{provide:ne,useExisting:n}]),c.qOj],ngContentSelectors:Me,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(e,i){1&e&&(c.F$t(),c.TgZ(0,"div",0,1),c.Hsn(2),c.qZA(),c._UZ(3,"div",2)),2&e&&(c.xp6(3),c.Udp("width",i._totalContentWidth)("height",i._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],encapsulation:2,changeDetection:0}),n})();function oe(n,t,e){if(!e.getBoundingClientRect)return 0;const r=e.getBoundingClientRect();return"horizontal"===n?"start"===t?r.left:r.right:"start"===t?r.top:r.bottom}let Ye=(()=>{class n{constructor(e,i,r,o,h,v){this._viewContainerRef=e,this._template=i,this._differs=r,this._viewRepeater=o,this._viewport=h,this.viewChange=new R.xQ,this._dataSourceChanges=new R.xQ,this.dataStream=this._dataSourceChanges.pipe((0,q.O)(null),function ue(){return n=>n.lift(new fe)}(),(0,Ie.w)(([_,S])=>this._changeDataSource(_,S)),function De(n,t,e){let i;return i=n&&"object"==typeof n?n:{bufferSize:n,windowTime:t,refCount:!1,scheduler:e},r=>r.lift(function Re({bufferSize:n=Number.POSITIVE_INFINITY,windowTime:t=Number.POSITIVE_INFINITY,refCount:e,scheduler:i}){let r,h,o=0,v=!1,_=!1;return function(I){let A;o++,!r||v?(v=!1,r=new Ee(n,t,i),A=r.subscribe(this),h=I.subscribe({next(Q){r.next(Q)},error(Q){v=!0,r.error(Q)},complete(){_=!0,h=void 0,r.complete()}}),_&&(h=void 0)):A=r.subscribe(this),this.add(()=>{o--,A.unsubscribe(),A=void 0,h&&!_&&e&&0===o&&(h.unsubscribe(),h=void 0,r=void 0)})}}(i))}(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new R.xQ,this.dataStream.subscribe(_=>{this._data=_,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,Z.R)(this._destroyed)).subscribe(_=>{this._renderedRange=_,this.viewChange.observers.length&&v.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,function Ve(n){return n&&"function"==typeof n.connect}(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new Oe(F(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(i,r)=>e(i+(this._renderedRange?this._renderedRange.start:0),r):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=(0,w.su)(e)}measureRangeSize(e,i){if(e.start>=e.end)return 0;const r=e.start-this._renderedRange.start,o=e.end-e.start;let h,v;for(let _=0;_<o;_++){const S=this._viewContainerRef.get(_+r);if(S&&S.rootNodes.length){h=v=S.rootNodes[0];break}}for(let _=o-1;_>-1;_--){const S=this._viewContainerRef.get(_+r);if(S&&S.rootNodes.length){v=S.rootNodes[S.rootNodes.length-1];break}}return h&&v?oe(i,"end",v)-oe(i,"start",h):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){!this._renderedRange||(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,i)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,i):i)),this._needsUpdate=!0)}_changeDataSource(e,i){return e&&e.disconnect(this),this._needsUpdate=!0,i?i.connect(this):(0,O.of)()}_updateContext(){const e=this._data.length;let i=this._viewContainerRef.length;for(;i--;){const r=this._viewContainerRef.get(i);r.context.index=this._renderedRange.start+i,r.context.count=e,this._updateComputedContextProperties(r.context),r.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(o,h,v)=>this._getEmbeddedViewArgs(o,v),o=>o.item),e.forEachIdentityChange(o=>{this._viewContainerRef.get(o.currentIndex).context.$implicit=o.item});const i=this._data.length;let r=this._viewContainerRef.length;for(;r--;){const o=this._viewContainerRef.get(r);o.context.index=this._renderedRange.start+r,o.context.count=i,this._updateComputedContextProperties(o.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,i){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:i}}}return n.\u0275fac=function(e){return new(e||n)(c.Y36(c.s_b),c.Y36(c.Rgc),c.Y36(c.ZZ4),c.Y36(te),c.Y36(se,4),c.Y36(c.R0b))},n.\u0275dir=c.lG2({type:n,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},features:[c._Bn([{provide:te,useClass:Ae}])]}),n})(),$=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({}),n})(),Ke=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[L.vT,$],L.vT,$]}),n})()},982:(z,b,u)=>{u.d(b,{P9:()=>E,Th:()=>x,gb:()=>w});class w{static equals(a,l,s){return s?this.resolveFieldData(a,s)===this.resolveFieldData(l,s):this.equalsByValue(a,l)}static equalsByValue(a,l){if(a===l)return!0;if(a&&l&&"object"==typeof a&&"object"==typeof l){var f,p,y,s=Array.isArray(a),d=Array.isArray(l);if(s&&d){if((p=a.length)!=l.length)return!1;for(f=p;0!=f--;)if(!this.equalsByValue(a[f],l[f]))return!1;return!0}if(s!=d)return!1;var T=a instanceof Date,V=l instanceof Date;if(T!=V)return!1;if(T&&V)return a.getTime()==l.getTime();var F=a instanceof RegExp,R=l instanceof RegExp;if(F!=R)return!1;if(F&&R)return a.toString()==l.toString();var O=Object.keys(a);if((p=O.length)!==Object.keys(l).length)return!1;for(f=p;0!=f--;)if(!Object.prototype.hasOwnProperty.call(l,O[f]))return!1;for(f=p;0!=f--;)if(!this.equalsByValue(a[y=O[f]],l[y]))return!1;return!0}return a!=a&&l!=l}static resolveFieldData(a,l){if(a&&l){if(this.isFunction(l))return l(a);if(-1==l.indexOf("."))return a[l];{let s=l.split("."),d=a;for(let f=0,p=s.length;f<p;++f){if(null==d)return null;d=d[s[f]]}return d}}return null}static isFunction(a){return!!(a&&a.constructor&&a.call&&a.apply)}static reorderArray(a,l,s){a&&l!==s&&(s>=a.length&&(s%=a.length,l%=a.length),a.splice(s,0,a.splice(l,1)[0]))}static insertIntoOrderedArray(a,l,s,d){if(s.length>0){let f=!1;for(let p=0;p<s.length;p++)if(this.findIndexInList(s[p],d)>l){s.splice(p,0,a),f=!0;break}f||s.push(a)}else s.push(a)}static findIndexInList(a,l){let s=-1;if(l)for(let d=0;d<l.length;d++)if(l[d]==a){s=d;break}return s}static contains(a,l){if(null!=a&&l&&l.length)for(let s of l)if(this.equals(a,s))return!0;return!1}static removeAccents(a){return a&&a.search(/[\xC0-\xFF]/g)>-1&&(a=a.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),a}static isEmpty(a){return null==a||""===a||Array.isArray(a)&&0===a.length||!(a instanceof Date)&&"object"==typeof a&&0===Object.keys(a).length}static isNotEmpty(a){return!this.isEmpty(a)}}var c=0;function x(){return"pr_id_"+ ++c}var E=function D(){let m=[];const d=f=>f&&parseInt(f.style.zIndex,10)||0;return{get:d,set:(f,p,y)=>{p&&(p.style.zIndex=String(((f,p)=>{let y=m.length>0?m[m.length-1]:{key:f,value:p},T=y.value+(y.key===f?0:p)+1;return m.push({key:f,value:T}),T})(f,y)))},clear:f=>{f&&((f=>{m=m.filter(p=>p.value!==f)})(d(f)),f.style.zIndex="")},getCurrent:()=>m.length>0?m[m.length-1].value:0}}()}}]);