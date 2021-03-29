import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './PaginaPrincipal/header/header.component';
import { BodyComponent } from './PaginaPrincipal/body/body.component';
import { FooterComponent } from './PaginaPrincipal/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, FooterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
