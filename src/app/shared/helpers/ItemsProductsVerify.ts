export class ItemsProductsVerify {
  constructor() {}

  //VERIFICAR EL CHANGE INPUTS
  verifyChangeInputs(e: any, res: any) {
    if (e.target.value <= 0) {
      e.target.value = 1;
    }
    if (res) {
      res[0].item = e.target.value;
      res[0].subtotal = res[0].precio * res[0].item; //MULTIPLICO CON El ITEM Y EL PRECIO
    } else {
      return;
    }
  }
  //INCREMENT ITEMS
  incrementItems(res: any) {
    res[0].item++; //HAGO LA SUMA
    res[0].subtotal = res[0].precio * res[0].item; //MULTIPLICO CON El ITEM Y EL PRECIO
  }
  //DESCREMENTAR ITEMS
  descrementsItems(res: any) {
    if (res[0].item > 1) {
      res[0].item = res[0].item - 1;
      res[0].subtotal = res[0].precio * res[0].item;
      return;
    }
  }
}
