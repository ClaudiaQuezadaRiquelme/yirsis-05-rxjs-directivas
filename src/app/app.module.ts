import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveModule } from './reactive/reactive.module';
import { ThemeDirective } from './directives/theme.directive';
import { BtnThemeDirective } from './directives/btn-theme.directive';

@NgModule({
  declarations: [
    AppComponent,
    ThemeDirective,
    BtnThemeDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
