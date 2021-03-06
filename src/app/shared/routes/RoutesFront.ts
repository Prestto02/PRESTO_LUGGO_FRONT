export const UrlFront = {
  //USUARIOS
  Users: {
    users: 'usuarios',
    put: 'registrar/:id/:users',
    post: 'registrar',
    adnRegistrar: 'adn-registrar',
  },
  //CLIENTE
  Cliente: {
    cliente: 'cliente',
    miCuenta: 'cuenta-cliente',
    perfilCliente: 'perfil-cliente',
    faceClientId: 'perfil-cliente/:id',
  },
  //LOGIN
  Login: {
    login: 'Login',
    iniciarSesion: 'iniciar-sesion',
    postRegister: 'registrar',
    buscarusuario: 'buscar-usuario',
    cambiarContrasena: 'cambiar-contrasena',
    google: 'auth-Externo',
  },
  //ACTIVAR CUENTA
  ActivarCuenta: {
    cuenta: 'cuenta',
    mensajeAlCorreo: 'mensaje-correo',
    enviarAlCorreo: 'mensaje-correo/:user',
    activar: 'activar-cuenta',
  },
  //MENU
  Menu: {
    menu: 'Menu',
    index: 'index',
    buscarGet: 'buscar-productos',
    buscar: 'buscar-productos/:nombre',
    quienesSomos: 'quienes-somos',
  },
  //ATENCION AL CLIENTE
  AtencionCliente: {
    atencion: 'atencion',
    atencionCliente: 'atencion-cliente',
  },
  //CARITO LISTA
  CarritoList: {
    carrito: 'carrito',
    carritoList: 'carrito-list',
  },
  //PAGAR
  Pagar: {
    pagar: 'pagar',
    processoPagar: 'proceso-pagar',
    verificarPago: 'verificar-pago',
  },
  //TIENDAS
  Tiendas: {
    tiendas: 'tiendas',
    listTiendas: 'list-tiendas',
  },
  //DEVOLUCIONES
  Devoluciones: {
    devolucion: 'devolucion',
    devolucionBlog: 'devolucion-del-producto',
  },
  //NOTICIAS
  Noticias: {
    noticias: 'noticias',
    noticiasBlog: 'noticias-productos',
  },
  //POLITICAS
  Politicas: {
    politicas: 'politicas',
    politicasLuggo: 'politicas-general',
  },
  //COMUNIDAD
  Comunidad: {
    comunidad: 'comunidad',
    comunidadGeneral: 'comunidad-general',
    chatOnline: 'chat-online',
  },
  //PRODUCTOS
  Productos: {
    detalleProducto: 'detalle-producto/:id',
    detalleGetProducto: 'detalle-producto/',
  },
  //LISTA DE DESEOS
  ListaDeseos: {
    listaDeseos: 'lista-de-deseos',
  },
  //COMPARAR PRODUCTOS
  CompararProductos: {
    compararProducto: 'comparar-productos',
  },
  //MANAGER VENDEDOR
  Manager: {
    managerVendedor: 'manager',
    vendedor: 'vendedor',
    listadoProductos: 'productos/listado',
    crearProducto: 'productos/crear',
    listaDePedidos: 'lista-pedidos',
    detalleListPedidosGet: 'detalle-pedidos',
    detalleListPedidos: 'detalle-pedidos/:id',
    dashborad: 'dashboard',
  },
  //LISTA DE PEDIDOS
  listaPedidos: {
    lista: 'lista',
    listado: 'lista-pedidos',
    getListado: 'lista-pedidos/:id',
  },
};
