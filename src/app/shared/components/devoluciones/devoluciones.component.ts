import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css'],
})
export class DevolucionesComponent implements OnInit {
  dataName: string = `<div id="payment">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script type="text/javascript" src="https://www.datafast.com.ec/js/dfAdditionalValidations1.js"></script>
  <script
    src="https://eu-prod.oppwa.com/v1/paymentWidgets.js?checkoutId=47438A4C990ECCCDE7BD09BE018A2AA5.prod01-vm-tx04"></script>
  <form action="https://www.puertto.com//pagar/verificar-pago?metodo=exitoso&token=5f36c898f966d2478569a41f0ae57c5e"
    class="paymentWidgets" data-brands="VISA MASTER AMEX DINERS DISCOVER ALIA"></form>
  <script
    type="text/javascript">function logoDiferidos() { var credito = $(".wpwl-tipocredito").val(); if (credito == "00") { $(".logoDiferidos").hide(); } else { $(".logoDiferidos").show(); } } function styleButtonPay(value) { value = value.toFixed(2); $(".wpwl-button-pay").html("<b style='color:white;'>Pagar $" + value + "</b>"); } $("#payment").click(function () { $(".wpwl-tipocredito").change(function () { var valor_credito = $(".wpwl-tipocredito").val(); $.each([{ "id": 1, "tipocredito_id": 1, "meses": "[0]", "tipocredito_codigo": "00" }, { "id": 3, "tipocredito_id": 3, "meses": "[3, 6, 9, 12]", "tipocredito_codigo": "02" }], function (key, value) { if (value.tipocredito_codigo === valor_credito) { var cuotas = jQuery.parseJSON(value.meses); var selectCuotas = ""; for (index in cuotas) { if (index == 0) var seleccionCuota = "selected='selected'"; else var seleccionCuota = ""; selectCuotas = selectCuotas + "<option value='" + cuotas[index] + "' " + seleccionCuota + ">" + cuotas[index] + "</option>"; } $(".wpwl-cuotas").html(selectCuotas); } }); logoDiferidos(); }); }); function checkDiffer() { var diferidospago = [{ "id": 1, "tipocredito_id": 1, "meses": "[0]", "tipocredito_codigo": "00" }, { "id": 3, "tipocredito_id": 3, "meses": "[3, 6, 9, 12]", "tipocredito_codigo": "02" }]; var valor_credito = $(".wpwl-tipocredito").val(); var valor_cuota = $(".wpwl-cuotas").val(); var selected_cuotas = diferidospago.find(credito => credito.tipocredito_codigo === valor_credito); if (selected_cuotas != null) { var cuotas = jQuery.parseJSON(selected_cuotas.meses); var cuota = cuotas.indexOf(parseInt(valor_cuota)); if (cuota >= 0) return true; } return false; } function checkTransaction(urlValidate, urlParameter) { var validate = false; $.ajax({ type: "POST", async: false, dataType: "Json", data: { url: urlValidate }, url: urlParameter }).done(function (data, textStatus, jqXHR) { validate = data.data.validate; }).fail(function (jqXHR, textStatus, errorThrown) { console.log("Error: " + textStatus); }); return validate; } function buttonPay(urlValidate, urlParameter, urlBlocked) { if (checkDiffer()) { return true; } else { alert("Verifique el tipo de crédito y diferido."); } return false; }</script>
  <script
    type="text/javascript">var wpwlOptions = { onReady: function () { var tipocredito = '<div class="wpwl-group wpwl-group-cardHolder wpwl-clearfix"><div class="wpwl-label wpwl-label-custom style="display:inline-block">Tipo de credito:</div><div class="wpwl-wrapper wpwl-wrapper-custom wpwl-combo-box wpwl-tipo-credito" style="display:inline-block"><select class="wpwl-tipocredito" name="customParameters[SHOPPER_TIPOCREDITO]"><option value="00" selected=\'selected\'>Transacción corriente</option><option value="02" >Diferido con Intereses</option></select></div></div>'; $("form.wpwl-form-card").find(".wpwl-button").before(tipocredito); var numberOfInstallmentsHtml = '<div class="wpwl-group wpwl-group-cvv wpwl-clearfix"><div class="wpwl-label wpwl-label-custom" style="display:inline-block">Diferidos:</div><div class="wpwl-wrapper wpwl-wrapper-custom wpwl-combo-box" sytle="display:inline-block"><select class="wpwl-cuotas" name="recurring.numberOfInstallments"><option value=\'0\' selected=\'selected\'>0</option></select></div></div>'; $("form.wpwl-form-card").find(".wpwl-button").before(numberOfInstallmentsHtml); var datafast = '<br/><br/><img class="logoDiferidos" src="https://customer.iss.com.ec/images/dataweb/BANKS.png" style="display:block;margin:0 auto; width:100%;">'; datafast = datafast + '<img src="https://www.datafast.com.ec/images/verified.png" style="display:block;margin:0 auto; width:100%;">'; $("form.wpwl-form-card").find(".wpwl-button").before(datafast); logoDiferidos(); styleButtonPay(1.05); }, style: "card", locale: "es", labels: { cvv: "CVV" }, brandDetectionPriority: ["ALIA"], registrations: { requireCvv: true, hideInitialPayentForms: true }, onBeforeSubmitCard: function () { if ($(".wpwl-control-cardHolder").val() === "") { $(".wpwl-control-cardHolder").addClass("wpwl-has-error"); $(".wpwl-control-cardHolder").after("<div class='wpwl-hint wpwl-hint-cardHolderError'>Titular de la tarjeta no válido</div>"); $(".wpwl-button-pay").addClass("wpwl-button-error").attr("disabled", "disabled"); return false; } else { if (buttonPay("https://api.iss.com.ec/payment/access/8d4cd57a19b011406b59bc6db8bd6683/5f36c898f966d2478569a41f0ae57c5e/a2cff1b0734f91e10208773779fc037b/validate", "", "https://www.puertto.com//pagar/verificar-pago?metodo=error&token=5f36c898f966d2478569a41f0ae57c5e")) return true; else return false; } } };</script>
</div>`;
  constructor() {}

  ngOnInit(): void {
    const element = <HTMLElement>document.querySelector('#modal-body-server');
    element.insertAdjacentHTML(
      'beforeend',
      `<iframe srcdoc='${this.dataName}' style="height: 500px;" height='500px' width='100%' id='iframeServer'></iframe>`
    );
    const iframe = <HTMLElement>document.querySelector('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '480px';
  }
}
