import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaComponent } from './ana/ana.component';

const routes: Routes = [
  { path: 'ana', component: AnaComponent },
  // alttakı kısım router kısmının calısması ıcın olması gereken bır koddur
  { path: '', redirectTo: 'ana', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
