"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[43],{5399:(I,g,o)=>{o.d(g,{b:()=>u});var t=o(5062),p=o(7867);let u=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(n){return new(n||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-footer-index"]],decls:2,vars:0,template:function(n,C){1&n&&(t.TgZ(0,"footer"),t._UZ(1,"app-footer-puertto"),t.qZA())},dependencies:[p.q]}),d})()},3656:(I,g,o)=>{o.d(g,{z:()=>R});var t=o(5062),p=o(6895),u=o(8245),d=o(4561),m=o(5341);const n=[{id:1,title:"Inicio",icons:`${d.D.urlRepositorio}img/IM\xc1GENES/img-celular-responsive/home.png`,link:`${m.C.Menu.menu}/${m.C.Menu.index}`,data_bs_toggle:"",data_bs_target:"",aria_controls:""},{id:2,title:"Perfil",icons:`${d.D.urlRepositorio}img/IM\xc1GENES/img-celular-responsive/user.png`,link:"",data_bs_toggle:"offcanvas",data_bs_target:"#offcanvasRightLogin",aria_controls:"offcanvasRightLogin"},{id:3,title:"Carrito",icons:`${d.D.urlRepositorio}img/IM\xc1GENES/img-celular-responsive/carrito.png`,link:"",data_bs_toggle:"offcanvas",data_bs_target:"#offcanvasRightCarrito",aria_controls:"offcanvasRightCarrito"}];var C=o(1030),Z=o(6867),h=o(3496),T=o(1092),_=o(4692),x=o(3862),b=o(4488),U=o(7667),A=o(6290);function e(i,l){if(1&i&&(t.TgZ(0,"span",22),t._uU(1),t.qZA()),2&i){const a=t.oxw(2);t.xp6(1),t.Oqu(a.totalCarrito)}}function r(i,l){if(1&i){const a=t.EpF();t.TgZ(0,"div",14)(1,"p",19),t.NdJ("click",function(){const M=t.CHM(a).$implicit,V=t.oxw();return t.KtG(V.irAlLink(M.link))}),t._UZ(2,"img",20),t.qZA(),t.YNc(3,e,2,1,"span",21),t.qZA()}if(2&i){const a=l.$implicit,c=l.index;t.xp6(1),t.uIk("data-bs-toggle",a.data_bs_toggle)("data-bs-target",a.data_bs_target)("aria-controls",a.aria_controls),t.xp6(1),t.Q6J("src",a.icons,t.LSH)("alt",a.id),t.xp6(1),t.Q6J("ngIf",2===c)}}function s(i,l){1&i&&(t.ynx(0),t._UZ(1,"app-menu-users",23),t.BQk())}const f=["*"];let y=(()=>{class i{constructor(a,c,v){this.router=a,this.apiForm=c,this.tokenUser=v,this.listItems=n,this.emailUsuario=this.tokenUser.getTokenEmail()}ngOnInit(){this.verifyEmailUser(),this.totalItemsCarrito()}verifyEmailUser(){this.emailUsuario?(this.listItems[1].data_bs_target="#offcanvasRightUsers",this.listItems[1].aria_controls="offcanvasRightUsers"):(this.listItems[1].data_bs_target="#offcanvasRightLogin",this.listItems[1].aria_controls="offcanvasRightLogin")}irAlLink(a){a.length>0&&this.router.navigateByUrl(a)}totalItemsCarrito(){this.apiForm.productsLengthtotal.subscribe(a=>{this.totalCarrito=a})}}return i.\u0275fac=function(a){return new(a||i)(t.Y36(C.F0),t.Y36(Z.f),t.Y36(h.B))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-menu-telephone"]],ngContentSelectors:f,decls:22,vars:6,consts:[[1,"container-fluid","bg-white","text-center","mt-3","mb-3","border-bottom"],[1,"row"],["width","104","height","63","viewBox","0 0 211 63","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M195.168 15.0746C186.832 15.0746 180.051 21.8272 180.051 30.1285C180.051 38.4299 186.832 45.1825 195.168 45.1825C203.504 45.1825 210.285 38.4299 210.285 30.1285C210.285 21.8272 203.525 15.0746 195.168 15.0746ZM195.168 40.2884C189.548 40.2884 184.966 35.7247 184.966 30.1285C184.966 24.5324 189.548 19.9687 195.168 19.9687C200.788 19.9687 205.371 24.5324 205.371 30.1285C205.371 35.7247 200.808 40.2884 195.168 40.2884Z","fill","#3F3F3F"],["d","M17.225 0V4.77018C29.439 4.81148 39.3097 14.6823 39.3097 26.8452C39.3097 39.0081 29.4182 48.8789 17.225 48.9202V53.6904C32.0726 53.6491 44.0999 41.6513 44.0999 26.8452C44.0999 12.039 32.0726 0.0413003 17.225 0Z","fill","#EA2313"],["d","M5.5087 27.1549C5.5087 27.0517 5.5087 26.9484 5.5087 26.8245C5.5087 26.7006 5.5087 26.618 5.5087 26.4941C5.6746 20.2578 10.8173 15.2398 17.1421 15.2398C17.1628 15.2398 17.2043 15.2398 17.225 15.2398C23.612 15.2811 28.7755 20.4643 28.7755 26.8245C28.7755 33.1848 23.612 38.368 17.225 38.4093H17.2043V43.2001H17.225C26.2663 43.1588 33.5864 35.8487 33.5864 26.8245C33.5864 17.8004 26.2663 10.4903 17.225 10.449C17.2043 10.449 17.1628 10.449 17.1421 10.449C12.6007 10.449 8.49481 12.2868 5.5087 15.2398C2.60554 18.1308 0.801438 22.075 0.697754 26.4528C0.697754 26.5767 0.697754 26.68 0.697754 26.8039C0.697754 26.9278 0.697754 27.031 0.697754 27.1549V62.983H5.5087V38.4093C5.52944 38.4299 5.52944 38.4299 5.55018 38.4506V27.8158C5.52944 27.5886 5.5087 27.3821 5.5087 27.1549Z","fill","#EA2313"],["d","M70.0833 31.2849C70.0833 36.8398 66.9106 40.2884 61.7886 40.2884C56.6666 40.2884 53.4938 36.8398 53.4938 31.2849V15.5908H48.3511V31.8425C48.3511 40.0406 53.6182 45.3477 61.7886 45.3477C69.9589 45.3477 75.226 40.0406 75.226 31.8425V15.5908H70.0833V31.2849Z","fill","#3F3F3F"],["d","M145.98 7.8678H140.838V9.89151V12.9477V15.591H138.432C138.411 15.591 138.391 15.591 138.37 15.591H134.202V20.1546H140.838V36.7367C140.838 42.6633 143.782 45.3272 150.397 45.3272H154.254V40.6396H150.895C146.831 40.6396 145.98 38.1409 145.98 36.0553V20.1546H154.254V15.591H145.98V7.8678Z","fill","#3F3F3F"],["d","M170.201 7.8678H165.058V12.9477C165.058 13.0097 165.058 13.051 165.058 13.1129V15.591H162.653C162.632 15.591 162.611 15.591 162.59 15.591H158.422V20.1546H165.058V36.7367C165.058 42.6633 168.003 45.3272 174.618 45.3272H178.475V40.6396H175.116C171.051 40.6396 170.201 38.1409 170.201 36.0553V20.1546H178.475V15.591H170.201V7.8678Z","fill","#3F3F3F"],["d","M129.971 15.5908H127.753C124.289 15.5908 120.661 16.3755 118.773 20.1545V15.5908H113.942V45.3477H119.085V30.6861C119.085 21.9717 123.895 20.1545 127.939 20.1545H129.971V15.5908Z","fill","#3F3F3F"],["d","M104.672 31.6773H109.463C109.504 31.1817 109.525 30.6861 109.504 30.2111C109.483 29.4058 109.4 28.5591 109.255 27.7331C107.928 20.5675 101.645 15.4463 94.3039 15.5495C87.1912 15.6528 81.1153 20.7946 79.8296 27.7331C79.643 28.7037 79.56 29.6949 79.5807 30.6861C79.5807 31.2643 79.643 31.8425 79.7259 32.462C80.7213 39.8547 87.0668 45.3477 94.532 45.3477C94.615 45.3477 94.6979 45.3477 94.7809 45.3477C99.5918 45.2651 104.009 42.9316 106.767 39.0494L102.599 36.6953C100.732 39.07 97.8292 40.6188 94.5528 40.6188C90.2602 40.6188 86.5898 37.9756 85.0968 34.2172C85.076 34.1966 85.076 34.1553 85.0553 34.1346C85.0138 34.0314 84.9723 33.9488 84.9516 33.8455C84.9516 33.8249 84.9309 33.8042 84.9309 33.7836C84.8686 33.5977 84.8064 33.4119 84.7442 33.2054C84.7442 33.1641 84.7235 33.1434 84.7235 33.1021C84.7028 33.0195 84.682 32.9163 84.6613 32.8337C84.6405 32.7717 84.6405 32.7304 84.6198 32.6685C84.5991 32.5859 84.5783 32.5033 84.5576 32.4207C84.5369 32.3587 84.5369 32.2761 84.5161 32.1935C84.4954 32.1109 84.4954 32.0283 84.4746 31.9457C84.4539 31.8631 84.4539 31.7805 84.4332 31.6979H95.6518H102.122H103.49L104.672 31.6773C104.693 31.4708 104.714 31.2643 104.735 31.0578C104.714 31.2849 104.693 31.4914 104.672 31.6773ZM86.4239 24.3465C86.5069 24.2432 86.5898 24.1193 86.6728 24.0161C86.6935 23.9954 86.7142 23.9748 86.735 23.9335C86.8179 23.8509 86.8801 23.7476 86.9631 23.665C86.9838 23.6237 87.0253 23.6031 87.046 23.5618C87.1082 23.4792 87.1912 23.4172 87.2741 23.3346C87.3156 23.2933 87.3571 23.252 87.3778 23.2107C87.44 23.1488 87.5022 23.0868 87.5852 23.0249C87.6266 22.9836 87.6889 22.9423 87.7303 22.8803C87.7511 22.8597 87.7718 22.8597 87.7718 22.839C87.8548 22.7771 87.9377 22.7151 87.9999 22.6532C88.0414 22.6325 88.0621 22.5912 88.1036 22.5706C88.2073 22.488 88.311 22.4054 88.3939 22.3434C88.4354 22.3228 88.4769 22.2815 88.5183 22.2608C88.5805 22.2195 88.6428 22.1576 88.7257 22.1163C88.7257 22.1163 88.7257 22.1163 88.7464 22.1163C90.3847 20.9805 92.3961 20.3197 94.5528 20.3197C99.2186 20.3197 103.138 23.4379 104.341 27.7124H84.7442C85.0967 26.4941 85.6567 25.379 86.3824 24.4084C86.4032 24.3671 86.4032 24.3671 86.4239 24.3465Z","fill","#3F3F3F"],[1,"mb-3","mt-3"],[1,"container-telephone"],["class","items-list",4,"ngFor","ngForOf"],[1,"items-list"],[1,"text-end",3,"white","width","heigth","tamano"],["data-bs-scroll","true","tabindex","-1","id","offcanvasRightLogin","aria-labelledby","offcanvasRightLoginLabel",1,"offcanvas","offcanvas-end","color-canvas","text-white"],["data-bs-scroll","true","tabindex","-1","id","offcanvasRightCarrito","aria-labelledby","offcanvasRightCarritoLabel",1,"offcanvas","offcanvas-end","text-white","color-canvas"],[4,"ngIf"],[3,"click"],[1,"img-fluid",3,"src","alt"],["class","total-position",4,"ngIf"],[1,"total-position"],["tabindex","-1","id","offcanvasRightUsers","aria-labelledby","offcanvasRightLabelUsers",1,"offcanvas","offcanvas-end","color-canvas","text-white"]],template:function(a,c){1&a&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8)(9,"path",9)(10,"path",10),t.qZA()(),t.kcU(),t.TgZ(11,"div",1),t._UZ(12,"app-autocompletado-productos",11),t.qZA()(),t.TgZ(13,"div",12),t.YNc(14,r,4,6,"div",13),t.TgZ(15,"div",14),t._UZ(16,"app-item-nav",15),t.qZA()(),t.TgZ(17,"app-iniciar-sesion",16),t.Hsn(18,0,["class","text-center"]),t.qZA(),t._UZ(19,"app-carrito-items",17)(20,"app-menu2"),t.YNc(21,s,2,0,"ng-container",18)),2&a&&(t.xp6(14),t.Q6J("ngForOf",c.listItems),t.xp6(2),t.Q6J("white","#fff")("width",32)("heigth",30)("tamano","0 0 20 10"),t.xp6(5),t.Q6J("ngIf",c.emailUsuario))},dependencies:[p.sg,p.O5,T.A,_.F,x.S,b.U,U.Q,A.W],styles:["*[_ngcontent-%COMP%]{font-family:Cardium B-Medium}.container-telephone[_ngcontent-%COMP%]{position:fixed;bottom:0;display:flex;z-index:100;background:#222224f0;width:100%;color:#fff;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;align-items:flex-end;padding:10px 0 0}.item-list[_ngcontent-%COMP%]{color:#fff}.color-canvas[_ngcontent-%COMP%]{background-color:#222224f0}.total-position[_ngcontent-%COMP%]{position:absolute;background-color:#ea2313;color:#fff;border:1px solid #ea2313;border-radius:50%;top:5px;width:1.2rem;height:1.2rem;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:12px;margin-left:30px}"]}),i})();function F(i,l){1&i&&t._UZ(0,"app-menu",4)}function H(i,l){1&i&&t._UZ(0,"app-menu-telephone",5)}let R=(()=>{class i{constructor(){this.width=0}ngOnInit(){this.onResize()}onResize(){this.width=window.innerWidth}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-menu-index"]],hostBindings:function(a,c){1&a&&t.NdJ("resize",function(M){return c.onResize(M)},!1,t.Jf7)},decls:7,vars:2,consts:[[1,"fixed-top"],["class","sticky-top",4,"ngIf"],[3,"resize"],["class","d-block d-sm-block d-md-none d-xl-none d-xxl-none",4,"ngIf"],[1,"sticky-top"],[1,"d-block","d-sm-block","d-md-none","d-xl-none","d-xxl-none"]],template:function(a,c){1&a&&(t.TgZ(0,"header",0),t.YNc(1,F,1,0,"app-menu",1),t.qZA(),t._UZ(2,"br")(3,"br")(4,"br"),t.TgZ(5,"div",2),t.NdJ("resize",function(){return c.onResize()},!1,t.Jf7),t.YNc(6,H,1,0,"app-menu-telephone",3),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngIf",c.width>680),t.xp6(5),t.Q6J("ngIf",c.width<680))},dependencies:[p.O5,u.M,y],styles:["@media screen and (max-width: 680px){br[_ngcontent-%COMP%]{display:none}}"]}),i})()},1043:(I,g,o)=>{o.r(g),o.d(g,{TiendasModule:()=>A});var t=o(6895),p=o(7014),u=o(4709),d=o(1030),m=o(5341),n=o(5062),C=o(3656),Z=o(5399);let h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-sections-banners"]],decls:4,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-xl-11","mx-auto"],["loading","lazy","src","https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/7/AmazonStores/ATVPDKIKX0DER/026ffb582fc18397aeaba4a1b237b671.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.png",1,"img-fluid"]],template:function(s,f){1&s&&(n.TgZ(0,"section",0)(1,"div",1)(2,"div",2),n._UZ(3,"img",3),n.qZA()()())}}),e})(),T=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-menu-tienda"]],decls:46,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-light"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","href","#",1,"nav-link","active"],["href","#",1,"nav-link"],[1,"nav-item","dropdown"],["id","navbarDropdown","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],["aria-labelledby","navbarDropdown",1,"dropdown-menu"],["href","#",1,"dropdown-item"],[1,"d-flex"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","me-2"],["type","submit",1,"btn","btn-outline-success"]],template:function(s,f){1&s&&(n.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),n._uU(3,"Twitch"),n.qZA(),n.TgZ(4,"button",3),n._UZ(5,"span",4),n.qZA(),n.TgZ(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),n._uU(10,"Inicio"),n.qZA()(),n.TgZ(11,"li",7)(12,"a",9),n._uU(13,"Sudaderas y pantalones de chandal"),n.qZA()(),n.TgZ(14,"li",7)(15,"a",9),n._uU(16,"Camisetas"),n.qZA()(),n.TgZ(17,"li",7)(18,"a",9),n._uU(19,"Ropas de abrigo"),n.qZA()(),n.TgZ(20,"li",7)(21,"a",9),n._uU(22,"Accesorios"),n.qZA()(),n.TgZ(23,"li",7)(24,"a",9),n._uU(25,"Perros"),n.qZA()(),n.TgZ(26,"li",7)(27,"a",9),n._uU(28,"Twitch Rivals"),n.qZA()(),n.TgZ(29,"li",10)(30,"a",11),n._uU(31," M\xe1s "),n.qZA(),n.TgZ(32,"ul",12)(33,"li")(34,"a",13),n._uU(35,"Tarjetas de regalos"),n.qZA()(),n.TgZ(36,"li")(37,"a",13),n._uU(38,"Gangas de 25$"),n.qZA()(),n.TgZ(39,"li")(40,"a",13),n._uU(41,"Promociones"),n.qZA()()()()(),n.TgZ(42,"form",14),n._UZ(43,"input",15),n.TgZ(44,"button",16),n._uU(45,"Search"),n.qZA()()()()())}}),e})(),_=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-seccion-products"]],decls:67,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-xl-6"],["src","https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/e/AmazonStores/ATVPDKIKX0DER/771bbaf1bf074bf2b4b1f0c31a1e51ff.w1044.h1032._CR0%2C0%2C1044%2C1032_SX1500_.jpg",1,"img-fluid"],[1,"col-xl-3","mx-auto",2,"width","17rem"],["src","https://m.media-amazon.com/images/I/810Hdtwj1VL._AC_UX569_.jpg",1,"img-fluid"],[1,"text-center"],["src","https://m.media-amazon.com/images/I/810Hdtwj1VL._AC_SX375_.jpg",1,"img-fluid"],[1,"col-xl-3"],["src","https://m.media-amazon.com/images/I/71l9qrw189L._AC_SX375_.jpg","alt",""],[1,"container-fluid","mb-3"],["src","https://create.vista.com/common/aa39abd5-528e-4969-b053-3993bbd02fdd.jpg","alt","",1,"img-fluid",2,"height","10rem"],[1,"card"],["src","https://images-na.ssl-images-amazon.com/images/S/stores-image-uploads-na-prod/d/AmazonStores/ATVPDKIKX0DER/1f284c0800bd1de63413dde1bb28c3a4.w1500.h1500._CR0%2C0%2C1500%2C1500_.jpg","alt","",1,"card-img"],[1,"card-img-overlay"]],template:function(s,f){1&s&&(n.TgZ(0,"section",0)(1,"div",1)(2,"div",2),n._UZ(3,"img",3),n.qZA(),n.TgZ(4,"div",4)(5,"div",1),n._UZ(6,"img",5),n.TgZ(7,"p",6),n._uU(8,"$54"),n.qZA()(),n.TgZ(9,"div",1),n._UZ(10,"img",7),n.TgZ(11,"p",6),n._uU(12,"$84"),n.qZA()()(),n.TgZ(13,"div",4)(14,"div",1),n._UZ(15,"img",5),n.TgZ(16,"p",6),n._uU(17,"$12"),n.qZA()(),n.TgZ(18,"div",1),n._UZ(19,"img",5),n.TgZ(20,"p",6),n._uU(21,"$22"),n.qZA()()()()(),n.TgZ(22,"section",0)(23,"div",1)(24,"div",8),n._UZ(25,"img",9),n.TgZ(26,"p",6),n._uU(27,"$20"),n.qZA()(),n.TgZ(28,"div",8),n._UZ(29,"img",9),n.qZA(),n.TgZ(30,"div",8),n._UZ(31,"img",9),n.qZA(),n.TgZ(32,"div",8),n._UZ(33,"img",9),n.qZA()()(),n.TgZ(34,"section",10)(35,"div",1),n._UZ(36,"img",11),n.qZA()(),n.TgZ(37,"section",0)(38,"div",1)(39,"div",2)(40,"div",12),n._UZ(41,"img",13),n.TgZ(42,"div",14)(43,"button"),n._uU(44,"*"),n.qZA(),n.TgZ(45,"button"),n._uU(46,"*"),n.qZA(),n.TgZ(47,"button"),n._uU(48,"*"),n.qZA()()()(),n.TgZ(49,"div",4)(50,"div",1),n._UZ(51,"img",5),n.TgZ(52,"p",6),n._uU(53,"$54"),n.qZA()(),n.TgZ(54,"div",1),n._UZ(55,"img",7),n.TgZ(56,"p",6),n._uU(57,"$84"),n.qZA()()(),n.TgZ(58,"div",4)(59,"div",1),n._UZ(60,"img",5),n.TgZ(61,"p",6),n._uU(62,"$12"),n.qZA()(),n.TgZ(63,"div",1),n._UZ(64,"img",5),n.TgZ(65,"p",6),n._uU(66,"$22"),n.qZA()()()()())}}),e})();const b=[{path:"",children:[{path:m.C.Tiendas.listTiendas,component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-tiendas"]],decls:5,vars:0,template:function(s,f){1&s&&n._UZ(0,"app-menu-index")(1,"app-sections-banners")(2,"app-menu-tienda")(3,"app-seccion-products")(4,"app-footer-index")},dependencies:[C.z,Z.b,h,T,_]}),e})()}]}];let U=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.Bz.forChild(b),d.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[t.ez,U,p.r,u.Y]}),e})()}}]);