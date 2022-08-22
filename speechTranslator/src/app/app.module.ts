import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './translator/components/components.component';
import { TranslatorComponent } from './component/translator/translator.component';
import { VistaTranslatorComponent } from './pages/vista-translator/vista-translator.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
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
