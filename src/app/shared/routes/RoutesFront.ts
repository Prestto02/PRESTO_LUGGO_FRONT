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
    buscar: 'buscar-productos/:name/:categoria',
    quienesSomos: 'quienes-somos',
  },
  Productos:{
    detalleProducto:'detalle-producto',
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
    dashborad: 'dashboard',
  },
};
