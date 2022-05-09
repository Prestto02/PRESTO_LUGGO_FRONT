import { CardPrincipalComponent } from '../card-principal/card-principal.component';
import { CardSecundarioComponent } from '../card-secundario/card-secundario.component';
import { SparklinesLinealComponent } from '../card-secundario/sparklines-lineal/sparklines-lineal.component';
import { DashboardComponent } from '../dashboard.component';
import { GraficoBarrasComponent } from '../grafico-barras/grafico-barras.component';
import { LinealGraficoComponent } from '../lineal-grafico/lineal-grafico.component';
import { PastelGraficoComponent } from '../pastel-grafico/pastel-grafico.component';

export const DashBoardModuloDeclarations = [
  DashboardComponent, //DASHBOARDCOMPONENTS
  CardPrincipalComponent, //CARD PRINCIPAL COMPONENTE
  GraficoBarrasComponent, //GRAFICO BARRAS COMPONENTS
  CardSecundarioComponent, // DASHBOARD CARD SECUNDARIO
  LinealGraficoComponent, //LINEAL GRAFICO DASHBOARD
  PastelGraficoComponent, //GRAFICO PASTEL DASHBOARD
  SparklinesLinealComponent, //LINEAL SKELETON
];
