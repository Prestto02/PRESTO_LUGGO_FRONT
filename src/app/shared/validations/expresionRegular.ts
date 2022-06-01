export const Expresion = {
  SoloNumeros: /^[0-9]+$/,
  NumerosYLetras: /^[A-Za-z0-9]+$/,
  CedulaTelefono: /[0-9]{2}[0-9]{8}/,
  SoloLetrasAcentosEspacios: /^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_,;"' ]+$/,
  Contrasena: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
  Sku: /^[A-Za-z0-9_-]+$/,
  DolarYCentavo: /^[0-9]+([,][0-9]+)?$/,
  DimensionConDecimales: /^[0-9]+([,][0-9]+)?$/,
  DimensionConComa: /^[0-9]+([.][0-9]+)?$/,
  TiempoDescpacho: /^[0-9]+$/,
};
