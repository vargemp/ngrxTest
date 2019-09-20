import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { BananaComponent } from './banana/banana.component';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './app.state';
import { CarComponent, RoundNumberPipe } from './car/car.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromCar from './car/state/car.reducer';
import { FunnyTextComponent } from './funny-text/funny-text.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { CarService } from './car/state/car.service';

const appRoutes: Routes = [
  {path: 'banana', component: BananaComponent, data: {animation: 'Banana'} },
  {path: 'car', component: CarComponent, data: {animation: 'Car'} },
];

@NgModule({
  declarations: [
    AppComponent,
    BananaComponent,
    CarComponent,
    FunnyTextComponent,
    RoundNumberPipe,
    ChildComponentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    StoreModule.forRoot(reducers),
    // StoreModule.forFeature(fromCar.carFeatureKey, fromCar.carReducer),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
