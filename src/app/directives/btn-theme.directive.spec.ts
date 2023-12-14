import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { BtnThemeDirective } from './btn-theme.directive';
import { ReactiveModule } from '../reactive/reactive.module';
import { By } from '@angular/platform-browser';

describe('ThemeDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BtnThemeDirective
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
  it('Debería crear un botón con fondo rojo, texto color "snow", tamaño "6rem"', () => {
    const elem: HTMLDivElement = fixture.debugElement.query(By.directive(BtnThemeDirective)).nativeElement;
    expect(elem).toBeTruthy();
    expect(elem.style.backgroundColor).toEqual('purple');
    expect(elem.style.color).toEqual('snow');
    expect(elem.style.width).toEqual('6rem');
  });
});
