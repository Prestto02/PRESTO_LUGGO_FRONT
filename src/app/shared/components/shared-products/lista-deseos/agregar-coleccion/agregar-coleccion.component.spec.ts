import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FiltroPaginacionPipe } from 'src/app/manager-vendedor/productos/components/listado-productos/pipe/filtro-paginacion.pipe';
import { ToastConfig } from 'src/app/shared/Toasts/ToastsConfig';
import { CarritoItemsComponent } from '../../../index/menu-index/menu/carrito-items/carrito-items.component';
import { ListaDeseosComponent } from '../lista-deseos.component';

import { AgregarColeccionComponent } from './agregar-coleccion.component';

describe('AgregarColeccionComponent', () => {
  let component: AgregarColeccionComponent;
  let fixture: ComponentFixture<AgregarColeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        ToastConfig,
        HttpClientTestingModule,
      ],
      //BrowserDynamicTestingModule,
      declarations: [
        AgregarColeccionComponent,
        FiltroPaginacionPipe,
        CarritoItemsComponent,
      ],
      providers: [ListaDeseosComponent, CarritoItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarColeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
