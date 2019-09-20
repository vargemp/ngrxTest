import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-funny-text',
  templateUrl: './funny-text.component.html',
  styleUrls: ['./funny-text.component.css']
})
export class FunnyTextComponent implements OnInit {

  @Input() funnyText: string;
  text$: Observable<any>;

  constructor(private store: Store<AppState>) { }


  ngOnInit() {
    this.text$ = this.store.pipe(select(state => state.crossState.passableText));
  }

}
