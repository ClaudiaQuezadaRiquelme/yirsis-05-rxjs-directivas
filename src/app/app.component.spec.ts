import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveModule } from './reactive/reactive.module';
import { ThemeDirective } from './directives/theme.directive';
import { BtnThemeDirective } from './directives/btn-theme.directive';
import { ReactiveContainerComponent } from './reactive/reactive-container/reactive-container.component';

describe('AppComponent', () => {
  beforeEach(async () => await TestBed.configureTestingModule({
    declarations: [
      AppComponent
    ],
    imports: [
      ReactiveModule,
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
