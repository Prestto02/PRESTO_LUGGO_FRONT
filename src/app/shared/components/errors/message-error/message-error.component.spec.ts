import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FormErrorsContainerComponent } from '../form-errors-container/form-errors-container.component';
import { MessageErrorComponent } from './message-error.component';

describe('MessageErrorComponent', () => {
  let component: MessageErrorComponent;
  let fixture: ComponentFixture<MessageErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [MessageErrorComponent, FormErrorsContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
