import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaNovoComponent } from './pessoa-novo/pessoa-novo.component';
import { PessoaEditarComponent } from './pessoa-editar/pessoa-editar.component';

const routes: Routes = [
  {path: 'pessoa', component: PessoaComponent},
  {path: 'pessoa/novo', component: PessoaNovoComponent},
  {path: 'pessoa/editar/:id', component: PessoaEditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
