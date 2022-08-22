import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslatorComponent } from './component/translator/translator.component';
import { VistaTranslatorComponent } from './pages/vista-translator/vista-translator.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent,
    VistaTranslatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
