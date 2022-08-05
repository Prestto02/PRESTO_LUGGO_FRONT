import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaAdnClientComponent } from './plantilla-adn-client.component';

describe('PlantillaAdnClientComponent', () => {
  let component: PlantillaAdnClientComponent;
  let fixture: ComponentFixture<PlantillaAdnClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaAdnClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaAdnClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
