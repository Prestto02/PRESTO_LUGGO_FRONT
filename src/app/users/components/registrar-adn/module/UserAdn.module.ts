import { CuentasSobreTiComponent } from '../cuentas-sobre-ti/cuentas-sobre-ti.component';
import { DataFormAdn } from '../helpers/DataFormAdnUsers';
import { BaseFormAdnUsers } from '../models/BaseFormAdnUser';
import { BaseFormNegocioAdn } from '../models/BaseFormNegocio';
import { BaseFormPagosAdn } from '../models/BaseFormPagosAdn';
import { BaseFormTerminarAdn } from '../models/BaseFormTerminar';
import { PositionStripperComponent } from '../position-stripper/position-stripper.component';
import { RegistrarAdnComponent } from '../registrar-adn.component';
import { ButtonFixedComponent } from '../shared/button-fixed/button-fixed.component';
import { MensajesApoyoComponent } from '../shared/mensajes-apoyo/mensajes-apoyo.component';
import { FilterCiudadPipe } from '../sobre-tu-negocio/pipe/filter-ciudad.pipe';
import { FilterPaisPipe } from '../sobre-tu-negocio/pipe/filter-pais.pipe';
import { SobreTuNegocioComponent } from '../sobre-tu-negocio/sobre-tu-negocio.component';
import { TerminarRegistroComponent } from '../terminar-registro/terminar-registro.component';
import { TerminosCondicionesComponent } from '../terminos-condiciones/terminos-condiciones.component';
import { FilterBancosPipe } from '../tus-pagos/pipe/filtar-bancos.pipe';
import { TusPagosComponent } from '../tus-pagos/tus-pagos.component';

export const DeclarationAdnUser = [
  RegistrarAdnComponent,
  PositionStripperComponent,
  SobreTuNegocioComponent,
  TusPagosComponent,
  TerminosCondicionesComponent,
  ButtonFixedComponent,
  MensajesApoyoComponent,
  FilterPaisPipe,
  CuentasSobreTiComponent,
  FilterCiudadPipe,
  TerminarRegistroComponent,
  FilterBancosPipe,
];

export const ProvidersAdnUser = [
  BaseFormAdnUsers,
  BaseFormPagosAdn,
  BaseFormNegocioAdn,
  BaseFormTerminarAdn,
  DataFormAdn,
];
