import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { WeatherDetailComponent } from 'src/app/weather-detail/weather-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: WeatherDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
