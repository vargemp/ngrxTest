import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BananaComponent } from './banana/banana.component';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './app.state';
import { CarComponent } from './car/car.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromCar from './car/state/car.reducer';

const appRoutes: Routes = [
  {path: 'banana', component: BananaComponent},
  {path: 'car', component: CarComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BananaComponent,
    CarComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreModule.forFeature(fromCar.carFeatureKey, fromCar.carReducer),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
