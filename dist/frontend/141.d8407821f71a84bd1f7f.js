(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[141],{6141:(t,o,n)=>{"use strict";n.r(o),n.d(o,{IndexMenuModule:()=>R});var e=n(8583),i=n(1841),r=n(7014),c=n(4157),a=n(5341),l=n(9031),s=n(1848),d=n(8894),g=n(3018),m=n(5838),x=n(4561),p=n(3496),u=n(1218);let f=(()=>{class t{constructor(t){this.http=t}getCardsById(t){return this.http.get(`${u.E.ApiUrl}${u.E.cardsApi}${t}`)}}return t.\u0275fac=function(o){return new(o||t)(g.LFG(i.eN))},t.\u0275prov=g.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const C="https://puertto-webapp.azurewebsites.net/puertto/general/";let Z=(()=>{class t{constructor(t){this.http=t}getBannersUSers(t){return this.http.get(` ${C}bannerindex?${t}`)}}return t.\u0275fac=function(o){return new(o||t)(g.LFG(i.eN))},t.\u0275prov=g.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function h(t,o){if(1&t&&(g.TgZ(0,"div"),g._UZ(1,"img",13),g.qZA()),2&t){const t=o.$implicit;g.Tol(0===o.index?"carousel-item active":"carousel-item"),g.xp6(1),g.s9C("src",t.url,g.LSH),g.Q6J("alt","img"+t.id)}}function M(t,o){if(1&t){const t=g.EpF();g.TgZ(0,"div",24),g.TgZ(1,"div",25),g.NdJ("click",function(){const o=g.CHM(t).$implicit;return g.oxw(3).verProductos(o.url_detalle_product)}),g._UZ(2,"img",26),g.qZA(),g.TgZ(3,"p",27),g.TgZ(4,"b"),g._uU(5),g.qZA(),g.qZA(),g.qZA()}if(2&t){const t=o.$implicit,n=g.oxw(3);g.xp6(2),g.Q6J("src",n.rutaImg+t.img,g.LSH)("alt",t.id),g.xp6(1),g.Q6J("title",t.title),g.xp6(2),g.Oqu(t.title)}}function _(t,o){if(1&t&&(g.ynx(0),g.TgZ(1,"div",11),g.YNc(2,M,6,4,"div",23),g.qZA(),g.BQk()),2&t){const t=g.oxw().$implicit;g.xp6(2),g.Q6J("ngForOf",t.img)}}function b(t,o){if(1&t){const t=g.EpF();g.ynx(0),g.TgZ(1,"div",29),g._UZ(2,"img",30),g.TgZ(3,"div",31),g.NdJ("click",function(){g.CHM(t);const o=g.oxw(2).$implicit;return g.oxw().verProductos(o.url)}),g.TgZ(4,"h4",32),g._uU(5),g.qZA(),g.qZA(),g.qZA(),g.BQk()}if(2&t){const t=g.oxw(2).$implicit,o=g.oxw();g.xp6(2),g.Q6J("src",o.rutaImg+t.img[0].img,g.LSH)("alt",t.img[0].id),g.xp6(3),g.Oqu(t.img[0].title)}}function O(t,o){if(1&t&&g._UZ(0,"img",30),2&t){const t=g.oxw(2).$implicit,o=g.oxw();g.Q6J("src",o.rutaImg+t.img[0].img,g.LSH)("alt",t.img[0].id)}}function P(t,o){if(1&t&&(g.YNc(0,b,6,3,"ng-container",19),g.YNc(1,O,1,2,"ng-template",null,28,g.W1O)),2&t){const t=g.MAs(2),o=g.oxw().index;g.Q6J("ngIf",0===o)("ngIfElse",t)}}function v(t,o){if(1&t){const t=g.EpF();g.TgZ(0,"div",14),g.TgZ(1,"div",15),g.TgZ(2,"div",16),g.TgZ(3,"h4",17),g.TgZ(4,"b"),g._uU(5),g.qZA(),g.qZA(),g.qZA(),g.TgZ(6,"div",18),g.YNc(7,_,3,1,"ng-container",19),g.YNc(8,P,3,2,"ng-template",null,20,g.W1O),g.qZA(),g.TgZ(10,"div",21),g.TgZ(11,"p",22),g.NdJ("click",function(){const o=g.CHM(t).$implicit;return g.oxw().verProductos(o.url)}),g._uU(12),g.qZA(),g.qZA(),g.qZA(),g.qZA()}if(2&t){const t=o.$implicit,n=g.MAs(9);g.xp6(5),g.Oqu(t.title),g.xp6(2),g.Q6J("ngIf",t.img.length>1)("ngIfElse",n),g.xp6(5),g.hij(" ",t.urlText," ")}}let A=(()=>{class t{constructor(t,o,n,e){this.router=t,this.token=o,this.cardsServi=n,this.bannerServi=e,this.arrayCarouselImg=[],this.arrayCardImg=[],this.rutaImg=`${x.D.urlRepositorio}`,this.idUser=this.token.getTokenId()}ngOnInit(){this.getCardsProducts(),this.getBannersOfUser()}getCardsProducts(){this.cardsServi.getCardsById(1).subscribe(t=>{this.arrayCardImg=t})}getBannersOfUser(){this.getBanner(this.idUser?"isSingIn=true":"false")}getBanner(t){this.bannerServi.getBannersUSers(t).subscribe(t=>{this.arrayCarouselImg=t})}verProductos(t){this.router.navigateByUrl(`${a.C.Menu.menu}${t}`)}}return t.\u0275fac=function(o){return new(o||t)(g.Y36(c.F0),g.Y36(p.B),g.Y36(f),g.Y36(Z))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-section-carousel"]],decls:16,vars:2,consts:[["id","carouselExampleControlsPrimario","data-bs-ride","carousel",1,"carousel","slide","carousel-fade","carousel-tamano","border-0","col-md-12","col-xl-12","mb-5","d-sm-none","d-none","d-xl-block","d-xxl-block","d-md-block","position-relative"],[1,"carousel-inner"],[3,"class",4,"ngFor","ngForOf"],["type","button","data-bs-target","#carouselExampleControlsPrimario","data-bs-slide","prev",1,"carousel-control-prev","btn-carousel","rounded-circle","mx-5","mt-5"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleControlsPrimario","data-bs-slide","next",1,"carousel-control-next","btn-carousel","rounded-circle","mx-5","mt-5"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"postion-absolute","bottom-0","mt-1","col-xl-12","col-xxl-12","col-sm-12","col-md-12","col-1","degradado"],[1,"position-absolute","start-50","top-img","translate-middle","col-xl-12","col-xxl-12","col-sm-12","col-md-12","col-12"],[1,"container-fluid"],[1,"row"],["class","col-md-3 col-3 col-sm-3 col-md-3 col-xl-3 col-xxl-3",4,"ngFor","ngForOf"],["loading","lazy",1,"d-block","w-100","img-fluid","h-auto",3,"src","alt"],[1,"col-md-3","col-3","col-sm-3","col-md-3","col-xl-3","col-xxl-3"],[1,"card","border"],[1,"card-text","mt-3","mx-3"],[1,"tittle-cards"],[1,"card-body"],[4,"ngIf","ngIfElse"],["imgOneList",""],[1,"card-body","cursor"],[1,"text-footer",3,"click"],["class","col-md-6 mb-1 col-xl-6 col-xxl-6",4,"ngFor","ngForOf"],[1,"col-md-6","mb-1","col-xl-6","col-xxl-6"],[1,"grid",3,"click"],["loading","lazy",1,"card-img-icon",3,"src","alt"],[1,"textOferta",3,"title"],["outherImg",""],[1,"grid-large"],["loading","lazy",1,"card-img-large",3,"src","alt"],[1,"img-overlay",3,"click"],[1,"text-center","text-white","text-font-white"]],template:function(t,o){1&t&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.YNc(2,h,2,4,"div",2),g.qZA(),g.TgZ(3,"button",3),g._UZ(4,"span",4),g.TgZ(5,"span",5),g._uU(6,"Atras"),g.qZA(),g.qZA(),g.TgZ(7,"button",6),g._UZ(8,"span",7),g.TgZ(9,"span",5),g._uU(10,"Siguiente"),g.qZA(),g.qZA(),g._UZ(11,"div",8),g.TgZ(12,"div",9),g.TgZ(13,"div",10),g.TgZ(14,"div",11),g.YNc(15,v,13,4,"div",12),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(2),g.Q6J("ngForOf",o.arrayCarouselImg),g.xp6(13),g.Q6J("ngForOf",o.arrayCardImg))},directives:[e.sg,e.O5],styles:[".textOferta[_ngcontent-%COMP%]{font-family:Cardium B-Medium}.carousel-tamano[_ngcontent-%COMP%]{height:840px}.border[_ngcontent-%COMP%]{border-radius:16px 16px 16px 16px;-moz-border-radius:16px 16px 16px 16px;-webkit-border-radius:16px 16px 16px 16px;border:0 solid #000}.card-img-bottom[_ngcontent-%COMP%]{width:100%;height:auto}.card-img-icon[_ngcontent-%COMP%]{max-width:147px;height:auto}.top-img[_ngcontent-%COMP%]{top:650px;z-index:1}.btn-carousel[_ngcontent-%COMP%]{width:40px;height:40px;color:#000;background:#302f2f;top:100px;border:2px solid #fff}.tittle-cards[_ngcontent-%COMP%]{font-family:Cardium B-Bold;font-size:21px}.text-footer[_ngcontent-%COMP%]{color:#ea2313;font-size:14px;font-family:Cardium B-Medium}.carousel-control-next-icon[_ngcontent-%COMP%], .carousel-control-prev-icon[_ngcontent-%COMP%]{width:1.2rem;height:1.2rem}.cursor[_ngcontent-%COMP%]{cursor:pointer}.degradado[_ngcontent-%COMP%]{background:linear-gradient(180deg,#f1f3f600,#f1f3f6);height:164px;bottom:15px;position:absolute;top:614px;z-index:1}.textOfertaIpad[_ngcontent-%COMP%]{display:none}.img-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:#1f04018c;display:flex;flex-direction:column;align-items:center;opacity:0;justify-content:center;transition:opacity .25s}.img-overlay[_ngcontent-%COMP%]:hover{opacity:1;cursor:pointer}.img-overlay[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{transform:translateY(20px);transition:.25s}.img-overlay[_ngcontent-%COMP%]:hover > *[_ngcontent-%COMP%]{transform:translateY(0)}.text-font-white[_ngcontent-%COMP%]{font-weight:600}.textOferta[_ngcontent-%COMP%]{font-size:15px;display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}.grid[_ngcontent-%COMP%]{max-width:150px;cursor:pointer}.grid[_ngcontent-%COMP%], .grid-large[_ngcontent-%COMP%]{display:flex;justify-content:center}.grid-large[_ngcontent-%COMP%]{max-width:340px;position:relative}.card-img-large[_ngcontent-%COMP%]{width:100%;height:343px}.card-img-icon[_ngcontent-%COMP%]{width:100%;height:129px;background-size:contain}@media screen and (max-width: 2200px){.top-img[_ngcontent-%COMP%]{top:800px}.carousel-tamano[_ngcontent-%COMP%]{height:1050px}.degradado[_ngcontent-%COMP%]{top:785px}.textOferta[_ngcontent-%COMP%]{font-size:15px}}@media screen and (max-width: 1700px){.top-img[_ngcontent-%COMP%]{top:650px}.carousel-tamano[_ngcontent-%COMP%]{height:840px}.degradado[_ngcontent-%COMP%]{top:614px}}@media screen and (max-width: 1400px){.top-img[_ngcontent-%COMP%]{top:560px}.carousel-tamano[_ngcontent-%COMP%]{height:750px}.degradado[_ngcontent-%COMP%]{top:525px}.textOferta[_ngcontent-%COMP%]{font-size:13px}.tittle-cards[_ngcontent-%COMP%]{font-size:18px}}@media screen and (max-width: 1300px){.top-img[_ngcontent-%COMP%]{top:534px}.carousel-tamano[_ngcontent-%COMP%]{height:720px}.degradado[_ngcontent-%COMP%]{top:470px}.card-img-large[_ngcontent-%COMP%]{max-height:333px}.textOferta[_ngcontent-%COMP%]{font-size:11.6px}.tittle-cards[_ngcontent-%COMP%]{font-size:17px}}@media screen and (max-width: 900px){.carousel-tamano[_ngcontent-%COMP%]{height:760px}.degradado[_ngcontent-%COMP%]{top:470px}}"]}),t})();const w=[{id:1,imgUrl:`${x.D.urlRepositorio}/img/IM\xc1GENES/Cards-section-2/users.png`,texto:"\xbfQuieres comprar?",url:`${a.C.Login.login}/${a.C.Login.postRegister}`},{id:2,imgUrl:`${x.D.urlRepositorio}/img/IM\xc1GENES/Cards-section-2/cliente.png`,texto:"\xbfQuieres vender?",url:`${a.C.Users.users}/${a.C.Users.adnRegistrar}`}],y=[{id:1,imgUrl:`${x.D.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/packit.png`,text:"Packit"},{id:2,imgUrl:`${x.D.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/minifu.png`,text:"Minifu"},{id:3,imgUrl:`${x.D.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/tulipan.png`,text:"Tulip\xe1n"},{id:4,imgUrl:`${x.D.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/caminosec.png`,text:"CaminosEC"}];function T(t,o){if(1&t){const t=g.EpF();g.TgZ(0,"div",39),g.TgZ(1,"div",35),g.TgZ(2,"div",40),g._UZ(3,"img",41),g.qZA(),g.TgZ(4,"div",42),g.TgZ(5,"button",43),g.NdJ("click",function(){const o=g.CHM(t).$implicit;return g.oxw(2).irALaRuta(o.url)}),g._uU(6),g.qZA(),g.qZA(),g.qZA(),g.qZA()}if(2&t){const t=o.$implicit;g.xp6(3),g.Q6J("src",t.imgUrl,g.LSH)("alt",t.id),g.xp6(3),g.Oqu(t.texto)}}function q(t,o){if(1&t){const t=g.EpF();g.ynx(0),g.TgZ(1,"div",9),g.TgZ(2,"div",35),g.TgZ(3,"div",36),g.NdJ("click",function(){return g.CHM(t),g.oxw().registerUser()}),g._UZ(4,"img",37),g.qZA(),g.YNc(5,T,7,3,"div",38),g.qZA(),g.qZA(),g.BQk()}if(2&t){const t=g.oxw();g.xp6(4),g.Q6J("src",t.atrasPng,g.LSH),g.xp6(1),g.Q6J("ngForOf",t.userCheck)}}function k(t,o){if(1&t){const t=g.EpF();g.TgZ(0,"div",44),g.TgZ(1,"div",45),g.TgZ(2,"div",46),g.TgZ(3,"b"),g.TgZ(4,"h4",47),g._uU(5,"\xbfA\xfan no tienes cuenta?"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(6,"div",48),g.TgZ(7,"span",49),g._uU(8,"o accede con"),g.qZA(),g.qZA(),g.TgZ(9,"div",50),g.TgZ(10,"button",51),g.NdJ("click",function(){return g.CHM(t),g.oxw().registerUser()}),g._uU(11,"Reg\xedstra tus datos aqu\xed "),g.qZA(),g.qZA(),g.TgZ(12,"div",52),g.TgZ(13,"a",53),g._UZ(14,"img",54),g.qZA(),g.TgZ(15,"a",53),g._UZ(16,"img",55),g.qZA(),g.qZA(),g.qZA(),g.qZA()}if(2&t){const t=g.oxw();g.xp6(13),g.Q6J("href",t.urlGoogle+"/Google",g.LSH),g.xp6(1),g.Q6J("src",t.cardIconsGoogle,g.LSH),g.xp6(1),g.Q6J("href",t.urlGoogle+"/Google",g.LSH),g.xp6(1),g.Q6J("src",t.cardIconsFacebook,g.LSH)}}function U(t,o){if(1&t&&(g.TgZ(0,"div",56),g._UZ(1,"img",57),g.TgZ(2,"p",58),g._uU(3),g.qZA(),g.qZA()),2&t){const t=o.$implicit;g.xp6(1),g.Q6J("src",t.imgUrl,g.LSH)("alt",t.id),g.xp6(2),g.Oqu(t.text)}}let z=(()=>{class t{constructor(t){this.router=t,this.urlGoogle=`${u.E.ApiUrl}${u.E.loginGoogle}`,this.arrayTiendas=y,this.userCheck=w,this.registerCheck=!1,this.atrasPng=`${x.D.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/atras.png`,this.cardIcons1=`${x.D.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/tecnologia.png`,this.cardIcons2=`${x.D.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/linea blanca.png`,this.cardIcons3=`${x.D.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/herramientas.png`,this.cardIconsFacebook=`${x.D.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Facebook - Original.png`,this.cardIconsGoogle=`${x.D.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Google - Original.png`,this.cardIconsMicrosoft=`${x.D.urlRepositorio}img/IM%C3%81GENES/Cards-section-2/Microsoft.png`}ngOnInit(){}irProductos(t){this.router.navigateByUrl(`${a.C.Menu.menu}/${a.C.Menu.buscarGet}/${t}`)}registerUser(){this.registerCheck=!this.registerCheck}irALaRuta(t){this.router.navigateByUrl(t)}}return t.\u0275fac=function(o){return new(o||t)(g.Y36(c.F0))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-section-noticias"]],decls:60,vars:6,consts:[[1,"container-fluid","col-md-12","col-12","col-sm-12","col-xl-12","py-xxl-3","py-xl-2","py-sm-4","py-4","mt-auto","mx-sm-2","mx-0"],[1,"row","mt-xxl-2","mt-xl-0"],[1,"col-md-4","col-xl-4","col-xxl-4","mt-xxl-5","mt-xl-4","mt-md-1"],[1,"col-md-12","col-12","col-xl-12","col-sm-12","mb-sm-3","mb-3"],[1,"card","border","mb-1"],[4,"ngIf","ngIfElse"],["notCheck",""],[1,"col-md-12","col-xl-12","col-sm-12","col-12","mt-xxl-4","mt-xl-4","mt-md-1"],[1,"card","border"],[1,"card-body"],[1,"row"],[1,"col-md-8","col-8","col-sm-8","col-xl-9","tltle-cards","mb-xxl-3","mb-xl-2"],[1,"col-md-4","col-xl-3","col-xxl-3","col-4","text-center","col-sm-4"],[1,"text-color-links",3,"click"],[1,"col-md-4","col-4","col-sm-4","col-xl-4","col-xxl-4","text-center","mt-xxl-3","mt-xl-2","mt-md-4"],["loading","lazy","alt","Tecnologia",1,"img-fluid",3,"src"],[1,"text-center","text-categorias","mt-3"],["loading","lazy","alt","linea blanca",1,"img-fluid",3,"src"],["loading","lazy","alt","Herramientas",1,"img-fluid",3,"src"],[1,"col-md-4","col-sm-12","col-12","col-xl-4","mt-5","mt-xxl-5","mt-xl-4","mt-md-1"],[1,"card-title","tltle-cards","mt-3"],[1,"text-adn"],[1,"row","mt-3","mx-auto"],["class","col-md-6 col-sm-6 col-6 col-xl-4 mx-xxl-4 mx-xl-4 mx-md-0 col-xxl-4",4,"ngFor","ngForOf"],[1,"col-md-12","col-sm-12","col-xl-12","col-12","mt-2","mt-xl-3","mt-xxl-2"],[1,"col-md-4","col-sm-12","col-12","col-xl-4","mt-5","mx-auto","mt-xxl-5","mt-xl-4","mt-md-1"],[1,"col-md-12","text-center","col-sm-12","col-12","col-xl-12","col-xxl-12"],[1,"ratio","ratio-16x9"],["width","962","height","541","src","https://www.youtube.com/embed/FGbu5wOEBgc","title","Puertto - M\xe1s que un Marketplace","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen",""],[1,"col-md-12","col-12","col-sm-12","col-xl-12","mx-2","mt-2"],["href","https://www.youtube.com/channel/UCHaAZJ1GjfPCKy3TZrAxDVw","target","_blank",1,"text-footer","btn","btn-dark"],["width","40","height","29","viewBox","0 0 24 29","fill","none","xmlns","http://www.w3.org/2000/svg"],["x","6","y","7","width","13","height","10","fill","white"],["d","M23 9.70998C23.0495 8.27864 22.7365 6.858 22.09 5.57998C21.6514 5.05558 21.0427 4.70169 20.37 4.57998C17.5875 4.32751 14.7936 4.22403 12 4.26998C9.21667 4.22194 6.43274 4.32208 3.66003 4.56998C3.11185 4.6697 2.60454 4.92683 2.20003 5.30998C1.30003 6.13998 1.20003 7.55998 1.10003 8.75998C0.954939 10.9175 0.954939 13.0824 1.10003 15.24C1.12896 15.9154 1.22952 16.5858 1.40003 17.24C1.5206 17.745 1.76455 18.2123 2.11003 18.6C2.51729 19.0034 3.03641 19.2752 3.60003 19.38C5.75594 19.6461 7.92824 19.7564 10.1 19.71C13.6 19.76 16.67 19.71 20.3 19.43C20.8775 19.3316 21.4112 19.0595 21.83 18.65C22.11 18.3699 22.3191 18.0271 22.44 17.65C22.7977 16.5526 22.9733 15.4041 22.96 14.25C23 13.69 23 10.31 23 9.70998ZM9.74003 14.85V8.65998L15.66 11.77C14 12.69 11.81 13.73 9.74003 14.85Z","fill","#FF0000"],[1,"mx-1","text-white","mt-2"],[1,"row","mx-xxl-auto"],[1,"col-xxl-12","col-xl-12","col-sm-12","col-md-12","col-12","cursor",3,"click"],["alt","atras",3,"src"],["class","col-xxl-6 col-xl-6 col-sm-6 col-md-6 col-6",4,"ngFor","ngForOf"],[1,"col-xxl-6","col-xl-6","col-sm-6","col-md-6","col-6"],[1,"col-xxl-12","col-xl-12","col-md-12","col-sm-12","col-12","mb-2"],[1,"img-fluid","mx-5",3,"src","alt"],[1,"col-xxl-12","col-xl-12","col-md-12","col-sm-12","col-12","mx-auto"],[1,"btn","btn-dark",3,"click"],[1,"card-body","mt-4"],[1,"row","mb-xxl-2","mb-xl-1"],[1,"col-md-8","col-8","col-xxl-7","col-sm-9","col-xl-7","mb-xl-3","mb-xxl-3","mb-md-4","mb-sm-3","mb-3"],[1,"tltle-cards"],[1,"col-xxl-5","col-xl-5","col-md-4","col-4","col-sm-3","text-center","mb-3"],[1,"cardium-b"],[1,"col-md-8","col-xl-7","col-xxl-7","col-8","col-sm-7","mb-3"],[1,"btn","btn-dark","input-group",3,"click"],[1,"col-md-4","col-4","col-xl-5","col-xxl-5","col-sm-5","mt-1","text-center","mb-3"],[1,"mx-1",3,"href"],["loading","lazy","alt","Icon google",3,"src"],["loading","lazy","alt","Icon Facebook",3,"src"],[1,"col-md-6","col-sm-6","col-6","col-xl-4","mx-xxl-4","mx-xl-4","mx-md-0","col-xxl-4"],["loading","lazy",1,"img-fluid",3,"src","alt"],[1,"text-center"]],template:function(t,o){if(1&t&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.TgZ(2,"div",2),g.TgZ(3,"div",3),g.TgZ(4,"div",4),g.YNc(5,q,6,2,"ng-container",5),g.YNc(6,k,17,4,"ng-template",null,6,g.W1O),g.qZA(),g.qZA(),g.TgZ(8,"div",7),g.TgZ(9,"div",8),g.TgZ(10,"div",9),g.TgZ(11,"div",10),g.TgZ(12,"div",11),g.TgZ(13,"b"),g._uU(14," Categor\xedas "),g.qZA(),g.qZA(),g.TgZ(15,"div",12),g.TgZ(16,"p",13),g.NdJ("click",function(){return o.irProductos("todos")}),g._uU(17,"Ver todo"),g.qZA(),g.qZA(),g.TgZ(18,"div",14),g._UZ(19,"img",15),g.TgZ(20,"p",16),g._uU(21,"Tecnolog\xeda"),g.qZA(),g.qZA(),g.TgZ(22,"div",14),g._UZ(23,"img",17),g.TgZ(24,"p",16),g._uU(25,"L\xednea Blanca"),g.qZA(),g.qZA(),g.TgZ(26,"div",14),g._UZ(27,"img",18),g.TgZ(28,"p",16),g._uU(29,"Herramientas"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(30,"div",19),g.TgZ(31,"div",8),g.TgZ(32,"div",9),g.TgZ(33,"h5",20),g._uU(34,"Tiendas "),g.TgZ(35,"span",21),g._uU(36,"ADN"),g.qZA(),g.qZA(),g.TgZ(37,"div",22),g.YNc(38,U,4,3,"div",23),g.qZA(),g.TgZ(39,"div",24),g.TgZ(40,"p",13),g.NdJ("click",function(){return o.irProductos("todos")}),g._uU(41,"Ver todo"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(42,"div",25),g.TgZ(43,"div",8),g.TgZ(44,"div",9),g.TgZ(45,"h5",20),g._uU(46,"Impulsamos tu "),g.TgZ(47,"span",21),g._uU(48,"NEGOCIO"),g.qZA(),g.qZA(),g.TgZ(49,"div",10),g.TgZ(50,"div",26),g.TgZ(51,"div",27),g._UZ(52,"iframe",28),g.qZA(),g.qZA(),g.TgZ(53,"div",29),g.TgZ(54,"a",30),g.O4$(),g.TgZ(55,"svg",31),g._UZ(56,"rect",32),g._UZ(57,"path",33),g.qZA(),g.kcU(),g.TgZ(58,"span",34),g._uU(59,"Suscr\xedbete"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&t){const t=g.MAs(7);g.xp6(5),g.Q6J("ngIf",o.registerCheck)("ngIfElse",t),g.xp6(14),g.Q6J("src",o.cardIcons1,g.LSH),g.xp6(4),g.Q6J("src",o.cardIcons2,g.LSH),g.xp6(4),g.Q6J("src",o.cardIcons3,g.LSH),g.xp6(11),g.Q6J("ngForOf",o.arrayTiendas)}},directives:[e.O5,e.sg],styles:[".border[_ngcontent-%COMP%]{border-radius:16px 16px 16px 16px;-moz-border-radius:16px 16px 16px 16px;-webkit-border-radius:16px 16px 16px 16px;border:0 solid #000}*[_ngcontent-%COMP%], .btn-color[_ngcontent-%COMP%]{font-family:Cardium B-Medium}.btn-color[_ngcontent-%COMP%]{background:#007bff;color:#fff}.btn[_ngcontent-%COMP%], .btn-color[_ngcontent-%COMP%]{font-size:14px}.cardium-b[_ngcontent-%COMP%]{font-family:Cardium B-light}.text-color-links[_ngcontent-%COMP%]{color:#ea2313;font-weight:500;cursor:pointer}.tltle-cards[_ngcontent-%COMP%]{font-family:Cardium B-Bold;font-size:21px}.cursor[_ngcontent-%COMP%]{cursor:pointer}.text-footer[_ngcontent-%COMP%]{color:#007bff}.text-categorias[_ngcontent-%COMP%], .text-footer[_ngcontent-%COMP%]{font-size:14px;font-family:Cardium B-Medium}.text-categorias[_ngcontent-%COMP%]{color:#000}.text-adn[_ngcontent-%COMP%]{color:#ea2313}.btn-dark[_ngcontent-%COMP%]{background-color:#3f3f3f}@media screen and (min-width: 1300px) and (max-width: 1436px){.text-footer[_ngcontent-%COMP%]{color:#007bff}.text-categorias[_ngcontent-%COMP%], .text-footer[_ngcontent-%COMP%]{font-size:12px;font-family:Cardium B-Medium}.text-categorias[_ngcontent-%COMP%]{color:#000}.tltle-cards[_ngcontent-%COMP%]{font-family:Cardium B-Bold;font-size:18px}.btn-color[_ngcontent-%COMP%]{background:#007bff;font-family:Cardium B-Medium;color:#fff;font-size:12.2px}}@media screen and (min-width: 1200px) and (max-width: 1299px){.text-footer[_ngcontent-%COMP%]{color:#007bff}.text-categorias[_ngcontent-%COMP%], .text-footer[_ngcontent-%COMP%]{font-size:12px;font-family:Cardium B-Medium}.text-categorias[_ngcontent-%COMP%]{color:#000}.tltle-cards[_ngcontent-%COMP%]{font-family:Cardium B-Bold;font-size:16px}.btn-color[_ngcontent-%COMP%]{background:#007bff;font-family:Cardium B-Medium;color:#fff;font-size:11px}}@media screen and (min-width: 1100px) and (max-width: 1199px){.text-footer[_ngcontent-%COMP%]{color:#007bff}.text-categorias[_ngcontent-%COMP%], .text-footer[_ngcontent-%COMP%]{font-size:12px;font-family:Cardium B-Medium}.text-categorias[_ngcontent-%COMP%]{color:#000}.tltle-cards[_ngcontent-%COMP%]{font-family:Cardium B-Bold;font-size:16px}.btn-color[_ngcontent-%COMP%]{background:#007bff;font-family:Cardium B-Medium;color:#fff;font-size:11px}}@media screen and (min-width: 1000px) and (max-width: 1099px){.text-footer[_ngcontent-%COMP%]{color:#007bff}.text-categorias[_ngcontent-%COMP%], .text-footer[_ngcontent-%COMP%]{font-size:12px;font-family:Cardium B-Medium}.text-categorias[_ngcontent-%COMP%]{color:#000}.tltle-cards[_ngcontent-%COMP%]{font-family:Cardium B-Bold;font-size:16px}.btn-color[_ngcontent-%COMP%]{background:#007bff;font-family:Cardium B-Medium;color:#fff;font-size:11px}}@media screen and (min-width: 766px) and (max-width: 1020px){.text-footer[_ngcontent-%COMP%]{color:#007bff}.text-categorias[_ngcontent-%COMP%], .text-footer[_ngcontent-%COMP%]{font-size:12px;font-family:Cardium B-Medium}.text-categorias[_ngcontent-%COMP%]{color:#000}.tltle-cards[_ngcontent-%COMP%]{font-family:Cardium B-Bold;font-size:16px}.btn-color[_ngcontent-%COMP%]{background:#007bff;font-family:Cardium B-Medium;color:#fff;font-size:11px}}@media screen and (min-width: 1200px) and (max-width: 1299px){.top-img[_ngcontent-%COMP%]{top:534px;z-index:1}.carousel-tamano[_ngcontent-%COMP%]{height:720px}.degradado[_ngcontent-%COMP%]{background:linear-gradient(180deg,#f1f3f600,#f1f3f6);height:164px;position:absolute;top:460px;z-index:1}.textOferta[_ngcontent-%COMP%]{font-family:Cardium B-Medium;font-size:13px}.tittle-cards[_ngcontent-%COMP%]{font-family:Cardium B-Bold;font-size:18px}}@media screen and (min-width: 1100px) and (max-width: 1199px){.top-img[_ngcontent-%COMP%]{top:495px;z-index:1}.carousel-tamano[_ngcontent-%COMP%]{height:700px}.degradado[_ngcontent-%COMP%]{background:linear-gradient(180deg,#f1f3f600,#f1f3f6);height:164px;position:absolute;top:374px;z-index:1}.textOferta[_ngcontent-%COMP%]{font-family:Cardium B-Medium;font-size:13px}.tittle-cards[_ngcontent-%COMP%]{font-family:Cardium B-Bold;font-size:18px}}@media screen and (min-width: 1000px) and (max-width: 1099px){.top-img[_ngcontent-%COMP%]{top:475px;z-index:1}.carousel-tamano[_ngcontent-%COMP%]{height:690px}.degradado[_ngcontent-%COMP%]{background:linear-gradient(180deg,#f1f3f600,#f1f3f6);height:164px;position:absolute;top:325px;z-index:1}.textOferta[_ngcontent-%COMP%]{font-family:Cardium B-Medium;font-size:13px}.tittle-cards[_ngcontent-%COMP%]{font-family:Cardium B-Bold;font-size:18px}}"]}),t})(),B=(()=>{class t{constructor(t){this.http=t}getElementsBannersOfertas(){return this.http.get(`${C}bannercruzindex`)}}return t.\u0275fac=function(o){return new(o||t)(g.LFG(i.eN))},t.\u0275prov=g.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function I(t,o){if(1&t&&(g.TgZ(0,"div",4),g.TgZ(1,"div",5),g._UZ(2,"img",6),g.qZA(),g.qZA()),2&t){const t=o.$implicit;g.xp6(2),g.s9C("src",t.imgRuta,g.LSH)}}let E=(()=>{class t{constructor(t){this.apiBanerCards=t,this.arrayOfertasImg=[]}ngOnInit(){this.getSectionOfertas()}getSectionOfertas(){this.apiBanerCards.getElementsBannersOfertas().subscribe(t=>{this.arrayOfertasImg=t})}}return t.\u0275fac=function(o){return new(o||t)(g.Y36(B))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-section-cards-ofertas"]],decls:4,vars:1,consts:[[1,"container-fluid","py-4"],[1,"card","card-border"],[1,"row","mx-auto","mb-2","mt-2","p-3","container-responsive"],["class","col-md-6 col-xl-6 col-xxl-6 col-12 col-sm-12 mt-2 mb-4",4,"ngFor","ngForOf"],[1,"col-md-6","col-xl-6","col-xxl-6","col-12","col-sm-12","mt-2","mb-4"],[1,"card","text-white","border-0"],["loading","lazy","alt","img-ofertas-1",1,"img-fluid",3,"src"]],template:function(t,o){1&t&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.TgZ(2,"div",2),g.YNc(3,I,3,1,"div",3),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(3),g.Q6J("ngForOf",o.arrayOfertasImg))},directives:[e.sg],styles:[".card-border[_ngcontent-%COMP%]{border-radius:16px 16px 16px 16px;-moz-border-radius:16px 16px 16px 16px;-webkit-border-radius:16px 16px 16px 16px;border:1px solid #d1d1d1}.text-titulo[_ngcontent-%COMP%]{color:#282828;font-family:Cardium A-Bold;font-size:42px}.text-ofertas[_ngcontent-%COMP%]{font-size:42px;font-family:Cardium B-SemiBold;color:#fff}@media screen and (max-width: 820px){.text-titulo[_ngcontent-%COMP%]{font-size:23px}.text-tecnologia[_ngcontent-%COMP%]{position:absolute;top:-40px}.text-ofertas[_ngcontent-%COMP%]{font-size:26px;margin-top:0}.container-responsive[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;overflow-x:auto}.container-responsive[_ngcontent-%COMP%]::-webkit-scrollbar{height:3px;display:none}.container-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#ea2313;border-radius:4px}}@media screen and (max-width: 290px){.text-ofertas[_ngcontent-%COMP%], .text-titulo[_ngcontent-%COMP%]{font-size:15px}}"]}),t})();var $=n(3013);let S=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-secciones"]],decls:8,vars:0,consts:[[1,"py-4"]],template:function(t,o){1&t&&(g.TgZ(0,"section"),g._UZ(1,"app-section-carousel"),g.qZA(),g.TgZ(2,"section"),g._UZ(3,"app-section-noticias"),g.qZA(),g.TgZ(4,"section"),g._UZ(5,"app-section-cards-ofertas"),g.qZA(),g.TgZ(6,"section",0),g._UZ(7,"app-section-servicios"),g.qZA())},directives:[A,z,E,$.V],styles:[""]}),t})();var N=n(532),F=n(6250);const J=[{path:"",children:[{path:a.C.Menu.index,component:(()=>{class t{constructor(t){this._route=t,this.nombre=this._route.snapshot.paramMap.get("nombre"),this.categoria=this._route.snapshot.paramMap.get("categoria")}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(g.Y36(c.gz))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-index"]],decls:9,vars:0,template:function(t,o){1&t&&(g.TgZ(0,"header"),g._UZ(1,"app-menu"),g.qZA(),g._UZ(2,"br"),g._UZ(3,"br"),g._UZ(4,"br"),g._UZ(5,"app-secciones"),g.TgZ(6,"section"),g._UZ(7,"app-shared-products"),g.qZA(),g._UZ(8,"app-footer-index"))},directives:[m.M,S,N.y,F.b],styles:["*[_ngcontent-%COMP%]{background-color:#f1f3f6}header[_ngcontent-%COMP%]{position:fixed;top:0;z-index:1030;width:100%;border-bottom:1px solid #9d9d9d}"]}),t})()},{path:a.C.Menu.buscar,component:s.i},{path:a.C.ListaDeseos.listaDeseos,component:d.P},{path:a.C.Productos.detalleProducto,component:l.J},{path:"**",redirectTo:a.C.Menu.index,pathMatch:"full"}]}];let G=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[c.Bz.forChild(J)],c.Bz]}),t})();var Q=n(4709),L=n(4971),Y=n(4132),H=n(8835);let R=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[e.ez,G,i.JF,r.r,H.c,Q.Y,L.SharedProductosModule,Y.C]]}),t})()}}]);