import { DataFormAdn } from '../helpers/DataFormAdnUsers';
import { BaseFormAdnUsers } from '../models/BaseFormAdnUser';
import { BaseFormNegocioAdn } from '../models/BaseFormNegocio';
import { BaseFormPagosAdn } from '../models/BaseFormPagosAdn';
import { BaseFormTerminarAdn } from '../models/BaseFormTerminar';
import { PositionStripperComponent } from '../position-stripper/position-stripper.component';
import { RegistrarAdnComponent } from '../registrar-adn.component';
import { FilterPaisPipe } from '../sobre-tu-negocio/pipe/filter-pais.pipe';
import { SobreTuNegocioComponent } from '../sobre-tu-negocio/sobre-tu-negocio.component';
import { TerminarRegistroComponent } from '../terminar-registro/terminar-registro.component';
import { TerminosCondicionesComponent } from '../terminos-condiciones/terminos-condiciones.component';
import { TusPagosComponent } from '../tus-pagos/tus-pagos.component';

export const DeclarationAdnUser = [
  RegistrarAdnComponent,
  PositionStripperComponent,
  SobreTuNegocioComponent,
  TusPagosComponent,
  TerminarRegistroComponent,
  TerminosCondicionesComponent,
  FilterPaisPipe,
];

export const ProvidersAdnUser = [
  BaseFormAdnUsers,
  BaseFormPagosAdn,
  BaseFormNegocioAdn,
  BaseFormTerminarAdn,
  DataFormAdn,
];
