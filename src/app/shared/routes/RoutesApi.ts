export const UrlApi = {
  ApiUrl: 'https://ecovitali.presttoapp.net/Puertto/Calidad/Api/',
  //PERSONAS
  getPersonaId: 'api/usuario',
  persona: 'api/persona',

  //LOGIN, BUSCAR PERSONA, RESTABLECER CONTRASEÑA, CODIGO De ACTIVACION
  buscarUsuario: 'api/usuario/cambiar',
  passwordReset: 'api/usuario/cambiar_contraseña',
  usuario: 'api/USUARIO',
  login: 'api/login',
  codigoRecuperacion: 'api/usuario/comprobar',
  revisarCodigoActivacion: 'api/usuario/activacion',

  //LOGIN FACEBOOK, GOOGLE, MICROSOFT
  loginFacebook: 'auth/Singin',
  loginGoogle: 'Auth/Google',
  loginMicrosoft: '',

  //COLORES
  codigoColores: 'api/color',
  //CATEGORIAS Y ARTICULOS
  categorias: 'api/Familia/padres',
  articulos: 'api/articulo',
  verificarImg: 'api/multimedia/subiendo',
  categoriasrHijos: 'api/Familia/hijos/',
  categoriasPadres: 'api/categoria/padres',
  //Banco Y ADN
  banco: 'api/NombreBanco',
  registrarAdn: 'api/ADN',
  paises: 'api/paises',
  ciudad: 'api/ciudad/',
  //MARCAS
  marcas: 'api/marca',
  //COLECCION PARA LA LISTA DE DESEOS
  coleccionListaDeseos: 'api/ListaDeseos',
  traerColeccion: 'api/ListaDeseos/',
  putColeccionListaDeseos: 'api/detalle_lista',
  traerColeccionPorId: 'api/detalle_lista/',
  //LISTADOS DE PRODUCTOS
  listProductsUsers: 'api/articulo/listado/productos',
  //CARRITO, BUSCAR PRODUCTO,
  traerProductosCarrito: 'api/Articulo/listado',
  buscarProductos: 'api/Articulo/producto/',
  buscarProductoIndex: 'api/Buscador/palabras',
  traerProductosIndex: 'api/Buscador/',
  productos: '',
  carrito: '',
};
