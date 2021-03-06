export const UrlApi = {
  /* CALIDAD */
  ApiUrl: 'https://ecovitali.presttoapp.net/Puertto/Api/',
  //PERSONAS
  getPersonaId: 'api/usuario',
  persona: 'api/persona',

  //LOGIN, BUSCAR PERSONA, RESTABLECER CONTRASEÑA, CODIGO De ACTIVACION
  buscarUsuario: 'api/usuario/cambiar',
  passwordReset: 'api/usuario/cambiar_contraseña',
  usuario: 'api/USUARIO',
  login: 'api/login',
  cerrarSesionBackEnd: 'api/Login/SingOut',
  codigoRecuperacion: 'api/usuario/comprobar',
  revisarCodigoActivacion: 'api/usuario/activacion',

  //LOGIN FACEBOOK, GOOGLE, MICROSOFT
  loginFacebook: 'auth/Singin',
  loginGoogle: 'api/LoginExterno',
  loginMicrosoft: '',
  //INTENTOS DE BUSQUEDA
  busquedaIntentoUser: 'api/BusquedaFrecuente/Intentos/',
  //COLORES TALLAS ATRIBUTOS
  codigoColores: 'api/color',
  codigoTallas: 'api/Talla',

  //CATEGORIAS Y ARTICULOS
  categorias: 'api/categoria/padres',
  articulos: 'api/articulo',
  verificarImg: 'api/multimedia/subiendo',
  categoriasrHijos: 'api/categoria/hijos/',
  categoriasPadres: 'api/categoria/padres',
  paraCrearArticulo: 'api/nombre_articulo',
  detalleArticulo: 'api/articulo/profile/',
  //Banco Y ADN
  banco: 'api/NombreBanco',
  registrarAdn: 'api/ADN',
  paises: 'api/paises',
  ciudad: 'api/ciudad/',
  //MARCAS
  marcas: 'api/marca',
  material: 'api/material',
  //COLECCION PARA LA LISTA DE DESEOS
  coleccionListaDeseos: 'api/ListaDeseos',
  traerColeccion: 'api/ListaDeseos/',
  putColeccionListaDeseos: 'api/detalle_lista',
  traerColeccionPorId: 'api/detalle_lista/',
  //LISTADOS DE PRODUCTOS
  listProductsUsers: 'api/ADN/Mis-productos',
  //CARRITO, BUSCAR PRODUCTO,
  traerProductosCarrito: 'api/Articulo/listado',
  buscarProductos: 'api/Articulo/producto/',
  buscarProductoIndex: 'api/Buscador/palabras',
  traerProductosIndex: 'api/Buscador/',
  productos: '',
  carrito: '',
  //PRODUCTOS
  buscarProductoNombre: 'api/nombre_articulo/buscar/',

  //TERMINOS Y CONDIONCES
  terminosCondiciones: 'api/terminoCondicion/',

  //ENVIAR CARRITO
  carritoPostUser: 'api/carrito',

  //PARA PEDIR CARDS
  cardsApi: 'api/Cards/',

  //VENTA

  pagarUser: 'api/Venta',

  //LISTADO DE COMPRAS DE LOS CLIENTES
  listadoPedidos: 'api/pedido/mis-compras',
};
