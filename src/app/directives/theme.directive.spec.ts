import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeDirective } from './theme.directive';
import { AppComponent } from '../app.component';
import { ReactiveModule } from '../reactive/reactive.module';

describe('ThemeDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ThemeDirective
      ],
      imports: [
        ReactiveModule,
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
