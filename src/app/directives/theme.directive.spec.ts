import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeDirective } from './theme.directive';
import { AppComponent } from '../app.component';
import { ReactiveModule } from '../reactive/reactive.module';
import { By } from '@angular/platform-browser';

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
  it('Debe crear un DIV con el Background #333 y el color "snow"', () => {
    const elem: HTMLDivElement = fixture.debugElement.query(By.directive(ThemeDirective)).nativeElement;
    expect(elem).toBeTruthy();
    expect(elem.style.backgroundColor).toEqual('rgb(51, 51, 51)'); // #333
    expect(elem.style.color).toEqual('snow'); // #333
  });
});
