(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[980],{5399:(t,i,e)=>{"use strict";e.d(i,{b:()=>a});var n=e(3018),o=e(5468);let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-footer-index"]],decls:2,vars:0,template:function(t,i){1&t&&(n.TgZ(0,"footer"),n._UZ(1,"app-footer-puertto"),n.qZA())},directives:[o.q],styles:[""]}),t})()},3643:(t,i,e)=>{"use strict";e.d(i,{z:()=>H});var n=e(3018),o=e(8583),a=e(3722),s=e(4561),r=e(5341);const c=[{id:1,title:"Inicio",icons:`${s.D.urlRepositorio}img/IM\xc1GENES/img-celular-responsive/home.png`,link:`${r.C.Menu.menu}/${r.C.Menu.index}`,data_bs_toggle:"",data_bs_target:"",aria_controls:""},{id:2,title:"Perfil",icons:`${s.D.urlRepositorio}img/IM\xc1GENES/img-celular-responsive/user.png`,link:"",data_bs_toggle:"offcanvas",data_bs_target:"#offcanvasRightLogin",aria_controls:"offcanvasRightLogin"},{id:3,title:"Carrito",icons:`${s.D.urlRepositorio}img/IM\xc1GENES/img-celular-responsive/carrito.png`,link:"",data_bs_toggle:"offcanvas",data_bs_target:"#offcanvasRightCarrito",aria_controls:"offcanvasRightCarrito"}];var l=e(4157),f=e(6867),p=e(3496),d=e(7667),g=e(4692),C=e(4488),u=e(3862),m=e(6870),h=e(7657);function Z(t,i){if(1&t&&(n.TgZ(0,"span",22),n._uU(1),n.qZA()),2&t){const t=n.oxw(2);n.xp6(1),n.Oqu(t.totalCarrito)}}function _(t,i){if(1&t){const t=n.EpF();n.TgZ(0,"div",14),n.TgZ(1,"p",19),n.NdJ("click",function(){const i=n.CHM(t).$implicit;return n.oxw().irAlLink(i.link)}),n._UZ(2,"img",20),n.qZA(),n.YNc(3,Z,2,1,"span",21),n.qZA()}if(2&t){const t=i.$implicit,e=i.index;n.xp6(1),n.uIk("data-bs-toggle",t.data_bs_toggle)("data-bs-target",t.data_bs_target)("aria-controls",t.aria_controls),n.xp6(1),n.Q6J("src",t.icons,n.LSH)("alt",t.id),n.xp6(1),n.Q6J("ngIf",2===e)}}function v(t,i){1&t&&(n.ynx(0),n._UZ(1,"app-menu-users",23),n.BQk())}const b=["*"];let x=(()=>{class t{constructor(t,i,e){this.router=t,this.apiForm=i,this.tokenUser=e,this.listItems=c,this.emailUsuario=this.tokenUser.getTokenEmail()}ngOnInit(){this.verifyEmailUser(),this.totalItemsCarrito()}verifyEmailUser(){this.emailUsuario?(this.listItems[1].data_bs_target="#offcanvasRightUsers",this.listItems[1].aria_controls="offcanvasRightUsers"):(this.listItems[1].data_bs_target="#offcanvasRightLogin",this.listItems[1].aria_controls="offcanvasRightLogin")}irAlLink(t){t.length>0&&this.router.navigateByUrl(t)}totalItemsCarrito(){this.apiForm.productsLengthtotal.subscribe(t=>{this.totalCarrito=t})}}return t.\u0275fac=function(i){return new(i||t)(n.Y36(l.F0),n.Y36(f.f),n.Y36(p.B))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-menu-telephone"]],ngContentSelectors:b,decls:22,vars:6,consts:[[1,"container-fluid","bg-white","text-center","mt-3","mb-3","border-bottom"],[1,"row"],["width","104","height","63","viewBox","0 0 211 63","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M195.168 15.0746C186.832 15.0746 180.051 21.8272 180.051 30.1285C180.051 38.4299 186.832 45.1825 195.168 45.1825C203.504 45.1825 210.285 38.4299 210.285 30.1285C210.285 21.8272 203.525 15.0746 195.168 15.0746ZM195.168 40.2884C189.548 40.2884 184.966 35.7247 184.966 30.1285C184.966 24.5324 189.548 19.9687 195.168 19.9687C200.788 19.9687 205.371 24.5324 205.371 30.1285C205.371 35.7247 200.808 40.2884 195.168 40.2884Z","fill","#3F3F3F"],["d","M17.225 0V4.77018C29.439 4.81148 39.3097 14.6823 39.3097 26.8452C39.3097 39.0081 29.4182 48.8789 17.225 48.9202V53.6904C32.0726 53.6491 44.0999 41.6513 44.0999 26.8452C44.0999 12.039 32.0726 0.0413003 17.225 0Z","fill","#EA2313"],["d","M5.5087 27.1549C5.5087 27.0517 5.5087 26.9484 5.5087 26.8245C5.5087 26.7006 5.5087 26.618 5.5087 26.4941C5.6746 20.2578 10.8173 15.2398 17.1421 15.2398C17.1628 15.2398 17.2043 15.2398 17.225 15.2398C23.612 15.2811 28.7755 20.4643 28.7755 26.8245C28.7755 33.1848 23.612 38.368 17.225 38.4093H17.2043V43.2001H17.225C26.2663 43.1588 33.5864 35.8487 33.5864 26.8245C33.5864 17.8004 26.2663 10.4903 17.225 10.449C17.2043 10.449 17.1628 10.449 17.1421 10.449C12.6007 10.449 8.49481 12.2868 5.5087 15.2398C2.60554 18.1308 0.801438 22.075 0.697754 26.4528C0.697754 26.5767 0.697754 26.68 0.697754 26.8039C0.697754 26.9278 0.697754 27.031 0.697754 27.1549V62.983H5.5087V38.4093C5.52944 38.4299 5.52944 38.4299 5.55018 38.4506V27.8158C5.52944 27.5886 5.5087 27.3821 5.5087 27.1549Z","fill","#EA2313"],["d","M70.0833 31.2849C70.0833 36.8398 66.9106 40.2884 61.7886 40.2884C56.6666 40.2884 53.4938 36.8398 53.4938 31.2849V15.5908H48.3511V31.8425C48.3511 40.0406 53.6182 45.3477 61.7886 45.3477C69.9589 45.3477 75.226 40.0406 75.226 31.8425V15.5908H70.0833V31.2849Z","fill","#3F3F3F"],["d","M145.98 7.8678H140.838V9.89151V12.9477V15.591H138.432C138.411 15.591 138.391 15.591 138.37 15.591H134.202V20.1546H140.838V36.7367C140.838 42.6633 143.782 45.3272 150.397 45.3272H154.254V40.6396H150.895C146.831 40.6396 145.98 38.1409 145.98 36.0553V20.1546H154.254V15.591H145.98V7.8678Z","fill","#3F3F3F"],["d","M170.201 7.8678H165.058V12.9477C165.058 13.0097 165.058 13.051 165.058 13.1129V15.591H162.653C162.632 15.591 162.611 15.591 162.59 15.591H158.422V20.1546H165.058V36.7367C165.058 42.6633 168.003 45.3272 174.618 45.3272H178.475V40.6396H175.116C171.051 40.6396 170.201 38.1409 170.201 36.0553V20.1546H178.475V15.591H170.201V7.8678Z","fill","#3F3F3F"],["d","M129.971 15.5908H127.753C124.289 15.5908 120.661 16.3755 118.773 20.1545V15.5908H113.942V45.3477H119.085V30.6861C119.085 21.9717 123.895 20.1545 127.939 20.1545H129.971V15.5908Z","fill","#3F3F3F"],["d","M104.672 31.6773H109.463C109.504 31.1817 109.525 30.6861 109.504 30.2111C109.483 29.4058 109.4 28.5591 109.255 27.7331C107.928 20.5675 101.645 15.4463 94.3039 15.5495C87.1912 15.6528 81.1153 20.7946 79.8296 27.7331C79.643 28.7037 79.56 29.6949 79.5807 30.6861C79.5807 31.2643 79.643 31.8425 79.7259 32.462C80.7213 39.8547 87.0668 45.3477 94.532 45.3477C94.615 45.3477 94.6979 45.3477 94.7809 45.3477C99.5918 45.2651 104.009 42.9316 106.767 39.0494L102.599 36.6953C100.732 39.07 97.8292 40.6188 94.5528 40.6188C90.2602 40.6188 86.5898 37.9756 85.0968 34.2172C85.076 34.1966 85.076 34.1553 85.0553 34.1346C85.0138 34.0314 84.9723 33.9488 84.9516 33.8455C84.9516 33.8249 84.9309 33.8042 84.9309 33.7836C84.8686 33.5977 84.8064 33.4119 84.7442 33.2054C84.7442 33.1641 84.7235 33.1434 84.7235 33.1021C84.7028 33.0195 84.682 32.9163 84.6613 32.8337C84.6405 32.7717 84.6405 32.7304 84.6198 32.6685C84.5991 32.5859 84.5783 32.5033 84.5576 32.4207C84.5369 32.3587 84.5369 32.2761 84.5161 32.1935C84.4954 32.1109 84.4954 32.0283 84.4746 31.9457C84.4539 31.8631 84.4539 31.7805 84.4332 31.6979H95.6518H102.122H103.49L104.672 31.6773C104.693 31.4708 104.714 31.2643 104.735 31.0578C104.714 31.2849 104.693 31.4914 104.672 31.6773ZM86.4239 24.3465C86.5069 24.2432 86.5898 24.1193 86.6728 24.0161C86.6935 23.9954 86.7142 23.9748 86.735 23.9335C86.8179 23.8509 86.8801 23.7476 86.9631 23.665C86.9838 23.6237 87.0253 23.6031 87.046 23.5618C87.1082 23.4792 87.1912 23.4172 87.2741 23.3346C87.3156 23.2933 87.3571 23.252 87.3778 23.2107C87.44 23.1488 87.5022 23.0868 87.5852 23.0249C87.6266 22.9836 87.6889 22.9423 87.7303 22.8803C87.7511 22.8597 87.7718 22.8597 87.7718 22.839C87.8548 22.7771 87.9377 22.7151 87.9999 22.6532C88.0414 22.6325 88.0621 22.5912 88.1036 22.5706C88.2073 22.488 88.311 22.4054 88.3939 22.3434C88.4354 22.3228 88.4769 22.2815 88.5183 22.2608C88.5805 22.2195 88.6428 22.1576 88.7257 22.1163C88.7257 22.1163 88.7257 22.1163 88.7464 22.1163C90.3847 20.9805 92.3961 20.3197 94.5528 20.3197C99.2186 20.3197 103.138 23.4379 104.341 27.7124H84.7442C85.0967 26.4941 85.6567 25.379 86.3824 24.4084C86.4032 24.3671 86.4032 24.3671 86.4239 24.3465Z","fill","#3F3F3F"],[1,"mb-3","mt-3"],[1,"container-telephone"],["class","items-list",4,"ngFor","ngForOf"],[1,"items-list"],[1,"text-end",3,"white","width","heigth","tamano"],["data-bs-scroll","true","tabindex","-1","id","offcanvasRightLogin","aria-labelledby","offcanvasRightLoginLabel",1,"offcanvas","offcanvas-end","color-canvas","text-white"],["data-bs-scroll","true","tabindex","-1","id","offcanvasRightCarrito","aria-labelledby","offcanvasRightCarritoLabel",1,"offcanvas","offcanvas-end","text-white","color-canvas"],[4,"ngIf"],[3,"click"],[1,"img-fluid",3,"src","alt"],["class","total-position",4,"ngIf"],[1,"total-position"],["tabindex","-1","id","offcanvasRightUsers","aria-labelledby","offcanvasRightLabelUsers",1,"offcanvas","offcanvas-end"]],template:function(t,i){1&t&&(n.F$t(),n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.O4$(),n.TgZ(2,"svg",2),n._UZ(3,"path",3),n._UZ(4,"path",4),n._UZ(5,"path",5),n._UZ(6,"path",6),n._UZ(7,"path",7),n._UZ(8,"path",8),n._UZ(9,"path",9),n._UZ(10,"path",10),n.qZA(),n.qZA(),n.kcU(),n.TgZ(11,"div",1),n._UZ(12,"app-autocompletado-productos",11),n.qZA(),n.qZA(),n.TgZ(13,"div",12),n.YNc(14,_,4,6,"div",13),n.TgZ(15,"div",14),n._UZ(16,"app-item-nav",15),n.qZA(),n.qZA(),n.TgZ(17,"app-iniciar-sesion",16),n.Hsn(18,0,["class","text-center"]),n.qZA(),n._UZ(19,"app-carrito-items",17),n._UZ(20,"app-menu2"),n.YNc(21,v,2,0,"ng-container",18)),2&t&&(n.xp6(14),n.Q6J("ngForOf",i.listItems),n.xp6(2),n.Q6J("white","#fff")("width",32)("heigth",30)("tamano","0 0 20 10"),n.xp6(5),n.Q6J("ngIf",i.emailUsuario))},directives:[d.Q,o.sg,g.F,C.U,u.S,m.A,o.O5,h.W],styles:["*[_ngcontent-%COMP%]{font-family:Cardium B-Medium}.container-telephone[_ngcontent-%COMP%]{position:fixed;bottom:0;display:flex;z-index:100;background:#222224f0;width:100%;color:#fff;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;align-items:flex-end;padding:10px 0 0}.item-list[_ngcontent-%COMP%]{color:#fff}.color-canvas[_ngcontent-%COMP%]{background-color:#222224f0}.total-position[_ngcontent-%COMP%]{position:absolute;background-color:#ea2313;color:#fff;border:1px solid #ea2313;border-radius:50%;top:5px;width:1.2rem;height:1.2rem;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:12px;margin-left:30px}"]}),t})();function U(t,i){1&t&&n._UZ(0,"app-menu",4)}function w(t,i){1&t&&n._UZ(0,"app-menu-telephone",5)}let H=(()=>{class t{constructor(){this.width=0}ngOnInit(){this.onResize()}onResize(){this.width=window.innerWidth}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-menu-index"]],hostBindings:function(t,i){1&t&&n.NdJ("resize",function(t){return i.onResize(t)},!1,n.Jf7)},decls:7,vars:2,consts:[[1,"fixed-top"],["class","sticky-top",4,"ngIf"],[3,"resize"],["class","d-block d-sm-block d-md-none d-xl-none d-xxl-none",4,"ngIf"],[1,"sticky-top"],[1,"d-block","d-sm-block","d-md-none","d-xl-none","d-xxl-none"]],template:function(t,i){1&t&&(n.TgZ(0,"header",0),n.YNc(1,U,1,0,"app-menu",1),n.qZA(),n._UZ(2,"br"),n._UZ(3,"br"),n._UZ(4,"br"),n.TgZ(5,"div",2),n.NdJ("resize",function(){return i.onResize()},!1,n.Jf7),n.YNc(6,w,1,0,"app-menu-telephone",3),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngIf",i.width>680),n.xp6(5),n.Q6J("ngIf",i.width<680))},directives:[o.O5,a.M,x],styles:["@media screen and (max-width: 680px){br[_ngcontent-%COMP%]{display:none}}"]}),t})()},7980:(t,i,e)=>{"use strict";e.r(i),e.d(i,{PoliticasModule:()=>g});var n=e(8583),o=e(7014),a=e(4709),s=e(4157),r=e(5341),c=e(3018),l=e(3643),f=e(5399);const p=[{path:"",children:[{path:r.C.Politicas.politicasLuggo,component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-politicas"]],decls:4,vars:0,template:function(t,i){1&t&&(c._UZ(0,"app-menu-index"),c.TgZ(1,"p"),c._uU(2,"politicas works!"),c.qZA(),c._UZ(3,"app-footer-index"))},directives:[l.z,f.b],styles:[""]}),t})()}]}];let d=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[s.Bz.forChild(p)],s.Bz]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[n.ez,d,o.r,a.Y]]}),t})()}}]);