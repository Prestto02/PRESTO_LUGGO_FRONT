export const UrlFront = {
  //USUARIOS
  Users: {
    users: 'usuarios',
    put: 'registrar/:id/:users',
    post: 'registrar',
    perfilRegistrar: 'perfil-usuario',
    perfilUsuario: 'perfil-usuario/:id',
  },
  //LOGIN
  Login: {
    login: 'Login',
    iniciarSesion: 'iniciar-sesion',
    postRegister: 'registrar',
    buscarusuario: 'buscar-usuario',
    cambiarContrasena: 'cambiar/contrasena',
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
    detalleProducto: 'detalle-producto',
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
    dashborad: 'dashboard',
  },
};
