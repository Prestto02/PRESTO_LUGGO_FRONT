(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[316],{9099:(t,e,i)=>{"use strict";i.d(e,{z:()=>n});var s=i(3018),o=i(5838);let n=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-menu-index"]],decls:5,vars:0,consts:[[1,"fixed-top"],[1,"sticky-top"]],template:function(t,e){1&t&&(s.TgZ(0,"header",0),s._UZ(1,"app-menu",1),s.qZA(),s._UZ(2,"br"),s._UZ(3,"br"),s._UZ(4,"br"))},directives:[o.M],styles:[""]}),t})()},316:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ListPedidosModule:()=>U});var s=i(8583),o=i(4157),n=i(5341),d=i(3018),r=i(1218),c=i(1841);let p=(()=>{class t{constructor(t){this.http=t}getPedidosUsers(){return this.http.get(`${r.E.ApiUrl}${r.E.listadoPedidos}`)}}return t.\u0275fac=function(e){return new(e||t)(d.LFG(c.eN))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var a=i(9099),l=i(4561);function u(t,e){if(1&t&&(d.ynx(0),d._UZ(1,"img",6),d.TgZ(2,"p"),d._uU(3),d.qZA(),d.TgZ(4,"p"),d._uU(5),d.qZA(),d.TgZ(6,"p"),d._uU(7),d.qZA(),d.TgZ(8,"p"),d._uU(9),d.qZA(),d.TgZ(10,"p"),d._uU(11),d.qZA(),d.TgZ(12,"p"),d._uU(13),d.qZA(),d.TgZ(14,"p",7),d._uU(15),d.qZA(),d.BQk()),2&t){const t=e.$implicit,i=d.oxw(3);d.xp6(1),d.Q6J("src",i.imgIcons+t.img,d.LSH),d.xp6(2),d.hij("id detalle venta:",t.id_detalle_venta,""),d.xp6(2),d.hij("nombre producto:",t.nombre_producto,""),d.xp6(2),d.hij(" nombre tienda: ",t.nombre_tienda,""),d.xp6(2),d.hij("cantidad comprada:",t.item,""),d.xp6(2),d.hij("iva:",t.iva?"IVa aplica":"",""),d.xp6(2),d.hij("Subtotal del producto: ",t.sub_Total_producto,""),d.xp6(2),d.hij("estado del pedido:",t.estado_pedido,"")}}function g(t,e){if(1&t&&(d.TgZ(0,"div",4),d.TgZ(1,"p"),d._uU(2),d.qZA(),d.TgZ(3,"p"),d._uU(4),d.qZA(),d.YNc(5,u,16,8,"ng-container",5),d.qZA()),2&t){const t=e.$implicit;d.xp6(2),d.hij("codigo de la venta: ",t.id_venta,""),d.xp6(2),d.hij("total a pagar:",t.Total,""),d.xp6(1),d.Q6J("ngForOf",t.detalle_venta)}}function Z(t,e){if(1&t&&(d.ynx(0),d.YNc(1,g,6,3,"div",3),d.BQk()),2&t){const t=d.oxw();d.xp6(1),d.Q6J("ngForOf",t.listPedidos)}}let f=(()=>{class t{constructor(){this.listPedidos=null,this.imgIcons=`${l.D.urlRepositorio}`}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-item-pedidos"]],inputs:{listPedidos:"listPedidos"},decls:3,vars:1,consts:[[1,"col-xl-12"],[1,"row","mx-3"],[4,"ngIf"],["class","col-xxl-12 col-xl-12",4,"ngFor","ngForOf"],[1,"col-xxl-12","col-xl-12"],[4,"ngFor","ngForOf"],["width","200px","height","200px",3,"src"],[1,"badge","badge-primary"]],template:function(t,e){1&t&&(d.TgZ(0,"div",0),d.TgZ(1,"div",1),d.YNc(2,Z,2,1,"ng-container",2),d.qZA(),d.qZA()),2&t&&(d.xp6(2),d.Q6J("ngIf",e.listPedidos))},directives:[s.O5,s.sg],styles:[""]}),t})();var h=i(6250);const m=[{path:"",children:[{path:n.C.listaPedidos.getListado,component:(()=>{class t{constructor(t){this.apiListPedidos=t,this.listPedidos=[]}ngOnInit(){this.getPedidosClient()}getPedidosClient(){this.apiListPedidos.getPedidosUsers().subscribe(t=>{this.listPedidos=t})}}return t.\u0275fac=function(e){return new(e||t)(d.Y36(p))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-list-pedidos"]],decls:6,vars:1,consts:[[3,"listPedidos"]],template:function(t,e){1&t&&(d._UZ(0,"app-menu-index"),d.TgZ(1,"section"),d.TgZ(2,"h4"),d._uU(3,"Lista de compras de los pedidos"),d.qZA(),d._UZ(4,"app-item-pedidos",0),d.qZA(),d._UZ(5,"app-footer-index")),2&t&&(d.xp6(4),d.Q6J("listPedidos",e.listPedidos))},directives:[a.z,f,h.b],styles:[""]}),t})()},{path:"**",redirectTo:n.C.Menu.index,pathMatch:"full"}]}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[o.Bz.forChild(m)],o.Bz]}),t})();var _=i(7014),v=i(4709);let U=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[s.ez,x,_.r,v.Y]]}),t})()}}]);