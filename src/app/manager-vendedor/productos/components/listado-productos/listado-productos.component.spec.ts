import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { ListadoProductosComponent } from './listado-productos.component';
import { FiltroPaginacionPipe } from './pipe/filtro-paginacion.pipe';

describe('ListadoProductosComponent', () => {
  let component: ListadoProductosComponent;
  let fixture: ComponentFixture<ListadoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        OrderModule,
      ],
      declarations: [ListadoProductosComponent, FiltroPaginacionPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
