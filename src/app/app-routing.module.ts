import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaMusicasComponent } from './components/atualiza-musicas/atualiza-musicas.component';
import { ListMusicasComponent } from './components/list-musicas/list-musicas.component';

const routes: Routes = [
  {   path:'', redirectTo: 'lista', pathMatch:'full' },
  {   path:'lista', component:ListMusicasComponent  },
  {   path: 'atualiza', component:AtualizaMusicasComponent},
  {   path: '**', redirectTo: 'lista', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
