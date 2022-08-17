import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css'],
})
export class DevolucionesComponent implements OnInit {
  data: string = `<div id=&quot;payment&quot;><script src=&quot;https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js&quot;></script><script type=&quot;text/javascript&quot; src=&quot;https://www.datafast.com.ec/js/dfAdditionalValidations1.js&quot;></script><script src=&quot;https://eu-prod.oppwa.com/v1/paymentWidgets.js?checkoutId=CB12B5FD5FD68C31984658E547C5419E.prod01-vm-tx08&quot;></script><form action=&quot;https://www.puertto.com/pagar/verificar-pago?metodo=exitoso&token=MTcwY2VjMDM1Y2FkNzcxNTY2MzNjYTQyMzU5N2IzYTk=&quot; class=&quot;paymentWidgets&quot; data-brands=&quot;VISA MASTER AMEX DINERS DISCOVER ALIA&quot;></form><script type=&quot;text/javascript&quot;>function logoDiferidos(){
    var credito = $(&quot;.wpwl-tipocredito&quot;).val();
    if(credito == &quot;00&quot;){
        $(&quot;.logoDiferidos&quot;).hide();
    }else{
        $(&quot;.logoDiferidos&quot;).show();
    }
}function styleButtonPay(value){
    value = value.toFixed(2);
    $(&quot;.wpwl-button-pay&quot;).html(&quot;<b style='color:white;'>Pagar $&quot;+value+&quot;</b>&quot;);
}$(&quot;#payment&quot;).click(function(){
        $(&quot;.wpwl-tipocredito&quot;).change(function() {
            var valor_credito = $(&quot;.wpwl-tipocredito&quot;).val();
            $.each([{&quot;id&quot;:1,&quot;tipocredito_id&quot;:1,&quot;meses&quot;:&quot;[0]&quot;,&quot;tipocredito_codigo&quot;:&quot;00&quot;},{&quot;id&quot;:3,&quot;tipocredito_id&quot;:3,&quot;meses&quot;:&quot;[3, 6, 9, 12]&quot;,&quot;tipocredito_codigo&quot;:&quot;02&quot;}], function(key, value) {
                if(value.tipocredito_codigo === valor_credito){
                    var cuotas = jQuery.parseJSON(value.meses);
                    var selectCuotas = &quot;&quot;;
                    for (index in cuotas) {
                        if(index == 0) var seleccionCuota = &quot;selected='selected'&quot;; else var seleccionCuota = &quot;&quot;;
                        selectCuotas = selectCuotas+&quot;<option value='&quot;+cuotas[index]+&quot;' &quot;+seleccionCuota+&quot;>&quot;+cuotas[index]+&quot;</option>&quot;;
                    }
                    $(&quot;.wpwl-cuotas&quot;).html(selectCuotas);
                }
            });
            logoDiferidos();
        });
    });function checkDiffer(){
        var diferidospago = [{&quot;id&quot;:1,&quot;tipocredito_id&quot;:1,&quot;meses&quot;:&quot;[0]&quot;,&quot;tipocredito_codigo&quot;:&quot;00&quot;},{&quot;id&quot;:3,&quot;tipocredito_id&quot;:3,&quot;meses&quot;:&quot;[3, 6, 9, 12]&quot;,&quot;tipocredito_codigo&quot;:&quot;02&quot;}];
        var valor_credito = $(&quot;.wpwl-tipocredito&quot;).val();
        var valor_cuota = $(&quot;.wpwl-cuotas&quot;).val();
        var selected_cuotas = diferidospago.find( credito => credito.tipocredito_codigo === valor_credito );
        if(selected_cuotas != null){
            var cuotas = jQuery.parseJSON(selected_cuotas.meses);
            var cuota = cuotas.indexOf(parseInt(valor_cuota));
            if(cuota >= 0) return true;
        }
        return false;
    }function checkTransaction(urlValidate,urlParameter){
    var validate = false;
    $.ajax({
        type: &quot;POST&quot;,
        async : false,
        dataType: &quot;Json&quot;,
        data: { url: urlValidate },
        url: urlParameter
    })
    .done(function( data, textStatus, jqXHR ) {
        validate = data.data.validate;
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( &quot;Error: &quot; +  textStatus);
    });
    return validate;
}function buttonPay(urlValidate,urlParameter,urlBlocked){
    if(checkDiffer()){
        return true;
    }else{
        alert(&quot;Verifique el tipo de crédito y diferido.&quot;);
    }
    return false;
}</script><script type=&quot;text/javascript&quot;>var wpwlOptions={onReady:function(){var tipocredito='<div class=&quot;wpwl-group wpwl-group-cardHolder wpwl-clearfix&quot;><div class=&quot;wpwl-label wpwl-label-custom style=&quot;display:inline-block&quot;>Tipo de credito:</div><div class=&quot;wpwl-wrapper wpwl-wrapper-custom wpwl-combo-box wpwl-tipo-credito&quot; style=&quot;display:inline-block&quot;><select class=&quot;wpwl-tipocredito&quot; name=&quot;customParameters[SHOPPER_TIPOCREDITO]&quot;><option value=&quot;00&quot; selected=\'selected\'>Transacción corriente</option><option value=&quot;02&quot; >Diferido con Intereses</option></select></div></div>';$(&quot;form.wpwl-form-card&quot;).find(&quot;.wpwl-button&quot;).before(tipocredito);var numberOfInstallmentsHtml='<div class=&quot;wpwl-group wpwl-group-cvv wpwl-clearfix&quot;><div class=&quot;wpwl-label wpwl-label-custom&quot; style=&quot;display:inline-block&quot;>Diferidos:</div><div class=&quot;wpwl-wrapper wpwl-wrapper-custom wpwl-combo-box&quot; sytle=&quot;display:inline-block&quot;><select class=&quot;wpwl-cuotas&quot; name=&quot;recurring.numberOfInstallments&quot;><option value=\'0\' selected=\'selected\'>0</option></select></div></div>';$(&quot;form.wpwl-form-card&quot;).find(&quot;.wpwl-button&quot;).before(numberOfInstallmentsHtml);var datafast= '<br/><br/><img class=&quot;logoDiferidos&quot; src=&quot;https://customer.iss.com.ec/images/dataweb/BANKS.png&quot; style=&quot;display:block;margin:0 auto; width:100%;&quot;>'; datafast = datafast + '<img src=&quot;https://www.datafast.com.ec/images/verified.png&quot; style=&quot;display:block;margin:0 auto; width:100%;&quot;>';$(&quot;form.wpwl-form-card&quot;).find(&quot;.wpwl-button&quot;).before(datafast); logoDiferidos(); styleButtonPay(1.87);},style:&quot;card&quot;,locale:&quot;es&quot;,labels:{cvv:&quot;CVV&quot;},brandDetectionPriority:[&quot;ALIA&quot;],registrations:{requireCvv:true,hideInitialPayentForms:true},onBeforeSubmitCard: function(){if($(&quot;.wpwl-control-cardHolder&quot;).val()===&quot;&quot;){$(&quot;.wpwl-control-cardHolder&quot;).addClass(&quot;wpwl-has-error&quot;);$(&quot;.wpwl-control-cardHolder&quot;).after(&quot;<div class='wpwl-hint wpwl-hint-cardHolderError'>Titular de la tarjeta no válido</div>&quot;);$(&quot;.wpwl-button-pay&quot;).addClass(&quot;wpwl-button-error&quot;).attr(&quot;disabled&quot;,&quot;disabled&quot;);return false;}else{if(buttonPay(&quot;https://api.iss.com.ec/payment/access/8d4cd57a19b011406b59bc6db8bd6683/170cec035cad77156633ca423597b3a9/341190d87ac794541267232a70afb550/validate&quot;,&quot;&quot;,&quot;https://www.puertto.com/pagar/verificar-pago?metodo=error&token=MTcwY2VjMDM1Y2FkNzcxNTY2MzNjYTQyMzU5N2IzYTk=&quot;)) return true; else return false;}}};</script></div>`;
  constructor() {}

  ngOnInit(): void {
    const element = <HTMLElement>document.querySelector('#modal-body-server');
    element.insertAdjacentHTML(
      'beforeend',
      `<iframe srcdoc="${this.data}" style="height: 500px;" height='500px' width='100%' id='iframeServer'></iframe>`
    );
    const iframe = <HTMLElement>document.querySelector('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '480px';
  }
}
