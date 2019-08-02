import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, getMyBanana } from '../app.state';
import { getNewBanana, peelBanana, eatBanana, initiateTimeHop } from './state/banana.actions';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.css']
})
export class BananaComponent implements OnInit {

  title = 'My NgRx Banana App';
  banana$: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.newBanana();
    this.banana$ = this.store.pipe(select(getMyBanana));
  }

  newBanana() {
    this.store.dispatch(getNewBanana());
  }

  peelBanana() {
    this.store.dispatch(peelBanana());
  }

  biteBanana() {
    this.store.dispatch(eatBanana({bites: 3}));
  }

  rotBanana() {
    this.store.dispatch(initiateTimeHop());
  }
}
