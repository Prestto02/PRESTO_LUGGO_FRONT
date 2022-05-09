export const UrlApi = {
  ApiUrl: 'https://192.168.20.104/',
  //PERSONAS
  getPersonaId: 'ApiPrueba/API/usuario',
  persona: 'ApiPrueba/API/persona',

  //LOGIN, BUSCAR PERSONA, RESTABLECER CONTRASEÑA, CODIGO De ACTIVACION
  buscarUsuario: 'ApiPrueba/API/usuario/cambiar',
  passwordReset: 'ApiPrueba/API/usuario/cambiar_contraseña',
  usuario: 'ApiPrueba/API/USUARIO',
  login: 'ApiPrueba/API/login',
  codigoRecuperacion: 'ApiPrueba/API/usuario/comprobar',
  revisarCodigoActivacion: 'ApiPrueba/API/usuario/activacion',

  //LOGIN FACEBOOK, GOOGLE, MICROSOFT
  loginFacebook: 'ApiPrueba/auth/Singin',
  loginGoogle: 'ApiPrueba/Auth/Google',
  loginMicrosoft: '',

  //COLORES
  codigoColores: 'ApiPrueba/api/color',
  //CATEGORIAS Y ARTICULOS
  categorias: 'ApiPrueba/api/Familia/padres',
  articulos: 'ApiPrueba/API/articulo',
  verificarImg: 'ApiPrueba/api/multimedia/subiendo',
  categoriasrHijos: 'ApiPrueba/api/Familia/hijos/',

  //COLECCION PARA LA LISTA DE DESEOS
  coleccionListaDeseos: 'ApiPrueba/api/ListaDeseos',
  traerColeccion: 'ApiPrueba/api/ListaDeseos/',
  putColeccionListaDeseos: 'ApiPrueba/api/detalle_lista',
  traerColeccionPorId: 'ApiPrueba/api/detalle_lista/',
  //PAGINACION
  paginacion: 'ApiPrueba/API/articulo/listado/productos',
  //CARRITO, BUSCAR PRODUCTO,
  traerProductosCarrito: 'ApiPrueba/API/Articulo/listado',
  buscarProductos: 'ApiPrueba/API/Articulo/producto/',
  productos: '',
  carrito: '',
};
