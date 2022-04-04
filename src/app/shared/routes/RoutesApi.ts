export const UrlApi = {
  ApiUrl: 'http://192.168.1.174:9595/',
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
  //CATEGORIAS Y ARTICULOS
  categorias: 'ApiPrueba/API/categoria/listado',
  articulos: 'ApiPrueba/API/articulo',
  verificarImg:'ApiPrueba/api/multimedia/subiendo',
  //CARRITO, BUSCAR PRODUCTO,
  traerProductosCarrito: 'ApiPrueba/API/Articulo/listado',
  buscarProductos: 'ApiPrueba/API/Articulo/producto/',
  productos: '',
  carrito: '',
};
