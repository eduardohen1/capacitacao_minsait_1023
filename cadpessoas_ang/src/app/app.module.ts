import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { HttpClientModule } from '@angular/common/http';
import { PessoaNovoComponent } from './pessoa-novo/pessoa-novo.component';
import { PessoaEditarComponent } from './pessoa-editar/pessoa-editar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    PessoaNovoComponent,
    PessoaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
