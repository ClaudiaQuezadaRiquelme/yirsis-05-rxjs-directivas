import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaMouseDirective } from './area-mouse.directive';
import { ReactiveContainerComponent } from '../reactive-container/reactive-container.component';
import { ReactiveModule } from '../reactive.module';
import { By } from '@angular/platform-browser';

describe('AreaMouseDirective', () => {
  let component: ReactiveContainerComponent;
  let fixture: ComponentFixture<ReactiveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ReactiveContainerComponent,
        AreaMouseDirective
      ]
    });
    fixture = TestBed.createComponent(ReactiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
  it('Debe crear un DIV con el Background "blue" y tamaño "400px"', () => {
    const elem: HTMLButtonElement = fixture.debugElement.query(By.directive(AreaMouseDirective)).nativeElement;
    expect(elem).toBeTruthy();
    expect(elem.style.backgroundColor).toEqual('blue');
    expect(elem.style.height).toEqual('400px');
  });
});
